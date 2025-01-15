import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { favContext } from "../../context";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { Col, Grid, Row } from "antd";

import "./index.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const { toggleFav, favorites } = useContext(favContext);

  const [cards, setCards] = useState([]);

  const getAllData = async () => {
    try {
      const res = await axios("http://localhost:3000");
      setCards(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <main>
      <section className="kamaz">
        <div className="container">
          <Row>
            <Col span={8} className="all">
              <div className="truck">
                <FaTruck />
              </div>
              <div className="par">
                <h2>FREE SHIPPING</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </p>
              </div>
            </Col>
            <Col span={8} className="all">
              <div className="truck">
                <FaTruck />
              </div>
              <div className="par">
                <h2>FREE SHIPPING</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </p>
              </div>
            </Col>
            <Col span={8} className="all">
              <div className="truck">
                <FaTruck />
              </div>
              <div className="par">
                <h2>FREE SHIPPING</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="cat">
        <div className="container">
            <Row className="cards">
                <Col className="card" span={8}>
                    <span>COLLECTIONS</span>
                    <h2>Women   </h2>
                </Col>
                <Col className="card" span={8}>
                    <span>COLLECTIONS</span>
                    <h2>Women   </h2>
                </Col>
                <Col className="card" span={8}>
                    <span>COLLECTIONS</span>
                    <h2>Women   </h2>
                </Col>
            </Row>
        </div>
      </section>
      <section className="dynamic">
        <div className="container">
          <h1>Featured products</h1>
          <Row className="cards">
            {cards &&
              cards.map((p) => (
                <Col span={6} className="card" key={p._id}>
                  <img  src="https://preview.colorlib.com/theme/shoppers/images/cloth_1.jpg"/>
                  <div className="par">
                    <h2>{p.title}</h2>
                    <p>{p.description}</p>
                    <span>${p.price}</span>
                    <button
                      onClick={() => {
                        toggleFav(p);
                      }}
                    >
                      {favorites.find((q) => q._id === p._id) ? (
                        <FaHeart />
                      ) : (
                        <FaRegHeart />
                      )}
                    </button>
                    <Link to={`details/${p._id}`}>Details</Link>
                  </div>
                </Col>
              ))}
          </Row>
        </div>
      </section>
      <section className="last">
        <div className="container">
            <h2>Big Sale</h2>
            <Row className="tw">
                <Col span={12}>
                    <img src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg"/>
                </Col>
                <Col span={12} className="par">
                    <h2>50% less  in all items</h2>
                    <span>By <span>Carl Smith</span></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
                    <button>SHOP NOW</button>
                </Col>
            </Row>
        </div>
      </section>
    </main>
  );
};

export default Home;
