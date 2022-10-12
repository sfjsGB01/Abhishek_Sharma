'''
Maps item resource to its corresponding database table.
Contains code to execute queries on these tables.
'''

from app.db import db

class ItemModel(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    item_name = db.Column(db.String(200))
    item_price = db.Column(db.Float(precision=2))
    item_category = db.Column(db.String(100))

    store_id = db.Column(db.Integer, db.ForeignKey('stores.id'))
    store = db.relationship('StoreModel')

    def __init__(self, name, price, category, store_id) -> None:
        self.item_name = name
        self.item_price = price
        self.item_category = category
        self.store_id = store_id
    
    def json(self):
        return {'name': self.item_name, 'price': self.item_price, 'category': self.item_category, 'store_id': self.store_id}

        