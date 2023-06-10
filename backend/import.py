import csv
from pymongo import MongoClient
from utils import OpenCageGeocoder 

# MongoDB connection
client = MongoClient('mongodb://localhost:27017')
db = client['mydatabase']

# Nombre de la nueva colección
collection_name = 'disasters'

# Ruta del archivo CSV
csv_file = '1900_2021_DISASTERS.csv'
geocoder = OpenCageGeocoder('a43deb275dbd400db123f9976be5a79c')


# Leer el archivo CSV y cargar los datos en una lista de diccionarios
data = []
cities = {}
with open(csv_file, 'r', encoding='utf-8') as file:
    reader = csv.DictReader(file)
    for row in reader:
        if row['Latitude'] == '':
            if row['Country'] in cities:
                longitude, latitude = cities[row['Country']]
                row['Latitude'] = latitude
                row['Longitude'] = longitude
            else:
                query = row['Country']
                result = geocoder.geocode(query)
                cities[row['Country']] = result
                
                longitude, latitude = result
                row['Latitude'] = latitude
                row['Longitude'] = longitude
                
        data.append(row)


print(cities)

# Insertar los datos en la nueva colección
collection = db[collection_name]
collection.drop()

collection = db[collection_name]
result = collection.insert_many(data)
