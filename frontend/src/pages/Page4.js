import axios from "axios";
import "./page4.css";
import { useState } from "react";

const DEFAULT_CODE_STRING = `# write code here
def print_hello_world():
  print("Hello, World!")

print_hello_world()

# press the "EXECUTE CODE" button to run this code!
`;

//comment
const Page4 = () => {
  const [textAreaValue, setTextAreaValue] = useState(DEFAULT_CODE_STRING);
  const [result, setResult] = useState("Results will appear here once you execute some code");

  //#1
  const onKeyEnteredHandler = (event) => {
    setTextAreaValue(event.target.value);
  };

  //#2
  async function onSubmitHandler() {
    let testObj = {
      Code: textAreaValue,
    };
    console.log(textAreaValue);

    //#3
    const postDetails = {
      method: "POST",
      headers: { "Content-type": "application.json" },
      body: JSON.stringify(testObj),
    };
    const response = await fetch(
      "https://cps530-react-flask.herokuapp.com/pyinterpreter/eval ",
      postDetails
    );
    const data = await response.json();
  //#4
    setResult(data.result);
  }

  //#5
  return (
    <div align="center">
      <textarea
        className="code-area"
        autoComplete="off"
        autoCorrect="off"
        onChange={onKeyEnteredHandler}
        value={textAreaValue}
      >
        Type here
      </textarea>
      <br></br>
      <button className="execute-code-button" type="submit" onClick={onSubmitHandler}>
        EXECUTE CODE
      </button>
      <br></br>

      <h3 className="result-area-header">EXECUTION RESULTS</h3>
      <textarea 
        className="result-area"
        value={result}
      >
      </textarea>
    </div>
  );
};

export default Page4;
