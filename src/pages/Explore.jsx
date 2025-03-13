import "./Explore.css";
import { Search } from "lucide-react";
import img from "../assets/me.jpeg";

const Explore = () => {
  return (
    <div className="explore">
      <div className="search" data-aos="fade-up">
        <input type="text" placeholder="Please enter the username to search" />
        <Search className="icon" />
      </div>
      <div className="results" data-aos="fade-up">
        <div className="result">
          <img src={img} alt="profilePic" />
          <div>
            <span className="name">Issak Thomas</span>
            <span className="username">@issakthomas</span>
          </div>
          <button>Follow</button>
        </div>
      </div>
    </div>
  );
};

export default Explore;