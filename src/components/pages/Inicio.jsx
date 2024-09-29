import { Container, Row } from 'react-bootstrap';
import CardReceta from './Recetas/CardReceta';
import { leerRecetasAPI } from '../../helpers/queries';
import { useEffect, useState } from 'react';

const Inicio = () => {
    const [receta, setReceta] = useState([])
    
    const cargarRecetasAPI = async ()=>{
    const respuesta = await leerRecetasAPI()
    
    if(respuesta.status===200){
        const productoEncontrado = await respuesta.json()
        
        setReceta(productoEncontrado)
        
        
       }
    }

    useEffect(()=>{
        cargarRecetasAPI()
    },[])

    return (
        <section className='mainSection'>
            <img className='banner' src="https://secrecyjewels.es/blog/wp-content/uploads/2022/08/blogs-de-cocina.jpg" alt="Imagen principal blog de recetas" />
            <Container className='mt-5'>
                <h1>Nuestras Recetas</h1>
                <hr />
                <Row>
                    {
                      receta.map((receta, indice)=>(<CardReceta recetas={receta} key={indice}></CardReceta>))
                    } 
                    
                </Row>
            </Container>
        </section>
    );
};

export default Inicio;