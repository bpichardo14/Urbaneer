from flask import Flask, render_template, jsonify, request
from fake_data import fake_places, friends_places
from fake_friends import fake_friends
from fake_activity import fake_activity
from fake_contact import fake_contact
from group_chat import group_chat
from event import event


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

@app.route('/settings')
def settings():
    return render_template('settings.html') 

@app.route('/contacts')
def contacts():
    return render_template('contacts.html', contacts=fake_contact)

@app.route('/events')
def events():
    # Your logic to fetch or display events goes here
    return render_template('events.html', friends=event)

@app.route('/messages')
def messages():
    # Your logic to fetch or display events goes here
    return render_template('messages.html', friends=group_chat)


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
    return jsonify({'status': 'success', 'message': 'Place added!'})


@app.route('/text_screen')
def text_screen():
    contact_name = request.args.get('contact')
    return render_template('text_screen.html', selected_contact_name=contact_name)

if __name__ == '__main__':
    app.run(debug=True)
