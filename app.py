from flask import Flask, render_template, jsonify, request
from fake_data import fake_places, friends_places
from fake_friends import fake_friends
from fake_activity import fake_activity


app = Flask(__name__)

@app.route('/api/places')
def get_places():
    """Endpoint to return list of places in JSON format."""
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
    
@app.route('/add_place', methods=['POST'])
def add_place():
    place_name = request.form.get('placeName')
    place_description = request.form.get('placeDescription')
    # Handle the data, save it to your database or file system as required
    # Redirect or send back a response
    return jsonify({'status': 'success', 'message': 'Place added!'})

if __name__ == '__main__':
    app.run(debug=True)
