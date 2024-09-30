import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';


const CardRecetasCompletas = () => {
    const location = useLocation()
    const {recetas} = location.state
    return (
        
            <Col md={4} lg={3} className="mb-3">
            <Card className='h-100'>
                <div>
    <img src={recetas.imagen} className='card-img' alt="" />
         
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
        
    );
};

export default CardRecetasCompletas;