import "./Profile.css";
import PropTypes from "prop-types";
import img from "../assets/me.jpeg";

const Profile = ({ admin }) => {
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
              <div className="count">300</div>
              <div className="text">Followers</div>
            </div>
            <div>
              <div className="count">200</div>
              <div className="text">Following</div>
            </div>
          </div>
          <div className="name">
            <span>Issak Thomas</span>
            <p>@issakthomas</p>
          </div>
          <div className="bio">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            ullam distinctio quis omnis possimus? Laborum, ullam tempora.
            Deserunt earum nesciunt assumenda, cum pariatur voluptatibus maxime
            quae, odio quo doloremque incidunt!
          </div>
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