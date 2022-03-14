import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiUser } from "react-icons/fi";
import { BsCalendarDate } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getAuthUser, toggleTrue } from "../../JS/Actions/authActions";
import "./Profile.css";
import userlogo from "../../assets/userlogo.png";

const Profile = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer.user);
  useEffect(() => {
    dispatch(getAuthUser);
  }, [dispatch]);
  return (
    <div>
      <div>
        <div className="container">
          <div className="informations-bar">
            <Link to={`Profile/${auth._id}`}>
              <button onClick={() => dispatch(toggleTrue())}>
                Edit Profile
              </button>
            </Link>
            <div className="profile">
              <img src={userlogo} />
              <p className="namee">
                {auth.FirstName} {auth.LastName}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-info">
        <div className="info-col">
          <div className="profile-intro">
            <h3>Info</h3>
            <h2>
              <BsCalendarDate style={{ color: "black", fontSize: "1em" }} />
              {auth.Birth}
            </h2>
            <h2>
              <ImLocation style={{ color: "black", fontSize: "1em" }} />
              {auth.Adresse}
            </h2>
            <h2>
              <MdEmail style={{ color: "black", fontSize: "1em" }} />
              {auth.Phone}
            </h2>
            <h2>
              <BsFillTelephoneFill
                style={{ color: "black", fontSize: "1em" }}
              />
              {auth.Email}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
