import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';


const CardRecetasCompletas = () => {
  
    const location = useLocation()
    const {recetas} = location.state
    return (
        <span className='d-flex justify-content-center gradient'>

            <Col md={4} lg={3} className="mb-3">
            <Card style={{width: '500px'}}>
                <div>
    <img src={recetas.imagen} style={{width: '100%', height: '400px',objectFit: 'contain'}} alt="" />
         </div>
            <Card.Body>
              <Card.Title className='fs-3 text-center'>{recetas.nombreReceta.toUpperCase()}</Card.Title>
              <hr />
              <Card.Text>
                <strong className='fs-5'>
                Receta tipo: 
                </strong>
                <span className='fs-5'> {recetas.tipo}</span>
              </Card.Text>
              <Card.Text>
                <strong className='fs-5'>
                Receta Ingredientes: 
                </strong>
                <span>  {recetas.ingredientes}</span>
              </Card.Text>
              <Card.Text>
                <strong className='fs-5'>
                Receta Instrucciones: 
                </strong>
                <span>  {recetas.instrucciones}</span>
              </Card.Text>
              
            </Card.Body>
          </Card>
            </Col>
        </span>
        
    );
};

export default CardRecetasCompletas;