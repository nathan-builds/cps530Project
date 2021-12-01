import axios from 'axios'
import "./page4.css"
import { useState } from "react";

const Page4 =()=>{
    const [textAreaValue, setTextAreaValue] =useState();

    const onKeyEnteredHandler=(event)=>{
        setTextAreaValue(event.target.value)
    }


    const onSubmitHandler=()=>{
        console.log(textAreaValue)
        let testObj={
            Code: textAreaValue
        };

        fetch('http://localhost:5000/flask/hello',{
        method:'POST',
        headers:{'Content-type': 'application.json'},
        body:JSON.stringify(testObj)
         })
        }

    return (
    <div >
        <textarea id="codeArea" className="code-area" onKeyPress= {onKeyEnteredHandler}>Type here</textarea>
        <button type = "submit" onClick = {onSubmitHandler}>Click me</button>
    </div>
   );
    
}

export default Page4;
