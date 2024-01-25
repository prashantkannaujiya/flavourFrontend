import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import './Styling/searchFood.css';
import { connect } from "react-redux";
import { currentFetch } from "./App";
function SearchFood({dispatch,user})
{
    const [list,setlist]=useState([])
    const location=useLocation()
    const searchItem=location.state;
    console.log(searchItem)
    const load=useContext(currentFetch)
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
            })
        }
else{
    alert("Login needed to use cart")
}
    }
    useEffect(()=>{
        load(true)
        fetch('https://flavourbackend.onrender.com/searchFood/'+searchItem)
        .then(res=>res.json())
        .then((data)=>{
            setlist(data)
            load(false)
        })

        },[searchItem])

    return(
        <div>
        
{
    list.length!=0 ?
    <div id='searchPage'>
    <h3>Found {list.length} results for <i>{searchItem}</i> </h3>
    <table>
      {
        list.map((a)=>{
          return  <tr>
                <td id="imagecell"><img id="searchPic" src={a.img} alt={a.id}/></td>
                <td><p>{a.name}</p>
                <p>Category : {a.category}</p>
                <p>Description : {a.dsc}</p>
                <p>Price : $ {a.price}</p>
                <p><button onClick={()=>{toCart(a)}}>Add To Cart</button></p>
                </td>
               
            </tr>
        
    })
    }
    

    </table> </div>:<div className="notFound"><h2 >Nothing matched your query</h2><h2>Try with something else</h2></div>}
        </div>
    )
}
export default connect((store)=>{return store})(SearchFood)