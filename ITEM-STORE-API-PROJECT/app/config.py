# Will contain configuration of the project and about every external entity that we will connect to.
# SQL username, password, rabbitmq connection details, logger related details.

mysql = {
    'host': 'localhost',
    'user': 'root',
    'password': 'passw0rd',
    'db': 'item_store_db'
}

mysqlConfig = f"mysql+pymysql://{mysql['user']}:{mysql['password']}@{mysql['host']}/{mysql['db']}"