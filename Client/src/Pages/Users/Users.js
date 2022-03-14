import React from "react";
import "./Users.css";

const Users = ({ users }) => {
  return (
    <tr>
      <td>{users.FirstName}</td>
      <td>{users.LastName}</td>
      <td>{users.Adresse}</td>
      <td>{users.Gender}</td>
      <td>{users.Phone}</td>
      <td>{users.Role}</td>

      <div className="del">
        <button>Delete</button>
      </div>
    </tr>
  );
};

export default Users;
