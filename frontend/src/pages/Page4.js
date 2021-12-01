import axios from "axios";
import "./page4.css";
import { useState } from "react";

const Page4 = () => {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [result, setResult] = useState("");

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
    <div>
      <textarea
        id="codeArea"
        className="code-area"
        onChange={onKeyEnteredHandler}
        value={textAreaValue}
      >
        Type here
      </textarea>
      <button type="submit" onClick={onSubmitHandler}>
        Click me
      </button>
      <textarea value={result}></textarea>
    </div>
  );
};

export default Page4;
