import React from "react";
import { Link } from "react-router-dom";
import "./index.scss"

const Header = () => {
  return (
    <header>
      {/* <section>
        <div className="container">
          <div className="all">
            <input />
            <a href="*">SHOPERS</a>
            <div>

            </div>
          </div>
        </div>
      </section> */}
      <section className="nav">
        <div className="container">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/add">Add</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites</Link>
                    </li>
                </ul>
            </nav>
        </div>
      </section>
      <section className="shoes">
        <div className="container">
            <div className="all">
                <h1>Finding Your Perfect Shoes</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                <button>SHOP NOW</button>
            </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
