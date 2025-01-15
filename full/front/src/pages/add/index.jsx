import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./index.scss";

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  description: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number().required("Required"),
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

  const deletee = async (id) => {
     await axios.delete(`http://localhost:3000/${id}`)
     getAllData()
     
  }

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <div className="add">
        <h1>ADD</h1>
        <Formik
          initialValues={{
            title: "",
            description: "",
            price: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={async (values) => {
            // same shape as initial values
            try {
              await axios.post("http://localhost:3000", values);
            } catch (error) {
              console.log(error);
            }
            actions.resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="title" />
              {errors.title && touched.title ? <div>{errors.title}</div> : null}
              <Field name="description" />
              {errors.description && touched.description ? (
                <div>{errors.description}</div>
              ) : null}
              <Field name="price" type="number" />
              {errors.price && touched.price ? <div>{errors.price}</div> : null}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="table">
          <table>
            <thead>
                <tr>
                    <th>title</th>
                    <th>description</th>
                    <th>price</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {cards && cards.map((p) => (
                    <tr>
                        <td>{p.title}</td>
                        <td>{p.description}</td>
                        <td>{p.price}</td>
                        <td><button onClick={()=>deletee(p._id)}>DELETE</button></td>
                    </tr>
                ))}
            </tbody>
          </table>
      </div>
    </>
  );
};

export default Add;
