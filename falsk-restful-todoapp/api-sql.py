from email import message
from flask import Flask, request
from flask_restful import Resource, Api, reqparse, abort, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:admin@localhost/tododb'
db = SQLAlchemy(app)

class ToDoModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.String(200))
    summary = db.Column(db.String(400))

with app.app_context():
    db.create_all()

task_post_args = reqparse.RequestParser()
task_post_args.add_argument("task", type=str, help='Task is required')
task_post_args.add_argument("summary", type=str, help='summary is required')

resource_fields = {
    'id': fields.Integer,
    'task': fields.String,
    'summary': fields.String,
    }

class ToDoList(Resource):
    # GET /todos - will return all the todo items stored in the DB.
    def get(self):
        todos = {}
        tasks = ToDoModel.query.all()
        for task in tasks:
            todos[task.id] = {'task': task.task, 'summary': task.summary}
        
        return todos

class ToDo(Resource):
    # GET /todos/{id} - will return todo item with a specified id.
    @marshal_with(resource_fields)
    def get(self, todo_id):
        task = ToDoModel.query.filter_by(id=todo_id).first()
        if not task:
            abort(404, message='Task not found')
        return task

    # POST /todos/{id} with a body - should insert a todo item into the DB and return inserted item as part of the response.
    @marshal_with(resource_fields)
    def post(self, todo_id):
        args = task_post_args.parse_args()
        task = ToDoModel.query.filter_by(id=todo_id).first()
        if task:
            abort(409, message='task id already exists')
        
        todo = ToDoModel(id=todo_id, task=args['task'], summary = args['summary'])
        db.session.add(todo)
        db.session.commit()
        return todo, 201

    # PUT /todos/{id} with a body - should update a todo item (if exists) into the DB and return updated item as part of the response.
    @marshal_with(resource_fields)
    def put(self, todo_id):
        args = task_post_args.parse_args()
        task = ToDoModel.query.filter_by(id=todo_id).first()
        if not task:
            abort(404, message='No task found')
        
        if args['task']:
            task.task = args['task']
        
        if args['summary']:
            task.summary = args['summary']

        db.session.commit()
        return task
    
    # DELETE /todos/{id} - delete the specified todo item
    @marshal_with(resource_fields)
    def delete(self, todo_id):
        task = ToDoModel.query.filter_by(id=todo_id).first()
        if not task:
            abort(409, message='No task found')
        db.session.delete(task)
        db.session.commit()
        return task, 200
        

api.add_resource(ToDoList, '/todos')
api.add_resource(ToDo, '/todos/<int:todo_id>')

if __name__ == "__main__":
    app.run(debug=True)