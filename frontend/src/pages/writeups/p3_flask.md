# Creating a Python Interpreter: Backend

Before getting started, ensure you have followed the tutorial on how to install Flask on Page 2. Additionally, you will need a
couple extra dependencies. You can install them using `pip` (or pip3 if you're using Python 3.x):
```
pip install flask_restful
pip install flask_cors
```

Ensure you're in your root **project** directory before continuing!

## Required directories

Create the following directories:
- api
- frontend

These will be used throughout the tutorial.

## app.py

In your project root directory, create a new file named `app.py` and add the following:
```python
import flask
import flask_restful
import flask_cors
from api.python_eval_handler import PythonEvalHandler

app = flask.Flask(__name__, static_url_path='', static_folder='frontend/build')
flask_cors.CORS(app)
api = flask_restful.Api(app)


@app.route('/', defaults={'path': ''})
def serve(path):
    return flask.send_from_directory(app.static_folder, 'index.html')

api.add_resource(PythonEvalHandler, '/pyinterpreter/eval')
```

The beginning part of this code initializes the app by instantiating a new Flask instance. We then enable CORS (Cross Origin Resource Sharing)
for local development. Afterwards, we construct a flask_resful Api instance to faciliate our REST API.

After our setup, we create a function which will listen for requests on the "/" endpoint. When a request is received, it will serve index.html from our
frontend/build directory.

Finally, we add a resource to our api object we created earlier. In particular, this will register the handler for requests we will receive
from our frontend. Keep note of the `/pyinterpreter/eval` path, we'll be needing it for the React part of this tutorial later.


## api/python_eval_handler.py

Create a new file in the api directory called `python_eval_handler.py`. This will file will contain:
```python
from flask import request
from flask_restful import Resource

from io import StringIO
from contextlib import redirect_stdout

class PythonEvalHandler(Resource): # 1
  def post(self): # 2
    json = request.get_json(force=True) # 3

    code = json["Code"]
    
    capture = StringIO() # 4

    with redirect_stdout(capture): # 5
      compiled_code = compile(code, 'internal_code_run', 'exec')  # exec mode allows us to execute code blocks
      exec(compiled_code)

    output = capture.getvalue() # 6

    resp = {"status": "success", "result": output} # 7

    return resp
```

Explanation of what's happening in the code above:
1. We create a class (PythonEvalHandler) which inherits the Resource class. This will allow us to define our REST API.
2. We define a post method, indicating that we'll specifically be handling the HTTP POST method.
3. When we receive a request to the API, we want to get the content of the request. This line takes that content and interprets that as JSON.
   The line directly under extracts the "Code" field in the JSON which contains the full code we want to execute.
4. Instantiating StringIO will allow us to be able to capture stdout when we execute the code.
5. We use contextlib's redirect_stdout to be able to redirect and store stdout to our instantiated StringIO from the block of code executed
   below.
6. This line extracts all the output we got from stdout and stores it in a variable.
7. We prepare our JSON response by including a status and result field. You can include any other fields you like here. We then return the response
   which will be automatically sent to the client by Flask.


**That's all!** The backend portion of the tutorial is done.
