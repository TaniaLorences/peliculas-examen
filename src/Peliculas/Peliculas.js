import React, { useEffect, useState } from "react";
import Pelicula from "./Pelicula";

function Peliculas(){
    const[peliculas, setPeliculas]=useState([]);

    const cargarPelis = async() => {
        try {
            const response = await fetch("/peliculas.json");
            const data = await response.json();
            setPeliculas(data)
        } catch (error) {
            console.log("Error al cargar el archivo", error)
        }
    }

    useEffect(() => {
        if(peliculas.length===0){
            cargarPelis();
        }
    }, [])

    const categorias = ["Thriller", "Drama", "Aventura", "Ciencia Ficción"]

    const actualizarPeliculas = (peliActualizada) => {
        setPeliculas(peliculas.map((p) => p.titulo===peliActualizada.titulo ? peliActualizada : p))
    }

    // Para cada categoría hay que mostrar una peli (usando find())
    return(
        <div>
            {categorias.map((categoria) => {
                const peliParaCategoria = peliculas.find((p) => 
                Array.isArray(p.categoria)
                ?
                p.categoria.includes(categoria)
                :
                p.categoria===categoria
                )
                return peliParaCategoria && (
                    <>
                    <h1>{categoria}</h1>
                    <Pelicula peli={peliParaCategoria} handlerActualizar={actualizarPeliculas}></Pelicula>
                    </>
                );

    }
    )}
        </div>
    )


}

export default Peliculas;