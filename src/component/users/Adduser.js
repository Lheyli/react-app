import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",  
    phone: "",
    position: "",

  });

  const { name, username, email, phone, position } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3001/users", user);
    navigate.push("/");
  };

  const redirectToLog = () => {
         
    window.location.href="/dash"
    
  };
 
 
  return (
    
    <div className="container">
        <br></br> <br></br> <br></br>
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Position"
              name="position"
              value={position}
              onChange={e => onInputChange(e)}
            />
          </div>
          <br></br>
          <button className="btn btn-primary btn-block">Register</button>
          <div onClick={redirectToLog} className="btn btn-primary btn-block" const path = "/dash">Dashboard</div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;