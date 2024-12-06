import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UsersList from "./components/UsersList";
import Login from "./components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Navigation Buttons */}
        <div className="p-4 space-x-4">
          <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">
            Go to Login Page
          </Link>
          <Link to="/users" className="bg-blue-500 text-white px-4 py-2 rounded">
            Go to Users List
          </Link>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<UsersList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
