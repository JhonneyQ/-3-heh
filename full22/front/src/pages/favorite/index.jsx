import React, { useContext } from 'react'
import { Context } from '../../components/context';
import { Col, Grid, Row } from "antd";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import axios from "axios";
import "./index.scss"

const Favorite = () => {


      const { favorites, toggleFav } = useContext(Context);
  return (
    <section className="dynamic">
        <div className="container">
          <Row className="cards">
            { 
              favorites.map((p) => (
                <Col span={8} className="card" key={p._id}>
                  <div className="par">
                    <img src="https://preview.colorlib.com/theme/tasty/images/dessert-1.jpg" />
                    <div className="pa">
                      <h2>{p.title}</h2>
                      <p>{p.description}</p>
                      <button onClick={() => toggleFav(p)}>
                        {favorites.find((q) => q._id === p._id) ? (
                          <FaHeart />
                        ) : (
                          <FaRegHeart />
                        )}
                      </button>
                      <Link to={`/details/:${p._id}`}>details</Link>
                    </div>
                  </div>
                  <span>${p.price}</span>
                </Col>
              ))}
          </Row>
        </div>
      </section>
  )
}

export default Favorite