import "./Home.css";
import { CircleUserRound, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFeed, likePost, unlikePost } from "../services/allAPI.js";
import { SERVERURL } from "../services/serverURL.js";

const Home = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const data = sessionStorage.getItem("user");
    if (!data) {
      navigate("/login");
    } else {
      setUserData(JSON.parse(data));
    }
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem("token");
        if (token) {
          const reqHeaders = {
            authorization: `Bearer ${token}`,
          };
          const response = await getFeed(reqHeaders);
          console.log(response.data);
          setPosts(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleLike = async (postId, isLiked) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeaders = {
        authorization: `Bearer ${token}`,
      };
      let response;
      if (isLiked) {
        response = await unlikePost(postId, reqHeaders);
      } else {
        response = await likePost(postId, reqHeaders);
      }
      console.log(response.data);
      setPosts((prevPosts) =>
        prevPosts.map((post) => {
          if (post._id === postId) {
            return {
              ...post,
              likes:
                response.data === "Post unliked"
                  ? post.likes.filter((id) => id !== userData._id)
                  : [...post.likes, userData._id],
            };
          }
          return post;
        }),
      );
    }
  };

  return (
    <div className="home">
      {posts?.length > 0 ? (
        <section data-aos="fade-up">
          {posts?.map((post) => (
            <div className="postCard" key={post._id}>
              <div className="top">
                <CircleUserRound />
                {post.userId.username}
              </div>
              <div className="middle">
                <img src={`${SERVERURL}/storage/${post.image}`} alt="image" />
              </div>
              <div className="bottom">
                <div className="caption">{post.caption}</div>
                <div className="interactions">
                  <span>{post.likes.length}</span>
                  <Heart
                    fill={post.likes.includes(userData._id) && "red"}
                    color={post.likes.includes(userData._id) ? "red" : "white"}
                    onClick={() =>
                      handleLike(post._id, post.likes.includes(userData._id))
                    } // Pass isLiked
                  />

                  {/*<MessageCircle color="#ffffff" />*/}
                  {/*<span>32</span>*/}
                </div>
                {/*<div className="comments">*/}
                {/*  <div className="comment">*/}
                {/*    <span*/}
                {/*      className="user"*/}
                {/*      onClick={() => navigate("/profile/username")}*/}
                {/*    >*/}
                {/*      bomberladen_911*/}
                {/*    </span>{" "}*/}
                {/*    <span className="text">sheeshh!! ✈️💥</span>*/}
                {/*  </div>*/}
                {/*  <div className="comment">*/}
                {/*    <span*/}
                {/*      className="user"*/}
                {/*      onClick={() => navigate("/profile/username")}*/}
                {/*    >*/}
                {/*      thehitler*/}
                {/*    </span>{" "}*/}
                {/*    <span className="text">🔥🔥</span>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
            </div>
          ))}
        </section>
      ) : (
        <div className="nothing">No Posts</div>
      )}
    </div>
  );
};

export default Home;