import React, { useContext, useEffect, useRef, useState } from "react";
import { currentFetch, currentUser } from "./App";
import { useLocation, useNavigate } from "react-router-dom";
import './Styling/cart.css';
import { connect } from "react-redux";
function Cart({dispatch,user})
{
    const [list,setlist]=useState([])
    const [price,setprice]=useState(0);
    var c= useRef(0);
    const set=useContext(currentFetch)
  const navigate=useNavigate()
    useEffect(()=>{
        c.current=0;
       getCart();
    },[user])
    function getCart()
    {
        if(user!=null)
        {
            set(true)
fetch('https://flavourbackend.onrender.com/cartProduct/'+user._id)
.then(res=>res.json())
.then((data)=>{
    c.current=0;
    console.log(data)
    setlist(data)
    set(false)
})
        }
        else
        {
            navigate('/');
        }
    }

    function removeProduct(product)
    {
        console.log(product._id)
        fetch('https://flavourbackend.onrender.com/cartRemove/'+user._id+'/'+product._id)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            if(data.message=='cart-updated')
            {c.current=0.00;
                console.log(c.current)
                getCart();
            }
            
        })
    }
    return(
        <div>
              <h1 id='cartHeading'>You have {list.length} items in cart</h1>
{
    list.length!=0 ? <div>
      
        { 
            list.map((a)=>{c.current=c.current+a.price;console.log(c.current);console.log(a.price)
                return <div id="cart">{console.log(a)}
                    <p className="foodpic"><img src={a.img} alt="product"/></p>
                    <div className="cartDetail">
                    <p className="productDetail">{a.name}</p>
<p className="productDetail" style={{fontWeight:'600'}}>$ {a.price}</p>
<p>{a.category}</p>
<p>{a.country}</p>
<button onClick={()=>{removeProduct(a)}}>Delete Item</button>
                    </div>
                </div>
            })
           
        }
    </div>:<div></div>
}
<div id="cartSummary">
    <h2>Cart Summary</h2>
    <p>Total Products : {list.length}</p>
    <p>Total : $ {parseInt(c.current)}</p>{console.log(c.current)}
</div>
<div></div>
        </div>
    )
}
export default connect((store)=>{return store})(Cart)