import pymongo
import json

# Koneksi ke MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["belajar_nodejs"]

# Fungsi untuk memasukkan data dari JSON ke collection
def import_json(file_path, collection_name):
    collection = db[collection_name]
    with open(file_path, "r", encoding="utf-8") as file:
        data = json.load(file)
    if isinstance(data, list):
        collection.insert_many(data)  # Jika JSON berupa array
    else:
        collection.insert_one(data)   # Jika hanya satu objek JSON
    print(f"Data dari {file_path} berhasil dimasukkan ke koleksi {collection_name}")

# Impor dua collection
import_json("database/badwords.json", "badwords")
import_json("database/messages.json", "messages")
