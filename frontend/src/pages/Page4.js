import axios from 'axios'

const Page4 =()=>{

    const onSubmitHandler=()=>{
        let testObj={
            Id: "Hello",
            Text: "World",
        };

        fetch('http://localhost:5000/flask/hello',{
        method:'POST',
        headers:{'Content-type': 'application.json'},
        body:JSON.stringify(testObj)
         })
        }

    return (
    <div >
        <button type = "submit" onClick = {onSubmitHandler}>Click me</button>
        <textarea>Type here</textarea>
    </div>
   );
    
}

export default Page4;
