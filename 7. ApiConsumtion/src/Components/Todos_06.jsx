// Request : GET
// Params : None
// URL:https://fakeserver-o4dt.onrender.com/todos
// DIsplay entire Information in Table 
// Show perticular todos on RadioButton
// Add Live search where user will search todos by its title.
// Use Bootstrap-4 CDN

// USe fetch and axios Both to consume the api.

import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://fakeserver-o4dt.onrender.com/todos";

function Todos_06() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch all todos using fetch
  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      });
  }, []);

  // Live search using axios
  useEffect(() => {
    if (search === "") {
      // Reset to all todos using fetch
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => setTodos(data));
    } else {
      axios
        .get(API_URL)
        .then((res) => {
          const filtered = res.data.filter((todo) =>
            todo.title.toLowerCase().includes(search.toLowerCase())
          );
          setTodos(filtered);
        });
    }
  }, [search]);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Todos List</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Select</th>
              <th>ID</th>
              <th>Title</th>
              <th>description</th>
              <th>created</th>
              <th>user_id</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>
                  <input
                    type="radio"
                    name="selectedTodo"
                    onChange={() => setSelectedTodo(todo)}
                    checked={selectedTodo && selectedTodo.id === todo.id}
                  />
                </td>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.created}</td>
                <td>{todo.user_id}</td>
                <td>
                  {todo.completed ? (
                    <span className="badge badge-success">Yes</span>
                  ) : (
                    <span className="badge badge-danger">No</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedTodo && (
        <div className="card mt-4">
          <div className="card-header">Selected Todo</div>
          <div className="card-body">
            <h5 className="card-title">{selectedTodo.title}</h5>
            <p className="card-text">
              <strong>ID:</strong> {selectedTodo.id}
              <br />
              <strong>Completed:</strong>{" "}
              {selectedTodo.completed ? "Yes" : "No"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Todos_06;