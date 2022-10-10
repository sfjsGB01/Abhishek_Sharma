# ToDo API - Manages APIs for ToDo
from flask import Flask
from flask_restful import Resource, Api, reqparse

# initialize app
app = Flask(__name__)
# initialize api
api = Api(app)

todos = {
    1: {"task": "write helloworld API", "summary": "write helloworld api GET method in Flask Restful"},
    2: {"task": "task info", "summary": "summary info"}
}

task_post_args = reqparse.RequestParser()
task_post_args.add_argument("task", type=str, help='Task is required')
task_post_args.add_argument("summary", type=str, help='summary is required')

class ToDoList(Resource):
    def get(self):
        return todos

class ToDo(Resource):
    def get(self, todo_id):
        return todos[todo_id]
    
    def post(self, todo_id):
        args = task_post_args.parse_args()
        todos[todo_id] = {"task": args['task'], 'summary': args['summary']}
        return todos[todo_id]

    def put(self):
        pass
        # try put method which should update task and summary in the dict and return that item in the response

api.add_resource(ToDoList, '/todos')
api.add_resource(ToDo, '/todos/<int:todo_id>')

if __name__ == '__main__':
    # if this module is run directly, run the api server
    app.run(debug=True)