import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { guardarRecetasAPI } from "../../../helpers/queries";



const FormularioReceta = () => {
    const {register, handleSubmit, formState: {errors}, reset, setValue} = useForm()
    
    const onSubmit = async (receta)=>{
      const respuesta = guardarRecetasAPI(receta)
      
        reset()
      
    }
    return (
        <section className="container mainSection">
            <h1>NUEVAS RECETAS</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
           
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre Receta</Form.Label>
          <Form.Control type="text" placeholder="Ejemplo. Tarta de Jamon y Queso..." {...register("nombreReceta",{
            required: "El nombre de la receta es obligatorio",
            minLength: {
                value: 3,
                message: "Debe ingresar como minimo 3 caracteres"
            },
            maxLength: {
                value: 50,
                message: "Debe ingresar como minimo 50 caracteres"
            },
          })} />
          {errors.nombreReceta && <p>{errors.nombreReceta.message}</p> }
          </Form.Group>
  
        <Form.Group className="mb-3" controlId="tipo">
          <Form.Label>Tipo</Form.Label>
          <Form.Select {...register("tipo",{
            required: "Debe seleccionar una opcion"
          })}>
            <option value="">Seleccione una opcion</option>
            <option value="Dulce">Dulce</option>
            <option value="Salada">Salada</option>
            <option value="Infusiones">Infusiones</option>
          </Form.Select>
          {errors.tipo && <p>{errors.tipo.message}</p> }
        </Form.Group>
        <Form.Group className="mb-3" controlId="ingredientes">
          <Form.Label>Ingredientes</Form.Label>
          <Form.Control as="textarea" placeholder="Ejemplo. Jamon, Queso, Huevo, Cebolla" {...register("ingredientes",{
            required: "Los ingredientes de la receta son obligatorios",
            minLength: {
                value: 3,
                message: "Debe ingresar como minimo 3 caracteres"
            },
            maxLength: {
                value: 1000,
                message: "Debe ingresar como maximo 1000 caracteres"
            }
            
          })} />
          {errors.ingredientes && <p>{errors.ingredientes.message}</p> }
          </Form.Group>
          <Form.Group className="mb-3" controlId="Instrucciones">
          <Form.Label>Instrucciones</Form.Label>
          <Form.Control as="textarea" placeholder="Ejemplo. Colocar la masa sobre una asadera..." {...register("instrucciones",{
            required: "Las instrucciones son obligatorias",
            minLength: {
                value: 50,
                message: "Debe ingresar 50 caracteres como minimo"
            },
            maxLength: {
                value: 1000,
                message: "Debe ingresar como maximo 1000 caracteres"
            }
          })} />
          {errors.instrucciones && <p>{errors.instrucciones.message}</p> }
          </Form.Group>
        
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
        </section>
    );
};

export default FormularioReceta;