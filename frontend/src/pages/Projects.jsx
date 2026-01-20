import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [status, setStatus] = useState("planned");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/projects/")
      .then(res => res.json())
      .then(data => setProjects(data));

    fetch("http://127.0.0.1:8000/api/users/")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const handleCreate = e => {
    e.preventDefault();

    fetch("http://127.0.0.1:8000/api/projects/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        user: Number(userId),
        status,
      }),
    })
      .then(res => res.json())
      .then(newProject => {
        setProjects(prev => [...prev, newProject]);
        setName("");
        setUserId("");
        setStatus("planned");
      });
  };

  const handleDelete = id => {
    fetch(`http://127.0.0.1:8000/api/projects/${id}/`, {
      method: "DELETE",
    }).then(() => {
      setProjects(prev => prev.filter(p => p.id !== id));
    });
  };

  return (
    <div className="projects-page">
      <h2>Projects</h2>

      <form className="project-form" onSubmit={handleCreate}>

        <input
          type="text"
          placeholder="Project name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />

        <select
          value={userId}
          onChange={e => setUserId(e.target.value)}
          required
        >
          <option value="" disabled>
            Select user
          </option>

          {users.map(u => (
            <option key={u.id} value={u.id}>
              {u.username}
            </option>
          ))}
        </select>

        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="planned">Planned</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>

        <button type="submit">Create</button>
      </form>

      <div className="project-list">
        {projects.length === 0 && <p>No projects yet.</p>}

        {projects.map(p => (
          <div className="project-card" key={p.id}>
            <div>
              <strong>{p.name}</strong>
              <div style={{ fontSize: "13px", color: "#6b7280" }}>
                Assigned to: {p.user_username}
              </div>
            </div>

            <div>
              <span className={`status-badge ${p.status}`}>
                {p.status.toUpperCase()}
              </span>
              <button
                className="delete-btn"
                onClick={() => handleDelete(p.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;




