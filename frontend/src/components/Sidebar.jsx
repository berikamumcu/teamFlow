import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">TeamFlow</h2>

      <nav>
        <NavLink to="/">Users</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        
      </nav>
    </aside>

    
  );
}

export default Sidebar;
