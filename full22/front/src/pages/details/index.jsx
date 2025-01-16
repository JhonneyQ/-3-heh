import React, { useEffect, useState } from "react";
import { Col, Grid, Row } from "antd";
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import axios from "axios";
import { Context } from "../../components/context";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router"



const Details = () => {
  const [cards, setCards] = useState([]);
  const { favorites, toggleFav } = useContext(Context);
  const {id} = useParams()
  
    
    
  const getAllData = async () => {
    try {
      const res = await axios(`http://localhost:3000/${id}`);
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
        <Row className="cards">
            <Col span={8} className="card" key={cards._id}>
              <div className="par">
                <img src="https://preview.colorlib.com/theme/tasty/images/dessert-1.jpg" />
                <div className="pa">
                  <h2>{cards.title}</h2>
                  <p>{cards.description}</p>
                  <button onClick={() => toggleFav(cards)}>
                    {favorites.find((q) => q._id === cards._id) ? (
                      <FaHeart />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>
                </div>
              </div>
              <span>${cards.price}</span>
            </Col>
        </Row>
      </div>
    </section>
  );
};

export default Details;
