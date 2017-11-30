
from werkzeug import generate_password_hash

import requests
import os
import json

from flask import Flask
from flask import jsonify
from flask import request
from flask_pymongo import PyMongo
db = MongoClient()


app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'Muven'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/Muven'

mongo = PyMongo(app)

app.secret_key = "muven4-key"

@app.route('/api/signup', methods=['POST'])
def sign up():
    if request.method == "POST":
        if 'artist' in session:
            user = mongo.db.artist
        if 'venue' in session:
            user = mongo.db.venue
        
        //gather data
        user = request.form['first_name']
        email = request.form['email']
        if (request.form['password'] == request.form['confirm']):
            pwdhash = generate_password_hash(request.form['password'])
            
        user_record = {"username": user,
                       "email": email,
                       "password" : pwdhash   }
        
        if user.find_one({"email": email}) != None:
            return 2 //email already registered error
        elif user.find_one({"username": user}) != None:
            return 1 //username already in use error
        else
            user.insert_one(user_record)
            return 0 //successfully registered
    return 3 //nothing posted

@app.route('/api/login', methods=['POST'])
def login():
    if request.method == "POST":
        artist = mongo.db.artist
        venue = mondo.db.venue
        email = request.form['email']
        pwdhash  = generate_password_hash(request.form['password'])
        
        if venue.find_one({"email": email, "password": pwdhash}) != None:
            return 0 //logged in as a venue
        elif artist.find_one({"email": email, "password": pwdhash}) != None:
            return 1 //logged in as an artist
        else
            return 2 //no matches
        
    return 3 //nothing posted
    
@app.route('/api/search', methods=['POST'])
def login():
    if request.method == "POST":
        artist = mongo.db.artist
        venue = mondo.db.venue
        email = request.form['email']
        pwdhash  = generate_password_hash(request.form['password'])
        
        if venue.find_one({"email": email, "password": pwdhash}) != None:
            return 0 //logged in as a venue
        elif artist.find_one({"email": email, "password": pwdhash}) != None:
            return 1 //logged in as an artist
        else
            return 2 //no matches
        
    return 3 //nothing posted

    
    
if __name__ == "__main__":
    app.run(debug=True)