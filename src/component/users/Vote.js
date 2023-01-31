import React, { useState, useEffect } from "react";
import { Card, Row } from 'antd';
import {  Link} from "react-router-dom";



const Vote = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(db => db.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  const handleVote = (id) => {
    fetch(`http://localhost:3001/users/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ votes: users.find(c => c.id === id).votes + 1 })
    })
      .then(db => db.json())
      .then(data => {
        const updatedUsers = [...users];
        const userIndex = updatedUsers.findIndex(c => c.id === id);
        updatedUsers[userIndex].votes = data.votes;
        setUsers(updatedUsers);
      })
      .catch(err => console.error(err));
  };
  const totalVotes = users.reduce((sum, user) => sum + user.votes, 0);



  return (
    <div className="container">

<br></br><br></br>
        <Link className="btn btn-primary" to="/dash">
        Back to Dashboard
      </Link>
      <br></br><br></br>
      <div className="py-5">
        <h1 >Candidates</h1>
        <table class="table">

          <tbody>





            <ul>
              {users.map(user => (
                <Row span={8} className="py-4 border-primary d-flex justify-content-center" >
                  <Card className="py-5 border-primary d-flex justify-content-center" style={{
                    width: 500,
                  }} key={user.id}>
                    {user.name}: {user.position}: {user.votes} votes
                    <button class="btn btn-outline-primary m-3" onClick={() => handleVote(user.id)}>Vote</button>
                  </Card>

                </Row>

              ))}
            </ul>

            <p className='text-primary'>Total votes: {totalVotes}</p>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Vote;