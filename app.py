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


@app.route('/page1', defaults={'path': ''})
@cross_origin()
def servePage1(path):
    return flask.send_from_directory(app.static_folder, 'index.html')


@app.route('/page2', defaults={'path': ''})
@cross_origin()
def servePage2(path):
    return flask.send_from_directory(app.static_folder, 'index.html')


@app.route('/page3', defaults={'path': ''})
@cross_origin()
def servePage3(path):
    return flask.send_from_directory(app.static_folder, 'index.html')


@app.route('/page4', defaults={'path': ''})
@cross_origin()
def servePage4(path):
    return flask.send_from_directory(app.static_folder, 'index.html')


@app.route('/page5', defaults={'path': ''})
@cross_origin()
def servePage5(path):
    return flask.send_from_directory(app.static_folder, 'index.html')


@app.route('/page6', defaults={'path': ''})
@cross_origin()
def servePage6(path):
    return flask.send_from_directory(app.static_folder, 'index.html')


api.add_resource(PythonEvalHandler, '/pyinterpreter/eval')


if __name__ == '__main__':
    app.run()
