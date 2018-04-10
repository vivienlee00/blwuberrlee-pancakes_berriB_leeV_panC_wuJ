from flask import Flask, render_template, request
from util import api
from util import images
import random
from math import *


app = Flask(__name__)


# default homepage
@app.route("/")
def welcome():
    return render_template("home.html")