import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Tasks() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!token) navigate("/");
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
     const res = await axios.get("https://taskapi-47rw.onrender.com/api/tasks/all", {
  headers: {
    Authorization: `Bearer ${token}`
  }
});
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`https://taskapi-47rw.onrender.com/api/tasks/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Tasks</h2>
      <button onClick={() => { logout(); navigate("/"); }}>Logout</button>
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {tasks
        .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()))
        .map((task) => (
          <div key={task._id}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </div>
        ))}
    </div>
  );
}
