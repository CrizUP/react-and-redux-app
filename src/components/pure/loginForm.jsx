import * as Yup from "yup";
import { Formik ,Form, Field, ErrorMessage } from "formik";
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Formato de correo no válido').required('El correo es obligatorio'),
    password: Yup.string().required('La contraseña es requerida')
});

const LoginForm = ({logged, fetching, onLogin}) => {
    const initialCredentials = {
        email:'',
        password:''
    }
    return (
        <Formik 
        initialValues={initialCredentials}
        onSubmit={ async (values, {setSubmitting} ) => {
            
            onLogin(values.email, values.password)
            
        }} 
        validationSchema={loginSchema}>
        {props => {
                    const { values, touched, errors, isSubmitting, handleChange, handleBlur } = props;
                    return (
                        <Form>
                            <label htmlFor="email" className="form-label">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="example@email.com"
                                type="email"
                                className="form-control form-control-lg mb-2"
                            />
                            {/* {errors.email && touched.email && (
                                <div className="alert alert-danger">{errors.email}</div>
                            )} */}
                            <ErrorMessage name="email" render={msg => <div className="alert alert-danger">{msg}</div>} />
                            <label htmlFor="password" className="form-label">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="Password"
                                type="password"
                                className="form-control form-control-lg mb-2"
                            />
                            {/* {errors.password && touched.password && (
                                <div className="alert alert-danger">{errors.password}</div>
                                //otra forma sería  dejar la validación y poner <ErrorMessage name="password"/>
                            )} */}
                            <ErrorMessage name="password" render={msg => <div className="alert alert-danger">{msg}</div>} />
                            <button type="submit" className="btn btn-success btn-lg mt-4">Login</button>
                            {fetching ? (
                                <p>Enviando credenciales...</p>
                            ) : null}
                            {isSubmitting ? (
                                <p>Enviando credenciales isSubmitting...</p>
                            ) : null}
                        </Form>
                    );
                }}

        </Formik>
    );
};


LoginForm.propTypes = {
    logged: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired
};


export default LoginForm;
