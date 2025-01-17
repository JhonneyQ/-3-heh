import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Col, Grid, Row } from "antd";
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { FavContext } from "../../components/favorit";
import "./index.scss"

const Favorites = () => {
  const { favorites, toggleFav } = useContext(FavContext);
  return (
    <section className="fav">
      <div className="container">
        <Row className="cards">
          {favorites &&
            favorites.map((p) => (
              <Col span={4} className="card" key={p._id}>
                <img src="https://preview.colorlib.com/theme/coloshop/images/product_10.png" />
                <p>{p.description}</p>
                <span>${p.price}</span>
                <br />
                <Link to={`details/${p._id}`}>Details</Link>
                <button onClick={() => toggleFav(p)}>
                  {favorites.find((q) => q._id === p._id) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )}
                </button>
              </Col>
            ))}
        </Row>
      </div>
    </section>
  );
};

export default Favorites;
