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
              <Card.Title>{recetas.nombreReceta.toUpperCase()}</Card.Title>
              <Card.Text>
                Receta tipo: <strong>{recetas.tipo}</strong>
              </Card.Text>
              <Card.Text>
                Receta Ingredientes: <strong>{recetas.ingredientes}</strong>
              </Card.Text>
              <Card.Text>
                Receta Instrucciones: <strong>{recetas.instrucciones}</strong>
              </Card.Text>
              
            </Card.Body>
          </Card>
            </Col>
        </span>
        
    );
};

export default CardRecetasCompletas;