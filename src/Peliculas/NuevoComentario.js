import React, { useState } from "react";

function NuevoComentario({handler}){
    // Nombre, Puntuacion , Comentario
    const[usuario, setUsuario]=useState("");
    const[puntuacion,setPuntuacion]=useState(0);
    const[comentario, setComentario]=useState("");

    return(

        <form onSubmit={(e) => {e.preventDefault(); handler(usuario, puntuacion, comentario)}}>

            <label for="usuario">Usuario: </label>
            <input type="text" value={usuario} name="usuario" onChange={(e) => setUsuario(e.target.value)}></input>

            <label for="puntuacion">Puntuación: </label>
            <input type="number" value={puntuacion} name="puntuacion" onChange={(e) => setPuntuacion(e.target.value)}></input>

            <label for="comentario">Comentario: </label>
            <input type="text" value={comentario} name="comentario" onChange={(e) => setComentario(e.target.value)}></input>

            <input type="submit"></input>
        </form>
    )
}

export default NuevoComentario;