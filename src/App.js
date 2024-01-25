import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import logo from "./logo.svg";
import "./Styling/style.css";
import { FaUserAlt } from "react-icons/fa";
import Explore from "./Explore";
import DisplayFood from "./DisplayFood";
import Login from "./Login";
import Register from "./Register";
import { createContext, useEffect, useState } from "react";
import Cart from "./Cart";
import { Provider } from "react-redux";
import mainstore from "./reducers/store";
import { connect } from "react-redux";
import Header from "./Header";
import SearchFood from "./SearchFood";
import Errorfound from "./Errorfound";
export const currentFetch = createContext();

function App({ dispatch, user }) {
  const navigate = useNavigate();
  const [fetch,setfetch]=useState(false)

  return (
    <div className="App">
      <currentFetch.Provider value={setfetch}>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/explore" element={<Explore></Explore>}>
          <Route path="/explore/food" element={<DisplayFood></DisplayFood>} />
        </Route>
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/searchFood" element={<SearchFood></SearchFood>}/>
        <Route path='/error' element={<Errorfound></Errorfound>}/>
      </Routes>
      </currentFetch.Provider>
      {fetch && <div className="lds-dual-ring"></div>}
      {fetch && <div className="waitBackground"></div>}
    </div>
  );
}

export default connect((store) => {
  return store;
})(App);
