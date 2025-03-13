import "./Profile.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import img from "../assets/me.jpeg";

const Profile = ({ admin }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem("user");
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <section data-aos="fade-up">
        <div className="image">
          <img src={img} alt="" />
        </div>
        <div className="details">
          <div className="connections">
            <div>
              <div className="count">12</div>
              <div className="text">Posts</div>
            </div>
            <div>
              <div className="count">{userData.followers?.length || 0}</div>
              <div className="text">Followers</div>
            </div>
            <div>
              <div className="count">{userData.following?.length || 0}</div>
              <div className="text">Following</div>
            </div>
          </div>
          <div className="name">
            <span>{userData.name}</span>
            <p>@{userData.username}</p>
          </div>
          {userData.bio && <div className="bio">{userData.bio}</div>}
          {!admin && <button>Follow</button>}
        </div>
      </section>
      <span data-aos="fade-up">--- POSTS ---</span>
      <div className="posts" data-aos="fade-up">
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
        <img src={img} alt="" />
      </div>
    </div>
  );
};

Profile.propTypes = {
  admin: PropTypes.bool,
};

export default Profile;