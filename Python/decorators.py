def star(func):
    def inner(*args, **kwrgs):
        print("**************************")
        func(*args, **kwrgs)
        print("**************************")

    return inner
def eql(func):
    def inner(*args, **kwrgs):
        print("==========================")
        func(*args, **kwrgs)
        print("==========================")

    return inner

@star
def greet(msg):
    print(msg)

greet("Hello from India")

@eql
def greet1(word):
    print(word)


greet1("Abhishek")

@star
@eql
def add(a,b):
    print(a+b)

add(20,30)

