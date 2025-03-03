import { Lightbulb, LogOut, Pen, Trash2 } from "lucide-react";
import "./Settings.css";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  return (
    <div className="settings">
      <section data-aos="fade-up">
        <div className="top">
          Edit profile
          <Pen />
        </div>
        <div>
          Light Mode
          <Lightbulb />
        </div>
        <div className="red">
          Delete Account
          <Trash2 />
        </div>
        <div className="bottom red" onClick={() => navigate("/login")}>
          Log Out
          <LogOut />
        </div>
      </section>
    </div>
  );
};

export default Settings;