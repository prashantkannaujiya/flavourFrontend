import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Styling/displayFood.css';
import { currentFetch, currentUser } from "./App";
import { connect } from "react-redux";
function DisplayFood({dispatch,user})
{
    var [food,setfood]=useState([])
    const navigate=useNavigate()
    const location=useLocation()
    const processing=useContext(currentFetch)

    function toCart(product)
    {
        console.log(user)
        if(user)
        {
            fetch('https://flavourbackend.onrender.com/addToCart/'+product._id+'/'+user._id)
                
            .then(res=>res.json())
            .then((data)=>{
                console.log(data)
                if(data.message=='duplicate')
                {
                    alert('Already in cart')
                }
                if(data.message=='done')
                {
                    alert('Inserted')
                }
            })
        }
else{
    alert("Login needed to use cart")
}
    }
    useEffect(()=>{
        processing(true)
        fetch('https://flavourbackend.onrender.com/fetch/'+location.state.cat+'/'+location.state.price)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data);
            setfood(data)
           processing(false)
        })
        .catch(err=>{console.log(err);navigate('/error');
        processing(false)})
       
    },[location.state])
    
   
    return(
<div>
{(food.length!=0 ? <div id='displayFood'>
{food.map((a)=>{
    return <div id='product'>
<p id='foodPic'><img src={a.img} alt={a.id}/></p>
<p>{a.name}</p>
<p>$ {a.price}</p>
<p><button onClick={()=>{toCart(a)}}>Add to Cart</button></p>
</div>
})}</div>:<p className="noneMsg">No product matches your query</p>)}
</div>
    )
}
export default connect((store)=>{return store})(DisplayFood)