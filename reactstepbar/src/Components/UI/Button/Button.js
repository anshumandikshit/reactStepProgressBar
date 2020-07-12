import React,{useState,useEffect} from 'react' ;
import styles from './Button.module.css' ;

const Button=(props)=>{

    console.log("elementConfig",props.elemConfig) ;
    return(
        
        <button {...props.elemConfig}>
            {props.children}
        </button>
    )
}

export default Button  ;