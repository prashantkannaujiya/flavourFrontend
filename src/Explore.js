import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Styling/explore.css";
function Explore() {
  const navigate = useNavigate();
  var [choice, setchoice] = useState("desserts");
  var [price, setprice] = useState(-1);
  useEffect(() => {
    console.log(price);
    navigate("/explore/food", { state: { cat: choice, price: price } });
  }, [choice, price]);

  function removePrice() {
    const f = document.getElementById("priceForm");
    f.reset();
    setprice(-1);
  }
  return (
    <div id="explore">
      <div id="filter">
        <h4>Filter</h4>
        <h5>Category</h5>
        <div id="Categoryoptions">
          <div>
            {" "}
            <button id="headingOptions">{choice}</button>
            <div id="dropDown">
              <p
                onClick={() => {
                  setchoice("bbqs");
                }}
              >
                Bbqs
              </p>
              <p
                onClick={() => {
                  setchoice("best-foods");
                }}
              >
                Best food
              </p>
              <p
                onClick={() => {
                  setchoice("breads");
                }}
              >
                Breads
              </p>
              <p
                onClick={() => {
                  setchoice("burgers");
                }}
              >
                Burgers
              </p>
              <p
                onClick={() => {
                  setchoice("chocolates");
                }}
              >
                Chocolates
              </p>
              <p
                onClick={() => {
                  setchoice("fried-chicken");
                }}
              >
                Fried Chicken
              </p>
              <p
                onClick={() => {
                  setchoice("drinks");
                }}
              >
                Drinks
              </p>
              <p
                onClick={() => {
                  setchoice("desserts");
                }}
              >
                Desserts
              </p>
              <p
                onClick={() => {
                  setchoice("ice-cream");
                }}
              >
                Ice Cream
              </p>
              <p
                onClick={() => {
                  setchoice("pizzas");
                }}
              >
                Pizzas
              </p>
              <p
                onClick={() => {
                  setchoice("sandwiches");
                }}
              >
                Sandwiches
              </p>
              <p
                onClick={() => {
                  setchoice("sausages");
                }}
              >
                Sausages
              </p>
              <p
                onClick={() => {
                  setchoice("steaks");
                }}
              >
                Steaks
              </p>
              <p
                onClick={() => {
                  setchoice("our-foods");
                }}
              >
                Our Foods
              </p>
            </div>
          </div>
        </div>
        <div id="priceFilter">
          <h5>Price</h5>
          <form id="priceForm">
            <input
              type="radio"
              name="price"
              value={0}
              onClick={() => {
                setprice(0);
              }}
            />
            <label>Less than $ 50</label>
            <br />
            <input
              type="radio"
              name="price"
              value={50}
              onClick={() => {
                setprice(50);
              }}
            />
            <label>$ 50 to $ 100</label>
            <br />
            <input
              type="radio"
              name="price"
              value={100}
              onClick={() => {
                setprice(100);
              }}
            />
            <label>More than $ 100</label>
            <br />
          </form>
          <p>
            <button onClick={removePrice}>Reset Price</button>
          </p>
        </div>
        <div id="sort"></div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default Explore;
