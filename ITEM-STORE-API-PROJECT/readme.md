Overview of the project
Users -> sign in Multiple stores -> multiple items

Create stores, each with a name and a list of stocked items. POST /store - BODY: {"name": "store_name", location: "", owner: ""}

Create an item within a store, each item will have a name, category and a price. POST /store/{store_id}/item - BODY: {"name": "item name", "category": "item category", "price": item price}

Retrieve a list of all the stores and the items they have. GET /store Response: [ { "store_name": "name", "location": "city", "owner" : "store owner", "items": [ {"name": "item name", "category": "item category", "price": item price}, {"name": "item name", "category": "item category", "price": item price}, {"name": "item name", "category": "item category", "price": item price} ] }, { "store_name": "name", "location": "city", "owner" : "store owner", "items": [ {"name": "item name", "category": "item category", "price": item price}, {"name": "item name", "category": "item category", "price": item price}, {"name": "item name", "category": "item category", "price": item price} ] } ]

Given store's name, retrieve that individual store and its items GET /store/store_name Response: { "store_name": "name", "location": "city", "owner" : "store owner", "items": [ {"name": "item name", "category": "item category", "price": item price}, {"name": "item name", "category": "item category", "price": item price}, {"name": "item name", "category": "item category", "price": item price} ] }

Given a store's name, retrieve only a list of items within the store GET /store/store_name/item Response: [ {"name": "item name", "category": "item category", "price": item price}, {"name": "item name", "category": "item category", "price": item price}, {"name": "item name", "category": "item category", "price": item price} ]

Register a user POST /user_register - BODY: {username: "username", "password": "password", "email": "email ID"} Response: 200/400/500

Login a user POST /user_login - BODY: {username: "username", password: "password"} Response: a JWT token