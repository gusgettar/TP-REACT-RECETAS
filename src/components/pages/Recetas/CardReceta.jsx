import { Button, Card, Col } from 'react-bootstrap';

import receta from '../../../assets/receta.jpg'
const CardReceta = ({recetas}) => {
    return (
        <Col md={4} lg={3} className="mb-3">
        <Card className='h-100'>
            <div>
<img src={receta} className='card-img' alt="" />
     
            </div>
        <Card.Body>
          <Card.Title>{recetas.nombreReceta.toUpperCase()}</Card.Title>
          <Card.Text>
            Receta tipo: <strong>{recetas.tipo}</strong>
            
            
          </Card.Text>
          <Button variant="primary">IR A LA RECETA COMPLETA</Button>
        </Card.Body>
      </Card>
        </Col>
    );
};

export default CardReceta;