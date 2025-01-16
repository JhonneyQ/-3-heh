import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import axios from "axios";
import { Context } from "../../components/context";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import "./index.scss";
import { Col, Grid, Row } from "antd";

const Home = () => {
  const { favorites, toggleFav } = useContext(Context);
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState("")
//   const [category, setCategory] = useState("")

  const getAllData = async () => {
    try {
      const res = await axios("http://localhost:3000");
      setCards(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  

  const filteredProducts = cards.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase().trim())
);
  

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <main>
      <section className="ch">
        <div className="container">
          <div className="chef">
            <img src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg" />
            <div className="par">
              <span>About Tasty</span>
              <h2>Our chef cooks the most delicious food for you</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="dynamic">
        <div className="container">
          <h3>Our Menu</h3>
          <h1>Discover Our Exclusive Menu</h1>
          <div className="but">
            <button>Main</button>
            <button >Dessert</button>
            <button >Drinls</button>
          </div>
          <input onChange={()=>filteredProducts()}/>
          <Row className="cards">
            { 
              cards.map((p) => (
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
                      <Link to={`/details/${p._id}`}>details</Link>
                    </div>
                  </div>
                  <span>${p.price}</span>
                </Col>
              ))}
          </Row>
          <div className="la">
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
            <button>Make a Redervation</button>
          </div>
        </div>
      </section>
      <section className="guest">
        <div className="container">
            <div className="par">
              <span>Guests Says</span>
              <h2>Our Satisfied Guests says </h2>
            </div>
              <Row className="cards">
                <Col span={6} className="card">
                    <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg"/>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <h3>Dennis Green</h3>
                </Col>
                <Col span={6} className="card">
                    <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg"/>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <h3>Dennis Green</h3>
                </Col>
                <Col span={6} className="card">
                    <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg"/>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <h3>Dennis Green</h3>
                </Col>
              </Row>
        </div>
      </section>
    </main>
  );
};

export default Home;
