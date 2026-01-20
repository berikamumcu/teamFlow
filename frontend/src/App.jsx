import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Projects from "./pages/Projects";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  
  return (
    <div className={darkMode ? "layout dark" : "layout"}>
      <Sidebar />

      <main className="content">
        <Routes>
          <Route path="/" element={<Users />} />
          <Route
            path="/settings"
            element={
              <Settings
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
            
          />

          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;


