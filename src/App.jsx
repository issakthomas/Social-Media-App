import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Aside from "./components/Aside";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  const location = useLocation();
  return (
    <>
      <div className="app">
        {location.pathname !== "/login" &&
          location.pathname !== "/register" && <Aside />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile admin={true} />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login insideRegister={true} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;