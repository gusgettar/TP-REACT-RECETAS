import { Table } from "react-bootstrap";
import { leerRecetasAPI } from "../../helpers/queries";
import ItemReceta from "./Recetas/ItemReceta";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";





const Administrador = () => {
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
        <section  className="mainSection gradient">
           <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Recetas Disponibles</h1>
        <Link className="btn btn-primary" to='/administrador/crear'>
        <i className="bi bi-file-earmark-plus"></i> Nueva Receta
        </Link>
      </div>

        <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Nº</th>
            <th>Titulo</th>
            <th>Categoria</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            receta.map((recetas,posicion)=>(<ItemReceta recetas={recetas} key={recetas.id} fila={posicion + 1} setListaRecetas={setReceta}></ItemReceta>))
          }
        </tbody>
      </Table>
        </section>
    );
};

export default Administrador;