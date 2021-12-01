import axios from "axios";
import "./page4.css";
import { useState } from "react";

const DEFAULT_CODE_STRING = `# write code here
def print_hello_world():
  print("Hello, World!")

print_hello_world()

# press the "EXECUTE CODE" button to run this code!
`;

const Page4 = () => {
  const [textAreaValue, setTextAreaValue] = useState(DEFAULT_CODE_STRING);
  const [result, setResult] = useState("Results will appear here once you execute some code");

  const onKeyEnteredHandler = (event) => {
    setTextAreaValue(event.target.value);
  };

  async function onSubmitHandler() {
    let testObj = {
      Code: textAreaValue,
    };
    console.log(textAreaValue);

    // fetch("http://localhost:5000/flask/hello", {
    //   method: "POST",
    //   headers: { "Content-type": "application.json" },
    //   body: JSON.stringify(testObj),
    // }).then(result => result.json()).then(result)

    const postDetails = {
      method: "POST",
      headers: { "Content-type": "application.json" },
      body: JSON.stringify(testObj),
    };
    const response = await fetch(
      "http://localhost:5000/flask/hello",
      postDetails
    );
    const data = await response.json();

    setResult(data.result);
  }

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
