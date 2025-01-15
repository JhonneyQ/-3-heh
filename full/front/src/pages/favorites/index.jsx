import React, { useContext, useEffect, useState } from "react";
import { favContext } from "../../context";
import axios from "axios";
import { Col, Row } from "antd";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";


const Favorites = () => {
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
    <section className="dynamic">
      <div className="container">
        <h1>Featured products</h1>
        <Row className="cards">
          {favorites &&
            favorites.map((p) => (
              <Col span={6} className="card" key={p._id}>
                <img src="https://preview.colorlib.com/theme/shoppers/images/cloth_1.jpg" />
                <div className="par">
                  <h2>{p.title}</h2>
                  <p>{p.description}</p>
                  <span>${p.price}</span>
                  <button
                    onClick={() => {
                      toggleFav(p);
                    }}
                  >
                    {cards.find((q) => q._id === p._id) ? (
                      <FaRegHeart />
                    ) : (
                      <FaHeart />
                    )}
                  </button>
                  <Link to={`details/${p._id}`}>Details</Link>
                </div>
              </Col>
            ))}
        </Row>
      </div>
    </section>
  );
};

export default Favorites;
