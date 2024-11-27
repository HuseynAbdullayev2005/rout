import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
    title: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    description: Yup.string()
        .min(5, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    price: Yup.string()
        .min(1, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const MyForm = () => {

    const [inpTitle, setInpTitle] = useState('');
    const [inpDesc, setInpDesc] = useState('');
    const [inpPrice, setInpPrice] = useState('');


    async function postet() {
        const res = await fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: inpTitle, description: inpDesc, price: inpPrice }),
        });
        const data = await res.json();
        console.log(data);

    }

    return (
        <div>

            <Formik
                initialValues={{
                    title: '',
                    description: '',
                    price: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {

                    console.log(values);

                }}
            >
                {({ errors, touched, setFieldValue }) => (
                    <Form onSubmit={postet}>
                        { }
                        <div>Title daxil et</div>
                        <Field
                            name="title"
                            value={inpTitle}
                            onChange={(e) => {
                                setInpTitle(e.target.value);
                                setFieldValue('title', e.target.value);
                            }}
                        />
                        {errors.title && touched.title ? (
                            <div>{errors.title}</div>
                        ) : null}

                        <br />
                        <br />
                        <br />

                        { }
                        <div>Description daxil et</div>
                        <Field
                            name="description"
                            value={inpDesc}
                            onChange={(e) => {
                                setInpDesc(e.target.value);
                                setFieldValue('description', e.target.value);
                            }}
                        />
                        {errors.description && touched.description ? (
                            <div>{errors.description}</div>
                        ) : null}

                        <br />
                        <br />
                        <br />

                        { }
                        <div>Price daxil et</div>
                        <Field
                            name="price"
                            type="text"
                            value={inpPrice}
                            onChange={(e) => {
                                setInpPrice(e.target.value);
                                setFieldValue('price', e.target.value);
                            }}
                        />
                        {errors.price && touched.price ? <div>{errors.price}</div> : null}

                        <br />
                        <br />
                        <br />

                        { }
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default MyForm;
