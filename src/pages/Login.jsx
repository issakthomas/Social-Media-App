import PropTypes from "prop-types";
import "./Login.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser, loginUser } from "../services/allAPI.js";

const Login = ({ insideRegister }) => {
  const [popupMessage, setPopupMessage] = useState("");
  const [data, setData] = useState({
    name: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  console.log(data);

  const handleRegister = async () => {
    if (!data.name || !data.username || !data.password) {
      setPopupMessage("Please fill all the fields");
    } else {
      try {
        const result = await createUser(data);
        if (result.status === 201) {
          console.log(result.data);
          setData({
            name: "",
            username: "",
            password: "",
          });
          setPopupMessage("User Created Successfully");
          navigate("/login");
        } else {
          alert(result.response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleLogin = async () => {
    if (!data.username || !data.password) {
      setPopupMessage("Please fill all the fields");
    } else {
      try {
        const result = await loginUser(data);
        if (result.status === 200) {
          console.log(result);
          sessionStorage.setItem("user", JSON.stringify(result.data.user));
          sessionStorage.setItem("token", result.data.token);
          navigate("/");
        } else if (result.response.status === 404) {
          setPopupMessage(result.response.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (popupMessage) {
      setTimeout(() => {
        setPopupMessage("");
      }, 3000);
    }
  }, [popupMessage]);

  return (
    <div className="login">
      {popupMessage && <div className="popup">{popupMessage}</div>}
      <div className="loginCard" data-aos="zoom-in">
        <div className="fields">
          <span id="title">lyte</span>
          {insideRegister && (
            <input
              type="text"
              placeholder="Enter your name"
              value={data.name}
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
            />
          )}
          <input
            type="text"
            placeholder="Enter your username"
            value={data.username}
            onChange={(e) => {
              setData({ ...data, username: e.target.value });
            }}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
          />
          {insideRegister ? (
            <span>
              Already have an account?{" "}
              <Link className="link" to={"/login"}>
                Login
              </Link>
            </span>
          ) : (
            <span>
              Don&apos;t have an account?{" "}
              <Link className="link" to={"/register"}>
                Sign Up
              </Link>
            </span>
          )}
          {insideRegister ? (
            <button onClick={handleRegister}>Sign Up</button>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  insideRegister: PropTypes.bool,
};

export default Login;