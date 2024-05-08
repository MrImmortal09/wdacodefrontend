import React from 'react';
import base_url from "../API/server"
import axios from 'axios';
import {ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { doLogin } from '../LocalStorage/LocalStorage';
const Login = () => {
const navigate=useNavigate();
const userLogin =(event)=>{
event.preventDefault();

const userName = event.target.username.value;
const password = event.target.password.value;
const data = {userName,password};
console.log("data",data);
axios.post(`${base_url}/generate-token`,data,{headers:{
Accept:"application/json",
"Content-Type":"application/json"
}})
.then((response)=>{
console.log(response)
if(response.data.status==="Success"){
doLogin(response.data, () => {
// console.log("login detail save to local storage");
});
navigate("/createuser");
}
if(response.data.status==='fail'){
toast("Something Went wrong ")
}
})
.catch((error)=> console.log(error))
}
return (
<div>
<div className="container" >
<ToastContainer/>
<form className="form-signin" onSubmit={userLogin}>
<h2 className="form-signin-heading">Please sign in</h2>
<p>
<label htmlFor="username" className="sr-only">Username</label>
<input type="text" id="username" name="username" className="form-control" placeholder="Username" />
</p>
<p>
<label htmlFor="password" className="sr-only">Password</label>
<input type="password" id="password" name="password" className="form-control" placeholder="Password" />
</p>
<button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
</form>
</div>
</div>
)
}
export default Login