import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UsersList from "./components/UsersList";
import Login from "./components/Login";

const App = () => {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<UsersList />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
