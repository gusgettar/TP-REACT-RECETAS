const URLreceta = "http://localhost:3000/recetas"

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