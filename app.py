from flask import Flask, render_template, jsonify, request
from fake_data import fake_places, friends_places
from fake_friends import fake_friends
from fake_activity import fake_activity


app = Flask(__name__)

@app.route('/api/places')
def get_places():
    return jsonify(fake_places)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/activity')
def activity():
    return render_template('activity.html', activities=fake_activity)

@app.route('/friends')
def friends():
    return render_template('friends.html', friends=fake_friends)

@app.route('/profile')
def profile():
    return render_template('profile.html', fake_places=fake_places)

@app.route('/place/<name>')
def show_place(name):
    place = next((item for item in fake_places if item["name"] == name), None)
    if place:
        return render_template('place.html', place=place)
    else:
        return "Place not found", 404
    
# app.py
# ...
@app.route('/add_place', methods=['POST'])
def add_place():
    # Get data from form
    place_name = request.form['placeName']
    event_date_time = request.form['eventDateTime']
    max_participants = request.form['maxParticipants']
    event_description = request.form['eventDescription']
    # Process data (e.g., store in database)
    # ...
    return jsonify({'status': 'success', 'message': 'Event added!'})


if __name__ == '__main__':
    app.run(debug=True)
