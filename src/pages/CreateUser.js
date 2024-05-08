import axios from 'axios';
import React from 'react';
import base_url from "../API/server";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { headerWithToken } from '../API/HeaderInfo';
import { getCurrentUserToken } from "../LocalStorage/LocalStorage";

const CreateUser = () => {
  const handleUser = (event) => {
    event.preventDefault();
    const userName = event.target.username.value;
    const firstName = event.target.firstname.value;
    const middleName = event.target.middlename.value;
    const lastName = event.target.lastname.value;
    const email = event.target.email.value;
    const phoneNo = event.target.phoneno.value;
    const status = true;
    const password = event.target.password.value;
    const createdBy = 1;
    const modifiedBy = 1;
    const data = {
      username: userName,
      email: email,
      password: password,
      createdBy: createdBy,
      modifiedBy: modifiedBy,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      phoneNo: phoneNo,
      status: status,
    };

    axios.post(`${base_url}/user/`, data, { headers: headerWithToken() })
      .then((response) => {
        toast.success(response.data.message, { position: "bottom-center" });
        event.target.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Header />
      <Sidebar />

      <div className='mb-5 text-center'><h1>User Form</h1></div>
      <div className="container d-flex justify-content-center">
        <div className='form'>
          <form onSubmit={handleUser}>
            <div className="form-group mb-3">
              <label htmlFor="username">User Name</label>
              <input type="text" className="form-control" name="username" id="username" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="firstname">first Name</label>
              <input type="text" className="form-control" name="firstname" id="firstname" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="middlename">Middle Name</label>
              <input type="text" className="form-control" name="middlename" id="middlename" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="lastname">last Name</label>
              <input type="text" className="form-control" name="lastname" id="lastname" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" name="email" id="email" />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="phoneNo">Phone Number</label>
              <input type="number" className="form-control" name="phoneno" id="phoneno" />
            </div>
            <div className="form-group mb-3 " style={{ alignItems: "center" }}>
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary mx-2">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default CreateUser;
