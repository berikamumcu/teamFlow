import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/users/")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  const filteredUsers = users.filter(user =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  
  function addUser(e) {
    e.preventDefault();

    if (!username || !email) return;

    fetch("http://127.0.0.1:8000/api/users/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
      }),
    })
      .then(res => res.json())
      .then(newUser => {
        setUsers(prev => [...prev, newUser]);
        setUsername("");
        setEmail("");
      });
  }

  function deleteUser(id) {
    fetch(`http://127.0.0.1:8000/api/users/${id}/`, {
      method: "DELETE",
    }).then(() => {
      setUsers(prev => prev.filter(u => u.id !== id));
    });
  }

  return (
    <>
      <h1>Users</h1>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <form className="user-form" onSubmit={addUser}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <button>Add User</button>
      </form>

      {filteredUsers.map(user => (
        <div key={user.id} className="user-card">

            <div className="user-info">
              <p>{user.username}</p>
              <small>{user.email}</small>
            </div>


            <div className="user-actions">
                <button
                  className="delete-btn"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
            </div>

        </div>
      ))}
    </>
  );
}

export default Users;


