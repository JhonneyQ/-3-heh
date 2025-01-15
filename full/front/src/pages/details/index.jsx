import { Col, Row } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {

    const {id} = useParams()
   
   
    

    const [card, setCards] = useState([])

    const getDataById = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/${id}`)
            setCards(res.data.data)
            
        } catch (error) {
            console.log(error);
            
        }
    }
    console.log(card);
    

    useEffect(() => {
      getDataById()
    }, [])
    
    
    


  return (
    <section className="dynamic">
        <div className="container">
          <h1>Featured products</h1>
          {console.log(card)}
          <Row className="cards">
              
                <Col span={6} className="card" key={card._id}>
                  <img  src="https://preview.colorlib.com/theme/shoppers/images/cloth_1.jpg"/>
                  <div className="par">
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    <span>${card.price}</span>
                  </div>
                </Col>
        
          </Row>
        </div>
      </section>
  )
}

export default Details