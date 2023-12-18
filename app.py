from flask import Flask, render_template, jsonify, request
from fake_data import fake_places, friends_places, grocery_stores, gyms, clothing_stores, fake_saved
from fake_friends import fake_friends
from fake_activity import fake_activity
from fake_contact import fake_contact
from group_chat import group_chat
from event import event


app = Flask(__name__)

@app.route('/api/places')
def get_places():
    return jsonify(fake_places)

@app.route('/api/grocery_stores')
def get_grocery_stores():
    return jsonify(grocery_stores)

@app.route('/api/gyms')
def get_gyms():
    return jsonify(gyms)

@app.route('/api/clothing_stores')
def get_clothing_stores():
    return jsonify(clothing_stores)

@app.route('/data/saved')
def get_saved():
    return jsonify(fake_saved)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/clothing')
def clothing():
    return render_template('clothing.html')

@app.route('/groceries')
def groceries():
    return render_template('groceries.html')

@app.route('/gyms')
def gyms():
    return render_template('gyms.html')

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
    return render_template('events.html', friends=event)

@app.route('/messages')
def messages():
    return render_template('messages.html', friends=group_chat)

@app.route('/saved')
def saved():
    return render_template('saved.html', fake_places=fake_saved)

@app.route('/place/<name>')
def show_place(name):
    place = next((item for item in fake_places if item["name"] == name), None)
    if place:
        return render_template('place.html', place=place)
    else:
        return "Place not found", 404
    

@app.route('/add_place', methods=['POST'])
def add_place():
    place_name = request.form['placeName']
    event_date_time = request.form['eventDateTime']
    max_participants = request.form['maxParticipants']
    event_description = request.form['eventDescription']

    return jsonify({'status': 'success', 'message': 'Event added!'})



@app.route('/text_screen')
def text_screen():
    contact_name = request.args.get('contact')
    return render_template('text_screen.html', selected_contact_name=contact_name)

if __name__ == '__main__':
    app.run(debug=True, host="localhost", port=5000)
