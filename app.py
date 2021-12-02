import flask
import flask_restful
from flask_cors import CORS, cross_origin
from api.python_eval_handler import PythonEvalHandler

app = flask.Flask(__name__, static_url_path='', static_folder='frontend/build')

CORS(app)
api = flask_restful.Api(app)


@app.route('/', defaults={'path': ''})
@cross_origin()

def serve(path):
    return flask.send_from_directory(app.static_folder, 'index.html')

api.add_resource(PythonEvalHandler, '/pyinterpreter/eval')

if __name__ == '__main__':
    app.run()
