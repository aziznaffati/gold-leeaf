import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { login } from "../../JS/Actions/authActions";
const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();;
    
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });
  const errors = useSelector((state) => state.authReducer.errors);
  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    const handleConfim = () => {
      dispatch(login(formData, history));
       
    };


  return (
    <div className="login">
      <div className="split-screen">
        <div className="left">
          <div className="copy"></div>
        </div>
        <div className="right">
          <form>
            <div className="copy">
              <h2>Sign in</h2>
              {errors &&
    errors.map((error,i) => <h6 className="error_msg" key={i}>{error.msg}</h6>)
    }
            </div>

            <div className="input-container email">
              <label for="Email">Email</label>
              <input
                onChange={handleFormChange}
                Id="Email"
                name="Email"
                type="email"
              />
            </div>
            <div className="input-container password">
              <label for="Password">Password</label>
              <input
                onChange={handleFormChange}
                id="Password"
                name="Password"
                placeholder="Must be at lesat 6 characters"
                type="password"
              />
              <i className="far fa-eye-slash"></i>
            </div>

            <button onClick={handleConfim} className="signup-btn" type="button">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
