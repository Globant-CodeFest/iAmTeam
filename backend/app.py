from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# Configura la conexión a la base de datos MongoDB
client = MongoClient('mongodb://localhost:27017')
db = client['mydatabase']
collection = db['disasters']

# Ruta para consultar la base de datos con proyección de campos
@app.route('/api/query', methods=['GET'])
def query_database():
    # Obtén los parámetros de la consulta desde la URL
    filters = request.args.to_dict()

    # Construye el filtro de consulta
    filter = {}
    for key, value in filters.items():
        filter[key] = value

    # Realiza la consulta a la base de datos con la proyección de campos
    results = list(collection.find(filter))

    # Convierte ObjectId a cadena antes de serializar a JSON
    for result in results:
        result['_id'] = str(result['_id'])

    # Formatea los resultados como JSON y devuelve la respuesta
    return jsonify(results)

# Ruta para consultar la base de datos con proyección de campos
@app.route('/api/years', methods=['GET'])
def get_years():
    
    projection = {'Year': 1}

    # Realiza la consulta a la base de datos con la proyección de campos
    results = list(collection.find({}, projection).distinct('Year'))

    # Formatea los resultados como JSON y devuelve la respuesta
    return jsonify(results)

# Ruta para consultar la base de datos con proyección de campos
@app.route('/api/disaster_subgroups', methods=['GET'])
def get_countries():
    
    projection = {'Disaster Subgroup': 1}

    # Realiza la consulta a la base de datos con la proyección de campos
    results = list(collection.find({}, projection).distinct('Disaster Subgroup'))

    # Formatea los resultados como JSON y devuelve la respuesta
    return jsonify(results)

# Ruta para consultar la base de datos con proyección de campos
@app.route('/api/disaster_subgroups', methods=['GET'])
def get_disaster_subgroups():
    
    projection = {'Disaster Subgroup': 1}

    # Realiza la consulta a la base de datos con la proyección de campos
    results = list(collection.find({}, projection).distinct('Disaster Subgroup'))

    # Formatea los resultados como JSON y devuelve la respuesta
    return jsonify(results)


@app.route('/api/disaster_type', methods=['GET'])
def get_disaster_type():
    
    projection = {'Disaster Type': 1}

    # Realiza la consulta a la base de datos con la proyección de campos
    results = list(collection.find({}, projection).distinct('Disaster Type'))

    # Formatea los resultados como JSON y devuelve la respuesta
    return jsonify(results)


@app.route('/api/disaster_subtype', methods=['GET'])
def get_disaster_subtype():
    
    projection = {'Disaster Subtype': 1}

    # Realiza la consulta a la base de datos con la proyección de campos
    results = list(collection.find({}, projection).distinct('Disaster Subtype'))

    # Formatea los resultados como JSON y devuelve la respuesta
    return jsonify(results)


if __name__ == '__main__':
    app.run()