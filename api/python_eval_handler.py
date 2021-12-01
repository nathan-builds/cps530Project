from flask import request
from flask_restful import Api, Resource, reqparse

from io import StringIO
from contextlib import redirect_stdout

class PythonEvalHandler(Resource):
  def post(self):
    json = request.get_json(force=True)

    code = json["Code"]
    
    capture = StringIO()

    with redirect_stdout(capture):
      compiled_code = compile(code, 'internal_code_run', 'exec')  # exec allows us to execute code blocks
      exec(compiled_code)

    output = capture.getvalue()

    final_ret = {"status": "success", "result": output}

    return final_ret