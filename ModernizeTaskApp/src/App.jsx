import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Users from "./Components/Users";
import Tasks from "./Components/Tasks";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
