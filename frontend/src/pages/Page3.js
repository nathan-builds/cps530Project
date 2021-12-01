import "./page.css";
import app_py_img from "./images/app_py.png";
import code1 from "./images/code_1.PNG";
import code2 from "./images/code_2.PNG";
import python_eval_handler_img from "./images/python_eval_handler.png";

const Page3 = () => {
  return (
    <div className="outer-container">
      <div className="container">
        <h1 className="section-title">
          Creating a Python Interpreter: Backend
        </h1>
        <section>
          <p>
            Before getting started, ensure you have followed the tutorial on how
            to install Flask on Page 2. Additionally, you will need a couple
            extra dependencies. You can install them using pip (or pip3 if
            you're using Python 3.x):
          </p>
          <p className="cmd">pip install flask_restful</p>
          <p className="cmd">pip install flask_cors</p>
        </section>

        <h2>Required directories</h2>
        <section>
          <p>Create the following directories:</p>
          <ul>
            <li>api</li>
            <li>frontend</li>
          </ul>
          <p>These will be used throughout the tutorial.</p>
        </section>

        <h2>app.py</h2>
        <section>
          <p>
            In your project root directory, create a new file named `app.py` and
            add the following:
          </p>
          <img src={app_py_img}></img>
          <p>
            The beginning part of this code initializes the app by instantiating
            a new Flask instance. We then enable CORS (Cross Origin Resource
            Sharing) for local development. Afterwards, we construct a
            flask_resful Api instance to faciliate our REST API.
          </p>
          <p>
            After our setup, we create a function which will listen for requests
            on the "/" endpoint. When a request is received, it will serve
            index.html from our frontend/build directory.
          </p>
          <p>
            Finally, we add a resource to our api object we created earlier. In
            particular, this will register the handler for requests we will
            receive from our frontend. Keep note of the `/pyinterpreter/eval`
            path, we'll be needing it for the React part of this tutorial later.
          </p>
        </section>

        <h2>api/python_eval_handler.py</h2>
        <section>
          <p>
            Create a new file in the api directory called
            `python_eval_handler.py`. This will file will contain:
          </p>
          <img src={python_eval_handler_img}></img>
          <p>Explanation of what's happening in the code above:</p>
          <ol>
            <li>
              We create a class (PythonEvalHandler) which inherits the Resource
              class. This will allow us to define our REST API.
            </li>
            <li>
              We define a post method, indicating that we'll specifically be
              handling the HTTP POST method.
            </li>
            <li>
              When we receive a request to the API, we want to get the content
              of the request. This line takes that content and interprets that
              as JSON. The line directly under extracts the "Code" field in the
              JSON which contains the full code we want to execute.
            </li>
            <li>
              Instantiating StringIO will allow us to be able to capture stdout
              when we execute the code.
            </li>
            <li>
              We use contextlib's redirect_stdout to be able to redirect and
              store stdout to our instantiated StringIO from the block of code
              executed below.
            </li>
            <li>
              This line extracts all the output we got from stdout and stores it
              in a variable.
            </li>
            <li>
              We prepare our JSON response by including a status and result
              field. You can include any other fields you like here. We then
              return the response which will be automatically sent to the client
              by Flask.
            </li>
          </ol>
          <p>
            <b>That's all!</b> The backend portion of the tutorial is done.
          </p>
        </section>
        <h1 className="section-title">
          Creating a Python Interpreter: Frontend
        </h1>
        <section>
          <p><b>Run the following commands to initiate the react app:</b></p>
          <p className="cmd">cd frontend</p>
          <p className="cmd">npx-create-react-app</p>
        </section>

        <p><b>In the src folder add the following code:</b></p>
        <img src={code1}></img>
        <section>
          <p>
            1. This is an event listener that listens to entered text in the
            text area.
          </p>
          <p>
            2. This Asynchronous function will make the call to Flask with the
            Python code to be run.
          </p>
          <p>
            3. Details about the protocol used for the POST method along with
            the data being sent.
          </p>
        </section>

        <section>
        <img src={code2}></img>
        <p>
          4. Flask has responded with the interpreted Python results, and set the
          results text field with it.
        </p>
        <p>5. This is the JSX code for the text areas and results area.</p>
        </section>
      </div>
    </div>
  );
};

export default Page3;
