import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { CiSearch } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { BsBasket3Fill } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <section id="head">
        <div className="container">
         <div className="head">
         <a className="a">colo<span>shop</span></a>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
              <li>
                <Link to="/add">Add</Link>
              </li>
            </ul>
          </nav>
          <div className="icons">
            <CiSearch />
            <IoPersonSharp />
            <BsBasket3Fill />
          </div>
         </div>
        </div>
      </section>
      <section className="sec2">
        <div className="container">
            <p>Spring / Summer Collection 2017</p>
            <h1>Get up to 30% Off New Arrivals</h1>
            <button>SHOP NOW</button>
        </div>
      </section>
    </header>
  );
};

export default Header;
