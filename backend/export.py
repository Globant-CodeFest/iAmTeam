import pandas as pd
from pymongo import MongoClient

# Configura la conexión a la base de datos MongoDB
client = MongoClient('mongodb://localhost:27017')
db = client['mydatabase']
collection = db['disasters']

# Realiza la consulta a la base de datos y obtén los datos
cursor = collection.find({})
data = list(cursor)

# Convierte los datos en un DataFrame de pandas
df = pd.DataFrame(data)

# Especifica la ruta y el nombre del archivo CSV de salida
output_file = '1900_2021_DISASTERS_mod.csv'

# Exporta el DataFrame a un archivo CSV
df.to_csv(output_file, index=False)