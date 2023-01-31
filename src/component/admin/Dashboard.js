import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";


const Vote = () => {

  const { id } = useParams();
  console.log(id);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUsers(result.data);
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUser();
  };

  const totalVotes = users.reduce((sum, user) => sum + user.votes, 0);

  return (
    <div className="container">
      <div className="py-4">
        <h1>Dashboard</h1>
        <table class="table">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Position</th>
              <th scope="col">Emails</th>
              <th scope="col">Votes</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.position}</td>
                <td>{user.email}</td>
                <td className='text-primary'>{user.votes}</td>
                <td>

                  <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link class="btn btn-primary mr-2" to={`/users/vote/${user.id}`}>
                    Vote
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className='text-primary '>Total votes: {totalVotes}</p>
      </div>
    </div>
  );
}
export default Vote;