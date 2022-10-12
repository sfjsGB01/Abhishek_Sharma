'''
Contains functions corresponding to the endpoints of store related APIs.
logic for processing these APIs.
'''

from flask_restful import Resource
from app.models.store import StoreModel

class Store(Resource):
    def get(self, name):
        store = StoreModel.find_by_name(name=name)
        if store:
            # we will do the task to return the store in JSON format
            return store.json()
        return {'message': 'Store not found'}, 404


class StoreList:
    pass