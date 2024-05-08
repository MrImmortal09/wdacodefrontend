import axios from 'axios';
import React, { useEffect } from 'react'
import base_url from '../API/server';
import { headerWithToken } from '../API/HeaderInfo';

// import { getCurrentUserToken } from '../LocalStorage/LocalStorage';
const UserList = () => {
useEffect(()=>{
handleview();
},[])
const [userdata,setUserData]=React.useState([]);
const handleview=()=>{
axios.get(`${base_url}/user/`,{headers:{ Accept: "application/json",
"Content-Type": "application/json",
Authorization: `Bearer ${headerWithToken()}`
}}).then((response)=>{
console.log(response.data.data)
setUserData(response.data.data)
}).catch((error)=>{
console.log(error)
console.log("ërror")
})
}
return (
<div>
<div className='container mt-5'>
<table className='table table-bordered'>
<thead>
<tr>
<th className='text-center'>Name</th>
<th className='text-center'>Email</th>
</tr>
</thead>
<tbody>
{ userdata.length>0?userdata.map((user)=>(
<tr key={user.userId}>
<td className='text-center'>{user.userName}</td>
<td className='text-center'>{user.email}</td>
</tr>
)):"" }
</tbody>
</table>
</div>
</div>
)
}
export default UserList