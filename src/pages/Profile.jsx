import "./Profile.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getPost } from "../services/allAPI.js";
import { SERVERURL } from "../services/serverURL.js";

const Profile = ({ admin }) => {
  const [userData, setUserData] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const data = sessionStorage.getItem("user");
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem("token");
        if (token) {
          const reqHeaders = {
            authorization: `Bearer ${token}`,
          };
          const response = await getPost(reqHeaders);
          console.log(response.data);
          setPosts(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <section data-aos="fade-up">
        <div className="image">
          <img src={`${SERVERURL}/storage/${userData.profilePicture}`} alt="" />
        </div>
        <div className="details">
          <div className="connections">
            <div>
              <div className="count">{posts?.length}</div>
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
      <span>--- POSTS ---</span>
      {posts?.length > 0 ? (
        <div className="posts">
          {posts.map((post) => (
            <img
              src={`${SERVERURL}/storage/${post.image}`}
              alt=""
              key={post._id}
            />
          ))}
        </div>
      ) : (
        <div className="nothing">No Posts</div>
      )}
    </div>
  );
};

Profile.propTypes = {
  admin: PropTypes.bool,
};

export default Profile;