import pymongo
import json

# Koneksi ke MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["belajar_nodejs"]

# Fungsi untuk mengekspor collection ke file JSON
def export_json(collection_name, file_name):
    collection = db[collection_name]
    data = list(collection.find({}, {"_id": 0}))  # Hapus field _id agar lebih rapi
    with open(file_name, "w", encoding="utf-8") as file:
        json.dump(data, file, ensure_ascii=False, indent=4)
    print(f"Data koleksi {collection_name} diekspor ke {file_name}")

# Ekspor dua collection
export_json("badwords", "database/badwords.json")
export_json("messages", "database/messages.json")
