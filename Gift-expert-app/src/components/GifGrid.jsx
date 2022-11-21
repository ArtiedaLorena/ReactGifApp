import { useState,useEffect } from "react";
//import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "./hooks/useFetchGifs";




export const GifGrid = ({ category }) => {
  //Antes del nombre del customHook colocar use para reconocerlo como tal

  const {images, isLoading}= useFetchGifs(category)
        // ush para el snippet de useState
        

        
    

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando...</h2>) 
        
      }
      
      <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
                
            </div>
    </>
  );
};
