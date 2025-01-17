import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Col, Grid, Row } from "antd";
import { FavContext } from "../../components/favorit";
import {Helmet} from "react-helmet";

const Details = () => {




    const {id} = useParams()
    const [cards, setCards] = useState([]);
      const { favorites, toggleFav } = useContext(FavContext);


    const data = async ()=>{
        try {
            const res = await axios(`http://localhost:3000/${id}`)
            setCards(res.data.data)
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() => {
      data()
    }, [])
    

  return (
    <section className="dynamic">
         <Helmet>
                <meta charSet="utf-8" />
                <title>details</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <div className="container">
          <Row className="cards">
                <Col span={4} className="card" key={cards._id}>
                  <img src="https://preview.colorlib.com/theme/coloshop/images/product_10.png" />
                  <p>{cards.description}</p>
                  <span>${cards.price}</span>
                  <button onClick={() => toggleFav(cards)}>
                    {favorites.find((q) => cards._id === cards._id) ? (
                      <FaHeart />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>
                </Col>
          </Row>
        </div>
      </section>
  )
}

export default Details