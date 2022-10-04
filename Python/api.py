from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return{'data' : 'Hello World'}
api.add_resource(HelloWorld, '/helloworld')

class Helloname(Resource):
    def get(self, name, age):
        return{'data' : f'Hello {name} {age}'}

api.add_resource(Helloname, '/helloworld/<string:name>/<int:age>')

if __name__ == '__main__':
    app.run(debug=True)