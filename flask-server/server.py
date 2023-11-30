import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

API_KEY = "AIzaSyDRN4nkBauq2pSLMdDSFhx2z8QAsCRtU7M"
BASE_URL =  "https://maps.googleapis.com/maps/api/place"

@app.route('/GetCompanyByType', methods=['GET'])
def GetCompanyByType():
    endpoint = f"{BASE_URL}/nearbysearch/json"
    params = {
        'keyword': 'cruise',
        'location': "40.712776,-74.005974",
        'radius': '1500',
        'type': 'restaurant',
        'key': API_KEY,
    }
    response = requests.get(endpoint, params=params)
    data = response.json()

    return data




if __name__ == '__main__':
    app.run(debug=True)