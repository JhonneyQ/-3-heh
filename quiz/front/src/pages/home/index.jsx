import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.scss";
import { Col, Grid, Row } from "antd";
import { FavContext } from "../../components/favorit";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const { favorites, toggleFav } = useContext(FavContext);
//   const [sorted, setSorted] = useState([])


  const filtered = category
    ? cards.filter((p) => p.category === category)
    : cards;

  const dFiltered = filtered.filter((p) =>
    p.description.toLowerCase().includes(search.toLowerCase())
  );

 



  const wCat = () => {
    setCategory("womens");
  };
  const aCat = () => {
    setCategory("accessories");
  };
  const allCat = () => {
    setCategory("");
  };
  const menCat = () => {
    setCategory("mens");
  };

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
      <section className="class">
        <div className="container">
          <div className="cards">
            <div className="card">
              <h2>WOMEN'S</h2>
            </div>
            <div className="card">
              <h2>WOMEN'S</h2>
            </div>
            <div className="card">
              <h2>WOMEN'S</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="dynamic">
        <div className="container">
          <h1>New Arrivals</h1>
          <input type="text" onChange={(e) => setSearch(e.target.value)} />
          {/* <button onClick={()=>setSorted( dFiltered.sort((a, b) => a.description - b.description))}>sorta</button>
          <button onClick={()=>setSorted( dFiltered.sort((a, b) => b.description - a.description))}>sortb</button> */}
          <div className="but">
            <button onClick={() => allCat()}>ALL</button>
            <button onClick={() => wCat()}>WOMEN'S</button>
            <button onClick={() => aCat()}>ACCESSORIES</button>
            <button onClick={() => menCat()}>MEN'S</button>
          </div>
          <Row className="cards">
            {cards &&
              dFiltered.map((p) => (
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
      <section className="cloth">
        <div className="container">
          <h2>Best Sellers</h2>
          <Row className="cards">
            <Col span={4} className="card">
              <img src="https://preview.colorlib.com/theme/coloshop/images/product_10.png" />
              <p>Fujifilm X100T 16 MP Digital Camera (Silver)</p>
              <span>$520</span>
            </Col>
            <Col span={4} className="card">
              <img src="https://preview.colorlib.com/theme/coloshop/images/product_10.png" />
              <p>Fujifilm X100T 16 MP Digital Camera (Silver)</p>
              <span>$520</span>
            </Col>
            <Col span={4} className="card">
              <img src="https://preview.colorlib.com/theme/coloshop/images/product_10.png" />
              <p>Fujifilm X100T 16 MP Digital Camera (Silver)</p>
              <span>$520</span>
            </Col>
            <Col span={4} className="card">
              <img src="https://preview.colorlib.com/theme/coloshop/images/product_10.png" />
              <p>Fujifilm X100T 16 MP Digital Camera (Silver)</p>
              <span>$520</span>
            </Col>
          </Row>
        </div>
      </section>
      <section className="blog">
        <div className="container">
          <h2 className="ust">Latest Blogs</h2>
          <Row className="cards">
            <Col span={6} className="card">
              <img src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg" />
              <div className="inc">
                <h2>Here are the trends I see coming this fall</h2>
                <p>by admin | dec 01, 2017</p>
              </div>
            </Col>
            <Col span={6} className="card">
              <img src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg" />
              <div className="inc">
                <h2>Here are the trends I see coming this fall</h2>
                <p>by admin | dec 01, 2017</p>
              </div>
            </Col>
            <Col span={6} className="card">
              <img src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg" />
              <div className="inc">
                <h2>Here are the trends I see coming this fall</h2>
                <p>by admin | dec 01, 2017</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="let">
        <div className="container">
          <div className="par">
            <h2>Newsletter</h2>
            <p>
              Subscribe to our newsletter and get 20% off your first purchase
            </p>
          </div>
          <div className="act">
            <input />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
