import { register } from "../../JS/Actions/authActions";

import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import "./Register.css";

const Register = ({ history }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Gender: "",
    Birth: "",
    Phone: "",
    Adresse: "",
    Email: "",
    Password: "",
    Role: "User",
  });
  const errors = useSelector((state) => state.authReducer.errors);
  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleConfim = () => {
    dispatch(register(formData, history));
  };

  return (
    <div>
      <div className="login">
        <div className="split-screen">
          <div className="left">
            <div className="copy"></div>
          </div>
          <div className="right">
            <form>
              <div className="copy">
                <h2>Create Account</h2>
                {errors &&
                  errors.map((error, i) => (
                    <h6 className="error_msg" key={i}>
                      {error.msg}
                    </h6>
                  ))}
              </div>
              <div className="input-container name">
                <label for="FirstName">FirstName</label>
                <input
                  onChange={handleFormChange}
                  id="FirstName"
                  name="FirstName"
                  type="text"
                />
              </div>
              <div className="input-container name">
                <label for="LastName">LastName</label>
                <input
                  onChange={handleFormChange}
                  id="LastName"
                  name="LastName"
                  type="text"
                />
              </div>
              <div className="input-container name">
                <label for="Gender">Gender</label>
                <input
                  onChange={handleFormChange}
                  id="Gender"
                  name="Gender"
                  type="text"
                />
              </div>
              <div className="input-container name">
                <label for="Date Of Birth">Date Of Birth</label>
                <input
                  onChange={handleFormChange}
                  id="Date Of Birth"
                  name="Date Of Birth"
                  type="text"
                />
              </div>
              <div className="input-container name">
                <label for="Adresse<">Adresse</label>
                <input
                  onChange={handleFormChange}
                  id="Adresse"
                  name="Adresse"
                  type="text"
                />
              </div>
              <div className="input-container name">
                <label for="Phone">Phone</label>
                <input
                  onChange={handleFormChange}
                  id="Phone"
                  name="Phone"
                  type="text"
                />
              </div>
              <div className="input-container email">
                <label for="email">Email</label>
                <input
                  onChange={handleFormChange}
                  id="email"
                  name="Email"
                  type="email"
                />
              </div>
              <div className="input-container password">
                <label for="password">Password</label>
                <input
                  onChange={handleFormChange}
                  id="password"
                  name="Password"
                  type="password"
                  placeholder="Must be at lesat 6 characters"
                />
                <i className="far fa-eye-slash"></i>
              </div>

              <button
                onClick={handleConfim}
                className="signup-btn"
                type="button"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
