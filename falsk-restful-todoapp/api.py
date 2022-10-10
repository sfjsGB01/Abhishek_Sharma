from flask import Flask
from flask_restful import Resource, Api

# initialize app
app = Flask(__name__)
# initialize api
api = Api(app)

# create a resource
class HelloWorld(Resource):
    # if it is a GET request, call this method
    def get(self):
        return {'data': 'Hello World!! this is localhost'}

class HelloName(Resource):
    def get(self, names, age):
        return {'data': f'Hello {names}, your age is {age}'}

# add resource to the api so that api will be able to route uri to the correct resource 
api.add_resource(HelloWorld, '/helloworld')
api.add_resource(HelloName, '/helloworld/<string:names>/<int:age>')

if __name__ == '__main__':
    # if this module is run directly, run the api server
    app.run(debug=True)