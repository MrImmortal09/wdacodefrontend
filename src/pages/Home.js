import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
const navigate = useNavigate();
const handleUser =()=>{
navigate("/login")
}
return (
<div>
<h1>This is home page</h1>
<button onClick={handleUser}> login Page</button>
</div>
)
}
export default Home