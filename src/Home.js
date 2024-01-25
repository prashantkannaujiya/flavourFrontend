import React from "react";
import gettyImage from './groupFeast.jpg';
import { Link, useNavigate } from "react-router-dom";
function Home()
{
    const navigate=useNavigate();
    return(
<div id='home'>
    <div id='homePic'>
        <img src={gettyImage}/>
    </div>
    <h2>Taste the flavour</h2>
    <h3>Just <Link to={'/explore'}><u>Explore</u></Link> Us</h3>
</div>
    )
}
export default Home;