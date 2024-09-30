import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardReceta = ({recetas}) => {
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
          <Link className="btn btn-primary  " state={{recetas}} to={`/recetaCompleta`}>IR A LA RECETA COMPLETA</Link>
        </Card.Body>
      </Card>
        </Col>
    );
};

export default CardReceta;