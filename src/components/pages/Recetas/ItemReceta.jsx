import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { borrarDatosAPI, leerRecetasAPI } from '../../../helpers/queries';


const ItemReceta = ({recetas,fila,setListaRecetas}) => {
   
    const borrarReceta = async ()=>{
    const respuesta = await borrarDatosAPI(recetas._id)
    if(respuesta.status===200){
        console.log("producto borrado")
    }
    const recetaAPI = await leerRecetasAPI()
    if(recetaAPI.status===200){
        const recetasActualizadas = await recetaAPI.json()
        setListaRecetas(recetasActualizadas)

    }
    }

    return (
        <tr>
            <td className='text-center'>{fila}</td>
            <td>{recetas.nombreReceta}</td>
            <td>{recetas.tipo}</td>
            <td>
            <Link className="btn btn-warning me-lg-2" to={`/administrador/editar/${recetas._id}`}>
            <i className="bi bi-pencil-square"></i>
            </Link>
            <Button onClick={borrarReceta} variant="danger">
            <i className="bi bi-trash"></i>
            </Button>

            </td>
        </tr>
    );
};

export default ItemReceta;