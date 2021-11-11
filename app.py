import flask
import flask_restful
import flask_cors 

app = flask.Flask(__name__, static_url_path='', static_folder='frontend/build')
flask_cors.CORS(app)
api = flask_restful.Api(app)


@app.route('/', defaults={'path': ''})
def serve(path):
    return flask.send_from_directory(app.static_folder, 'index.html')

