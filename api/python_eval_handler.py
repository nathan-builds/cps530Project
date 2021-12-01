from flask import request
from flask_restful import Api, Resource, reqparse

class PythonEvalHandler(Resource):
  def post(self):
    json = request.get_json(force=True)

    id = json["Id"]
    text = json["Text"]

    print(json)
    # note, the post req from frontend needs to match the strings here (e.g. 'type and 'message')

    request_type = id
    request_json = text
    # ret_status, ret_msg = ReturnData(request_type, request_json)
    # currently just returning the req straight
    ret_status = request_type
    ret_msg = request_json

    if ret_msg:
      message = "message: {}".format(ret_msg)
    else:
      message = "no message"
    
    final_ret = {"status": "success", "message": message}

    return final_ret