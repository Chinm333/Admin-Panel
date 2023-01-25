import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginOption from "./pages/loginOption";
import UserLogin from "./pages/userLogin";
import HeadLogin from "./pages/headLogin";
import Signup from "./pages/signup";
import TableDashboard from "./pages/table";
import Navbar from "./pages/Navbar";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginOption />} />
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/headLogin" element={<HeadLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/head-dashboard" element={[<Navbar />, <TableDashboard />]} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
