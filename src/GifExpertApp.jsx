import { useState } from 'react';
import { AddCategory, GifGrid } from './components';



export const GifExpertApp = () => {
    
    const [categories, setCategories ] = useState(['Tini', 'Lali']);

 
    const onAddCategory = ( newCategory )=>{

        if( categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        //setCategories(['Valorant'...categories, ]);
        //setCategories( cat => [...cat, 'Valorant']);
    }

 
    
    return (
        <>
            {/* titulo */}
             <h1> Gif </h1>
             <h2> Elegi a tu artista preferido </h2>

             {/* Input */}
             <AddCategory 
                //setCategories={ setCategories }
                onNewCategory = { onAddCategory }
                />

             {/* listado de Gif */}
            
            {
            categories.map( category => (
                    <GifGrid 
                        key={ category } 
                        category={ category }/>
                )) 
            }
            
           
            {/* Gif item */}
        </>
        )    
};