import PropTypes from "prop-types";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

const Login = ({ insideRegister }) => {
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="loginCard" data-aos="zoom-in">
        <div className="fields">
          <img src={logo} alt="image" />
          <span id="title">lyte</span>
          {insideRegister && (
            <input type="text" placeholder="Enter your name" />
          )}
          <input type="text" placeholder="Enter your username" />
          <input type="password" placeholder="Enter your password" />
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
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            {insideRegister ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  insideRegister: PropTypes.bool,
};

export default Login;