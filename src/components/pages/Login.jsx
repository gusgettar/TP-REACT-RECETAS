import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { login } from '../../helpers/queries';
import { useForm } from 'react-hook-form';


const Login = ({setUsuarioLogueado}) => {
const {handleSubmit,register} = useForm()
  
  const navegacion = useNavigate()

  const onSubmit = async (usuario) => {
    
    try {
    const respuesta = await login(usuario)
    if(respuesta.status===200){
      const datos = await respuesta.json()
      setUsuarioLogueado({email: datos.email})
      sessionStorage.setItem('userKey',JSON.stringify({email: datos.email}))
      navegacion("/administrador")
    }
    } catch (error) {
      console.error(error)
    }
    
        
  };

  return (
    <div className=' mainSection gradient'>

    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={4}>
          <h2>Login</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                {...register('email')}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                {...register('password')}
                />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
                </div>
  );
};

export default Login;