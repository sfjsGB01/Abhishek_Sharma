import json, resource
from urllib import request

import requests


new_product = {
                    "title": 'test product',
                    "price": 13.5,
                    "description": 'lorem ipsum set',
                    "image": 'https://i.pravatar.cc',
                    "category": 'electronic'
}
resource = requests.api