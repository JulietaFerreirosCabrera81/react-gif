// esto es un hook. o sea una funcion que regresa algo. en esta caso esta devolviendo un objeto
import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {
 
     const [images, setImages] = useState([]); 
     const [isLoading, setIsLoading] = useState (true);

     const getImages = async()=> {
         const newImages = await getGifs ( category );
         setImages( newImages );
         setIsLoading( false );
     }

     useEffect( ()=>{
         getImages();
     }, [] );

    return {
        images,
        isLoading,
    }
  
}


