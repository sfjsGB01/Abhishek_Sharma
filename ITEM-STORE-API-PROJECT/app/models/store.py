'''
Maps store resource to its corresponding database table.
Contains code to execute queries on these tables.
'''

from app.db import db

class StoreModel(db.Model):
    __tablename__ = 'stores'

    id = db.Column(db.Integer, primary_key=True)
    store_name = db.Column(db.String(80))
    store_owner = db.Column(db.String(50))

    items = db.relationship('ItemModel', lazy='dynamic')

    # Constructor: called when we create a new object of this class
    def __init__(self, name, owner):
        self.store_owner = owner
        self.store_name = name

    # this function converts the object of type StoreModel to a JSON
    def json(self):
        return {'store_name': self.store_name, 'store_owner': self.store_owner, 'items': [item.json() for item in self.items.all()]}

    # returns the first row with the name provided as an arg.
    @classmethod
    def find_by_name(cls, name):
        return cls.query.filter_by(store_name=name).first()
