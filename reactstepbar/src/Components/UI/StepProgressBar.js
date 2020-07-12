import React,{useState,useEffect} from 'react' ;
import styles from './StepProgressBar.module.css' ;

 const StepProgressBar=(props)=>{
   const [numberOfStep,setNumberOfStep] = useState(props.numberOfStep) ;

   let stepRenders = null ;

   const getstepsRender =(number)=>{
      return (
         <div key={number} className={`${styles.step}`}>
            <p className={`${styles.steptext }`}>About</p>
		      <div className={`${styles.bullet}`}>{number+1}</div>

         </div>
      ) ;
   }
   if(props.numberOfStep){
      stepRenders=[] ;
      let numberOfStep = props.numberOfStep ;
      for(let i=0;i<numberOfStep;i++){
         stepRenders.push(getstepsRender(i)) ;
      }
   }

   return (
      <div className={`${styles.container}`}>
         <div id={`${styles.stepProgressBar}`}>
            {stepRenders}
         </div>
      </div>
   ) ;
}


export default StepProgressBar ;