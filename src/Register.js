import React, { useState } from "react";
import './Styling/register.css'
function Register()
{
    var [user,setuser]=useState({name:'',username:'',age:'',city:'',password:''})
    function register(ev)
    {
        ev.preventDefault();
       
fetch('https://flavourbackend.onrender.com/register',{
    method:'post',
    mode:'cors',
    headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user)
}).then(res=>res.json())
.then((data)=>{
    console.log(data)
alert(data.message)
})
ev.target.reset();
    }
    return(
        <div id="register">
        <h3>flavour</h3>
            <h2>Welcome to Flavour</h2>
            <h2>Create Account</h2>
            <form id='registrationForm' onSubmit={(e)=>{register(e)}}>
<table>
    <tr>
        <td>Name</td>
        <td><input type="text" name="registration" onChange={(e)=>{setuser({...user,name:e.target.value})}}/></td>
    </tr>
    <tr>
        <td>Username</td>
        <td><input type="text" name="registration" onChange={(e)=>{setuser({...user,username:e.target.value})}}/></td>
    </tr>
    <tr>
        <td>Age</td>
        <td><input type="text" name="registration" onChange={(e)=>{setuser({...user,age:e.target.value})}}/></td>
    </tr>
    <tr>
        <td>City</td>
        <td><input type="text" name="registration" onChange={(e)=>{setuser({...user,city:e.target.value})}}/></td>
    </tr>
    <tr>
        <td>Password</td>
        <td><input type="password" name="registration" onChange={(e)=>{setuser({...user,password:e.target.value})}}/></td>
    </tr>
</table>
<button >Submit</button>
            </form>
        </div>
    )
}
export default Register;