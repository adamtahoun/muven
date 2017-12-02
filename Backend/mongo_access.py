
from werkzeug import generate_password_hash

import requests
import os
import json
import pymongo
from pymongo import MongoClient

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



@app.route('/', methods=['GET'])
def hello():
    return "I'm sure"


@app.route('/signup', methods=['POST','GET'])
def sign_up():
    data = request.get_json(silent=True)
    if request.method == "POST":
        #if 'artist' in data:
        #    user = mongo.db.artist
        #if 'venue' in data:
        #    user = mongo.db.venue
        user = mongo.db.user #user collection until artist/venue functionality added
        
        #gather data
        name = data.get('first_name')
        email = data.get('email')
        #verify that passwords match and encrypt the password
        if (data.get('password') == data.get('confirm')): 
            pwdhash = data.get('password') #generate_password_hash(data.get('password'))
        
        #user record to be stored
        user_record = {"username": name,
                       "email": email,
                       "password" : pwdhash   }
        
        #if the email is already in use
        if user.find_one({"email": email}):
            return "409" 
        #if the username is already in use
        elif user.find_one({"username": name}) :
            return "406" #username already in use error
        else:
            user.insert_one(user_record)
            return "200" #successfully registered
        
    return "400" #nothing posted

@app.route('/login', methods=['POST'])
def login():
    if request.method == "POST":
        data = request.get_json(silent=True)
        #artist = mongo.db.artist
        #venue = mondo.db.venue
        user = mongo.db.user #user collection until artist/venue functionality added
        
        #get data from axios?
        username = data.get('username')
        pwdhash  = data.get('password')#generate_password_hash(data.get('password'))
        
        #This would check both collections for the username/password combo
        #if venue.find_one({"email": email, "password": pwdhash}) != None:
        #    return 200 #logged in as a venue
        #elif artist.find_one({"email": email, "password": pwdhash}) != None:
        #    return 200 #logged in as an artist
        
        #if username and password find no match
        if(user.find_one({"username": username, "password": pwdhash}) != None):
            return "204"
        elif(user.find_one({"username": username}) != None):
            return "0" #no matches
        
        return "400" #nothing posted -must enter username and password-
    
    return "404" #nothing posted
    

    
if __name__ == "__main__":
    app.run(debug=True)