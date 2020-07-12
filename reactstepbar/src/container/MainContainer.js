
import React, { Component } from  'react' ;
import StepProgressBar from "../Components/UI/StepProgressBar"  ;
import Button from  "../Components/UI/Button/Button" 
import styles from "./MainContainer.module.css";

class MainComponent extends Component{

    state={
        button:{
            previous:{
                config:{
                    disabled:true 
                }
            },
            next:{
                config:{
                    disabled:true 
                }
            },

            finish:{
                config:{
                    disabled:true 
                }
            }
        }
    }
    render(){
        let buttons = {...this.state.button} ;
        console.log(buttons)
        let btnRender = [] ;
        if(buttons){
            Object.keys(buttons).map((key,index)=>{
                btnRender.push(
                <button key={key} elemConfig={buttons[key].config}>{key.toUpperCase()}</button>
                )
                return btnRender ;
            });
            
        }


        return(
            <>
            <div>This is a main container </div>
            <div>
            <StepProgressBar numberOfStep={4}></StepProgressBar>
            <div className="d-flex justify-content-center">
                {btnRender}
            </div>
            </div>
            </>
        );
    }
}




export default MainComponent ;