import { useState } from "react";

function Settings({ darkMode, setDarkMode }) {
  const [plan, setPlan] = useState("Free");

  return (
    <>
      <h1>Settings</h1>

      <div className="setting-item">
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
          />
          Dark Mode
        </label>
      </div>


      <div className="setting-item">
        <label>Subscription Plan</label>
        <select
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
        >
          <option value="Free">Free</option>
          <option value="Pro">Pro</option>
          <option value="Team">Team</option>
        </select>

      </div>


      <div className="summary">
        <p>
          Theme: <strong>{darkMode ? "Dark" : "Light"}</strong>
        </p>
        <p>
          Current Plan: <strong>{plan}</strong>
        </p>
      </div>

    </>
  );
}

export default Settings;
