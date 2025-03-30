import "./Explore.css";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { followUser, getUsers } from "../services/allAPI.js";

const Explore = () => {
  const [searchKey, setSearchKey] = useState("");
  const [results, setResults] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem("user");
    if (data) {
      setUserData(JSON.parse(data) || null);
    }
  }, []);

  const handleSearch = async () => {
    try {
      const response = await getUsers(searchKey);
      setResults(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFollow = async (id) => {
    try {
      const token = sessionStorage.getItem("token");
      const header = {
        authorization: `Bearer ${token}`,
      };
      const response = await followUser(id, header);
      console.log(response);
      sessionStorage.setItem("user", JSON.stringify(response.data));
      setUserData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="explore">
      <div className="search" data-aos="fade-up">
        <input
          type="text"
          placeholder="Enter the username to search"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <Search className="icon" onClick={handleSearch} />
      </div>
      <div className="results" data-aos="fade-up">
        {results.length > 0 ? (
          results.map((item) => (
            <div className="result" key={item._id}>
              {/*<img src={img} alt="profilePic" />*/}
              <div>
                <span className="name">{item.name}</span>
                <span className="username">@{item.username}</span>
              </div>
              {userData.following.includes(item?._id) ? (
                <button
                  className="following"
                  onClick={() => {
                    handleFollow(item._id);
                  }}
                >
                  Following
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleFollow(item._id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          ))
        ) : (
          <div className="noResult">Search to find your friends</div>
        )}
      </div>
    </div>
  );
};

export default Explore;