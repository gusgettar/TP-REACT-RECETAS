const URLreceta = import.meta.env.VITE_API_RECETAS
const URLusuarios = import.meta.env.VITE_API_USUARIOS

//SOLICITUD GET

export const leerRecetasAPI = async()=>{
    try{
        const respuesta = await fetch(URLreceta)
        return respuesta
    }catch(error){
        console.error(error)
        
        return false
    }
}

export const buscarRecetasAPI = async (id)=>{
    try{
    const respuesta = await fetch(URLreceta+'/'+id)
    return respuesta
    }catch(error){
        console.log(error)
        
        return false
    }
}

export const guardarRecetasAPI = async (nuevaReceta)=>{
    try{
        const respuesta = await fetch(URLreceta,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(nuevaReceta)
        })
        return respuesta
    }catch(error){
        console.error(error)
        return false
    }
}

export const login = async (usuario)=>{
    console.log(JSON.stringify(usuario))
    try{
        const respuesta = await fetch(URLusuarios,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(usuario)
        })
        return respuesta
    }catch(error){
        console.error(error)
        return false
    }
}

export const modificarDatosAPI = async (productoModificado,id)=>{
    try{
        const respuesta = await fetch(URLreceta+'/'+id,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(productoModificado)
        })
        return respuesta

    }catch(error){
        console.error(error)
        return false
    }
}

export const borrarDatosAPI = async(id)=>{
    try {
     const respuesta = await fetch(URLreceta+'/'+id,{
         method: "DELETE"
     })
     console.log(respuesta);
     return respuesta;
    } catch (error) {
     console.error(error)
     return false;
    }
 }