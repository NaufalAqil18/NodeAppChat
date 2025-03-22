# Aplikasi Chat Sederhana dengan Node.js dan MongoDB

### Penulis
- **Naufal Aqil**
- **NPM: 2208107010043**


## Ringkasan
Ini adalah aplikasi chat sederhana yang dibangun dengan **Node.js** dan **MongoDB**. Aplikasi ini memiliki fitur untuk **menyaring kata-kata kasar** yang disimpan dalam koleksi MongoDB bernama `badwords`. Semua pesan chat disimpan dalam koleksi lain bernama `messages`.

## Fitur
- Fitur chat secara real-time
- Penyaringan kata-kata kasar menggunakan daftar yang disimpan di MongoDB
- Pesan yang dikirim akan disimpan dalam koleksi `messages`
- Script Python untuk impor/ekspor database

## Instruksi Instalasi

### 1. Clone Repository
```sh
git clone https://github.com/your-repo/simple-chat-app.git
cd simple-chat-app
```

### 2. Instal Dependensi
Pastikan **Node.js** dan **MongoDB** sudah terinstal, lalu jalankan:
```sh
npm install
```

### 3. Impor Koleksi Database
Untuk mengimpor koleksi `badwords` dan `messages`, jalankan:
```sh
python importDB.py
```
Ini akan memuat daftar kata kasar dan pesan yang ada ke dalam MongoDB.

### 4. Jalankan Aplikasi
Jalankan server menggunakan **nodemon**:
```sh
nodemon server.js
```

### 5. Buka Aplikasi
Buka browser dan akses:
```sh
http://localhost:3000
```

## Struktur Database
Aplikasi ini menggunakan MongoDB dengan koleksi berikut:

1. **badwords**: Berisi daftar kata yang harus disaring.
2. **messages**: Menyimpan pesan pengguna.

## Teknologi yang Digunakan
- **Node.js** (Express.js untuk backend)
- **MongoDB** (Database)
- **Python** (Untuk script impor/ekspor)
- **Nodemon** (Untuk pengembangan)

## Catatan
- Pastikan MongoDB sudah berjalan sebelum memulai server.
- Anda dapat mengubah `importDB.py` untuk memperbarui isi database awal.

---
