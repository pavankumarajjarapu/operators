import React, { useRef } from 'react'

function Operators() {
    let telMarksInput =useRef();
    let engMarksInput =useRef();
    let hinMarksInput =useRef();
    let matMarksInput =useRef();
    let sciMarksInput =useRef();
    let socMarksInput =useRef();
    let engMarksSpan= useRef();
    let telMarksSpan= useRef();
    let hinMarksSpan= useRef();
    let socMarksSpan= useRef();
    let matMarksSpan= useRef();
    let sciMarksSpan= useRef();
    let resultpara= useRef();
    let score=0;


  return (
   <div>
     <div>
      <form>
        <h1>Marks Sheet</h1>
        <div>
        <label>TelMarks</label>
        <input type='number' ref={telMarksInput} onChange={()=>{if (telMarksInput.current.value>=35){
    telMarksSpan.current.innerHTML="PASSED!";
    telMarksSpan.current.style.backgroundColor="palegreen";
}
else{
    telMarksSpan.current.innerHTML="FAILED!";
    telMarksSpan.current.style.backgroundColor="red";
}
            
        }}></input>
        <span ref={telMarksSpan}></span>
        </div>
        <div>
        <label>EngMarks</label>
        <input type='number' ref={engMarksInput} onChange={()=>{
            if (engMarksInput.current.value>=35){
                engMarksSpan.current.innerHTML="PASSED!";
                engMarksSpan.current.style.backgroundColor="palegreen";
            }
            else{
                engMarksSpan.current.innerHTML="FAILED!";
                engMarksSpan.current.style.backgroundColor="red";
            }
        }}></input>
        <span ref={engMarksSpan}></span>
        </div>
        <div>
        <label>HinMarks</label>
        <input type='number'ref={hinMarksInput} onChange={()=>{ 
            if (hinMarksInput.current.value>=35){
                hinMarksSpan.current.innerHTML="PASSED!";
                hinMarksSpan.current.style.backgroundColor="palegreen";
            }
            else{
                hinMarksSpan.current.innerHTML="FAILED!";
                hinMarksSpan.current.style.backgroundColor="red";
            }}}></input>
        <span ref={hinMarksSpan}></span>
        </div>
        <div>
        <label>MatMarks</label>
        <input type='number'ref={matMarksInput} onChange={()=>{
             if (matMarksInput.current.value>=35){
                matMarksSpan.current.innerHTML="PASSED!";
                matMarksSpan.current.style.backgroundColor="palegreen";
            }
            else{
                matMarksSpan.current.innerHTML="FAILED!";
                matMarksSpan.current.style.backgroundColor="red";
            }
        }}></input>
        <span ref={matMarksSpan}></span>
        </div>
        <div>
        <label>SciMarks</label>
        <input type='number' ref={sciMarksInput} onChange={()=>{
             if (sciMarksInput.current.value>=35){
                sciMarksSpan.current.innerHTML="PASSED!";
                sciMarksSpan.current.style.backgroundColor="palegreen";
            }
            else{
                sciMarksSpan.current.innerHTML="FAILED!";
                sciMarksSpan.current.style.backgroundColor="red";
            }
        }}></input>
        <span ref={sciMarksSpan}></span>
        </div>
        <div>
        <label>SocMarks</label>
        <input type='number' ref={socMarksInput} onChange={()=>{
             if (socMarksInput.current.value>=35){
                socMarksSpan.current.innerHTML="PASSED!";
                socMarksSpan.current.style.backgroundColor="palegreen";
            }
            else{
                socMarksSpan.current.innerHTML="FAILED!";
                socMarksSpan.current.style.backgroundColor="red";
            }
        }}></input>
        <span ref={socMarksSpan}></span>
        </div>
        <button  type='button' onClick={()=>{
        let engMarks= Number(engMarksInput.current.value)
        let telMarks =  Number(telMarksInput.current.value)
        let matMarks=  Number(matMarksInput.current.value)
        let sciMarks=  Number(sciMarksInput.current.value)
        let socMarks =  Number(socMarksInput.current.value)
        let hinMarks= Number(hinMarksInput.current.value)
let total =engMarks+telMarks+matMarks+sciMarks+socMarks+hinMarks
console.log(total)
resultpara.current.innerHTML=`Toata marks is ${total}.`
score--
console.log(score)

      }}> Get result </button>

      <p ref={resultpara}></p>
      </form>
   
    </div>
    
   </div>
  )
}

export default Operators
