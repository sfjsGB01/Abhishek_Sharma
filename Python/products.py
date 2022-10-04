import json, requests

BASE_URL ='https://fakestoreapi.com'

#Get All products

all_products_response = requests.get(f"{BASE_URL}/products")

print(all_products_response.json())

#for product in all_products_response.join():
 #   print(f"{product['title']} costs ${product['price']}")

