'''
Contains functions corresponding to the endpoints of item related APIs.
logic for processing these APIs.
'''
from app.models.item import ItemModel

class Item:
    pass

class ItemList:
    def get(self):
        return {
            'items': [item.json() for item in ItemModel.query.all()]
        }