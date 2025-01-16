import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
import "./index.scss"

const SignupSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      description: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      category: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      price: Yup.number().required('Required'),
  });

const Add = () => {
  return (
    <div>
     <h1>Signup</h1>
     <Formik
       initialValues={{
         title: '',
         description: '',
         price: '',
         category:''
       }}
       validationSchema={SignupSchema}
       onSubmit={async (values) => {
         // same shape as initial values
         await axios.post("http://localhost:3000/",values)
       }}
     >
       {({ errors, touched }) => (
         <Form className='form'>
           <Field name="title" />
           {errors.title && touched.title ? (
             <div>{errors.title}</div>
           ) : null}
           <Field name="description" />
           {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null}
           <Field name="price"  />
           {errors.price && touched.price ? <div>{errors.price}</div> : null}
           <Field name="category"  />
           {errors.category && touched.category ? <div>{errors.category}</div> : null}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
  )
}

export default Add