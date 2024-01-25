import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { FaUserAlt } from "react-icons/fa";
import {BsSearch} from 'react-icons/bs';
import Login from "./Login";
import { useState } from "react";
import { useEffect } from "react";
function Header({ dispatch, user }) {
  var [login, setlogin] = useState(false);
  const[searchText,setsearchText]=useState('');
  const navigate = useNavigate();
const location=useLocation()
  useEffect(() => {
    if (login) {
      const b = document.getElementsByTagName("body");
      console.log("in useEffect");
      b[0].addEventListener("click", (e) => {
        const p = document.getElementById("login");
        const l = document.getElementById("loginButton");
        console.log(p);
        if (p != null && l != null) {
          console.log(l.contains(e.target));
          console.log(p.contains(e.target));
          console.log(
            !p.contains(e.target) && e.target != p && !l.contains(e.target)
          );
          if (!p.contains(e.target) && e.target != p && !l.contains(e.target)) {
            console.log("setting login false");
            setlogin(false);
          }
        } else {
          setlogin(false);
        }
      });
    }
    if (user) {
      setlogin(false);
    }
  }, [login, user]);
  function rightPane() {
    try {
      if (user) {
        return (
          <div id="headerLogin">
            <span>{user.name}</span>
            <button
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </button>
            <button onClick={() => {dispatch({type:'LOGOUT_USER'})}}>Logout</button>
          </div>
        );
      } else {
        return (
          <p id="loginButton">
            <FaUserAlt
              onClick={() => {
                setlogin(true);
              }}
            ></FaUserAlt>
          </p>
        );
      }
    } catch (err) {
      console.log(err);
    }
  }

  function searchPage(ev)
  {
    ev.preventDefault();
    navigate('/searchFood',{state:searchText})
    ev.target.reset()
  }
  return (
    <div>
      {" "}
      <div id='header'>
       <Link to={'/'}><h2>flavour</h2></Link> 
        <p id="searchBox">
        <form onSubmit={(e)=>{searchPage(e)}}>
          <input type="text" placeholder="Type your favorite recepie" onChange={(e)=>{setsearchText(e.target.value)}} required/>
          <button><BsSearch></BsSearch></button>
          </form>
        </p>
        <div>{rightPane()}</div>
      </div>
      {login && <Login></Login>}
    </div>
  );
}
export default connect((store) => {
  return store;
})(Header);
