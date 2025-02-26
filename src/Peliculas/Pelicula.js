import React, { useState } from "react";
import NuevoComentarioMio from "./NuevoComentario";

function Pelicula({peli, handlerActualizar}){

    const [verComentario1, setVerComentario1] = useState(false);
    const [verComentario2, setVerComentario2] = useState(false);
    const [aniadirComentario, setAniadirComentario] = useState(false);

    const aniadirNuevoComentario = (usuario, puntuacion, comentario) => {
        const nuevaValoracion = {
            usuario,
            puntuacion:Number(puntuacion),
            comentario
        }
        
        const nuevasValoraciones=[...peli.valoraciones, nuevaValoracion]
        const peliActualizada= {...peli, valoraciones: nuevasValoraciones}
        handlerActualizar(peliActualizada);
    }

    const eliminarComent3 = () => {
        const valoracionesTodas=[...peli.valoraciones]
        valoracionesTodas.pop()
        const peliActualizada = {...peli, valoraciones: valoracionesTodas}

        handlerActualizar(peliActualizada)
    }

    const puntuacionMedia = () => {
        let sumaPuntuaciones=0;
        for (let i=0; i < peli.valoraciones.length; i++){
            sumaPuntuaciones+=peli.valoraciones[i].puntuacion;
        }
        return (sumaPuntuaciones/peli.valoraciones.length).toFixed(2)
    }

    // Muestra en cada seccion una película de dicha categoria 
    // con los siguientes campos imagen, Titulo, Año, director, Actores principales, sinopsis
    return(
        <>
        <img src={peli.foto} alt={peli.titulo} height="50px" width="50px"></img>
        <h2>{peli.titulo}</h2>
        <p>Año: {peli.año}</p>
        <p>Director: {peli.director}</p>
        <p>Actores: {peli.actoresPrincipales.join(", ")}</p>
        <p>Sinopsis: {peli.sinopsis}</p>
        <p>Puntuación media: {puntuacionMedia()}</p>
        <button onClick={() => setVerComentario1(!verComentario1)}>Ver comentario 1</button>
        {verComentario1 && <p>Comentario 1: {peli.valoraciones[0].comentario}</p>}
        {peli.valoraciones.length>1 && 
        (
            <>
            <button onClick={() => setVerComentario2(!verComentario2)}>Ver comentario 2</button>
            {verComentario2 && <p>Comentario 2: {peli.valoraciones[1].comentario}</p>}
            </>
        )
        }
        <button onClick={() => setAniadirComentario(!aniadirComentario)}>Añadir comentario</button>
        {aniadirComentario && <NuevoComentarioMio handler={aniadirNuevoComentario}></NuevoComentarioMio>}
        {peli.valoraciones.length===3 && <button onClick={eliminarComent3}>Eliminar 3er comentario</button>} 
        {peli.valoraciones.length===3 && <p>Tercer comentario: {peli.valoraciones[2].comentario}</p>} {/* Para comprobar */}
        </>
    )

}

export default Pelicula;