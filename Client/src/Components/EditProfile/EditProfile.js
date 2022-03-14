import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EditUser } from "../../JS/Actions/authActions"
import { useDispatch, useSelector } from "react-redux";
import './EditProfile.css'

const EditProfile = () => {
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
    const edit = useSelector((state) => state.authReducer.edit);
    const userToFind = useSelector(
      (state) => state.authReducer.user
    );
  
  
    useEffect(() => {
      edit
        ? setFormData(userToFind)
        : setFormData({
          FirstName: "",
          LastName: "",
          Gender: "",
          Birth: "",
          Phone: "",
          Adresse: "",
          Email: "",
          Role: "User",
        });
    }, [edit, userToFind]);
  
    const handleFormChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });  
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
                    <h2>Edit  Profile</h2>
                  </div>
                  <div className="input-container name">
                    <label for="FirstName">FirstName</label>
                    <input
                      onChange={handleFormChange}
                      id="FirstName"
                      name="FirstName"
                      type="text"
                      value={formData.FirstName}
                    />
                  </div>
                  <div className="input-container name">
                    <label for="LastName">LastName</label>
                    <input
                      onChange={handleFormChange}
                      id="LastName"
                      name="LastName"
                      value={formData.LastName}
                      type="text"
                    />
                  </div>
                  <div className="input-container name">
                    <label for="Gender">Gender</label>
                    <input
                      onChange={handleFormChange}
                      value={formData.Gender}
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
                      value={formData.Birth}
                    />
                  </div>
                  <div className="input-container name">
                    <label for="Adresse<">Adresse</label>
                    <input
                      onChange={handleFormChange}
                      value={formData.Adresse}
                      id="Adresse"
                      name="Adresse"
                      type="text"
                    />
                  </div>
                  <div className="input-container name">
                    <label for="Phone">Phone</label>
                    <input
                      onChange={handleFormChange}
                      value={formData.Phone}
                      id="Phone"
                      name="Phone"
                      type="text"
                    />
                  </div>
                  <div className="input-container email">
                    <label for="email">Email</label>
                    <input
                      onChange={handleFormChange}
                      value={formData.Email}
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
                  <Link to="/Profile" className="link">
                  <button
                   onClick={() => dispatch(EditUser(userToFind._id, formData))}
                    
                    className="signup-btn"
                    type="button">
                    Edit
                  </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default EditProfile