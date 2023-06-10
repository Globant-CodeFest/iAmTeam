import requests

class OpenCageGeocoder:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = 'https://api.opencagedata.com/geocode/v1/json'
    
    def geocode(self, query):
        print(query)
        params = {
            'q': query,
            'key': self.api_key
        }
        
        response = requests.get(self.base_url, params=params)
        data = response.json()
        
        if response.status_code == 200 and data.get('results'):
            result = data['results'][0]
            geometry = result['geometry']
            longitude = geometry['lng']
            latitude = geometry['lat']
            return longitude, latitude
        else:
            return None
