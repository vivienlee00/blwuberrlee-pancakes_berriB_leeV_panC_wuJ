from flask import Flask, render_template, request
#from utils import database as db #db.get_all() returns all sample data
import random
#from utils import database
from math import *


app = Flask("__name__")
#print(database.by_decade())


# default homepage
@app.route("/")
def welcome():
    return render_template("home.html")

if __name__ == "__main__":
    app.debug = True
    app.run()
