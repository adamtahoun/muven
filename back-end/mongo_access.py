
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
    return "testing get results"

#to be programmed request booking
@app.route('/request', methods=['POST','GET'])
def request_booking():
    #get the data for search criteria
    data = request.get_json(silent=True)
    
    #user collection 
    user = mongo.db.user 

#to be programmed search backend
@app.route('/search', methods=['POST','GET'])
def search():
    #get the data for search criteria
    data = request.get_json(silent=True)
    
    #user collection 
    user = mongo.db.user 
    
    #checks if axious posted
    if request.method == "POST":        
        #get data from axios?
        search = data.get('search')
        search_params = search.split(" ")
        if "artist" in search_params:
            type = "artist"
            both = 0
            search_params.remove("artist")
        elif "venue" in search_params:
            type = "venue"
            both = 0
            search_params.remove("venue")
        else:
            both = 1

        #query results
        temp = []
        result = []
        for x in search_params:
            if both == 0:
                query = user.find( {'$and': [ {'type': type}, { '$or': [ {'username': x},  {'city': x}, {'state': x}]}]})
                for j in query:
                    temp.append(j)
            else:
                query = user.find( {'$or': [ {'username': x},  {'city': x}, {'state': x} ] } )
                for j in query:
                    temp.append(j)

        for e in temp:
            e['_id'] = str(e['_id'])
            result.append(e)
        return jsonify(result)
        
    return 400
        
    

@app.route('/profile', methods=['POST','GET'])
def profile():
    #gets the data from the post
    data = request.get_json(silent=True)
    
    #user collection 
    user = mongo.db.user 
    
    #checks if axious posted
    if request.method == "POST":

        if data.get('type') == 'artist':
            #gets the individual bits of data from the post
            type = data.get('type')
            name = data.get('name')
            address = data.get('address')
            city = data.get('city')
            state = data.get('state')
            genre = data.get('genre')
            about = data.get('about')
            bookings = []
        
            #what parts of a record to update
            update_record = {"type": type,
                             "address": address,
                             "city" : city,
                             "state": state,
                             "genre": genre,
                             "about": about,
                             "bookings": bookings}
        
            #updates the document
            result = user.update_one({'username':name}, {"$set": update_record}, upsert=False)
            #tests to see if update occurred
            if result.matched_count:
                return "200"
        
            #update failed
            return "400"

        if data.get('type') == 'venue':
            #gets the individual bits of data from the post
            type = data.get('type')
            name = data.get('name')
            address = data.get('address')
            city = data.get('city')
            state = data.get('state')
            genre = data.get('genre')
            about = data.get('about')
            capacity = data.get('capacity')
            max_bands = data.get('max_bands')
            bookings = []
        
            #what parts of a record to update
            update_record = {"type": type,
                             "address": address,
                             "city" : city,
                             "state": state,
                             "genre": genre,
                             "about": about,
                             "capacity": capacity,
                             "max_bands": max_bands,
                             "bookings": bookings}
        
            #updates the document
            result = user.update_one({'username':name}, {"$set": update_record}, upsert=False)
            #tests to see if update occurred
            if result.matched_count:
                return "200"
        
            #update failed
            return "400"
    #update failed
    return "400"


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
