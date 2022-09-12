import { useState,  } from "react";
import { GifExpertApp } from '/src/GifExpertApp';


export const AddCategory = ({ onNewCategory }) => {
  
    const [inputValue, setInputValue] = useState(' ')
   
   
    const onInputChange = ({ target }) =>{
        setInputValue( target.value);
        }

    const onSubmit = (event)=> {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        //setCategories(categories => [inputValue, ...categories]);
        onNewCategory( inputValue.trim());
        setInputValue('');
    }    
    //aca esta sin destructurar target
    // const onInputChange = (event ) =>{
    //     console.log( event.target.value );
    //     setInputValue(event.target.value);
    // }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type= "text"
                placeholder = "Buscar gifs"
                value= { inputValue }
                onChange= { onInputChange }
                //onChange={ (event) => onInputChange(event) } aca esta sin destructurar target
            />
        </form>
     
  )
}

