from flask import Flask, render_template, jsonify
from fake_data import fake_places

app = Flask(__name__)

@app.route('/api/places')
def get_places():
    """Endpoint to return list of places in JSON format."""
    return jsonify(fake_places)

@app.route('/')
def home():
    return render_template('index.html')

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

if __name__ == '__main__':
    app.run(debug=True)
