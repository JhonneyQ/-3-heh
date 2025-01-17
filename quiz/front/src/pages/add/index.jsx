import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  description: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number()
    .min(2, "Too Short!")
    .max(1000, "Too Long!")
    .required("Required"),
  category: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Add = () => {
  const [cards, setCards] = useState([]);

  const getAllData = async () => {
    try {
      const res = await axios("http://localhost:3000");
      setCards(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };



  const deletee = async (id) =>{
    try {
        await axios.delete(`http://localhost:3000/${id}`)
        getAllData()
    } catch (error) {
        console.log(error);
        
    }
  }




  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      <h1>Add</h1>
      <Formik
        initialValues={{
          description: "",
          price: "",
          category: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          // same shape as initial values
          try {
            await axios.post("http://localhost:3000", values);
            getAllData()
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="description" placeholder="description" />
            {errors.description && touched.description ? (
              <div>{errors.description}</div>
            ) : null}
            <Field name="price" placeholder="price" type="number"/>
            {errors.price && touched.price ? <div>{errors.price}</div> : null}
            <Field name="category" placeholder="category" />
            {errors.category && touched.category ? (
              <div>{errors.category}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>

      <div className="container">
        <table>
          <thead>
            <tr>
              <th>descripiton</th>
              <th>price</th>
              <th>category</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>{cards && cards.map((p)=>(
            <tr key={p._id}>
                <td>{p.description}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>
                <td><button onClick={()=> deletee(p._id)}>DELETE</button>
                </td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Add;
