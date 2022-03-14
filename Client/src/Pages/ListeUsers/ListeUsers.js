import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../JS/Actions/authActions";
import Users from "../Users/Users";
import { Table } from "react-bootstrap";
import "./ListeUsers.css";

const ListeUsers = () => {
  const UsersToFind = useSelector((state) => state.authReducer.usersToFind);
  const load = useSelector((state) => state.authReducer.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return load ? (
    <h2>loading</h2>
  ) : (
    <div className="productlist">
      <Table className="mytable">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Adresse</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Role</th>
            <td>-</td>
          </tr>
        </thead>
        <tbody>
          {UsersToFind.map((users) => (
            <Users users={users} key={users.id} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ListeUsers;
