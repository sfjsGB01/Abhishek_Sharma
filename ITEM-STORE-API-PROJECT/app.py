from flask import Flask
import flask
from flask_jwt_extended import JWTManager
from flask_restful import Api
from config import mysqlConfig

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URL'] = mysqlConfig
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.config["JWT_SECRET_KEY"] = "my.secret.key"

jwt = JWTManager(app)
api =Api(app)

@app.before_first_request
def create_tables():
    pass

if __name__ =='__main__':
    app.run(debug=True)