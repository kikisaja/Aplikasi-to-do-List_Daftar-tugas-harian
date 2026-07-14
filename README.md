# 📝 Interaktif To-Do List (DOM Manipulation Practice)

Aplikasi pengelola daftar kegiatan harian sederhana yang mengusung konsep manipulasi **DOM (Document Object Model) Tree** secara dinamis. Pengguna bisa mempraktikkan alur pemrograman aplikasi CRUD (*Create, Read, Update, Delete*) tingkat dasar tanpa ketergantungan pada database eksternal.

Proyek ini sangat penting bagi siswa SMK Jurusan RPL untuk memahami teknik penciptaan komponen HTML baru secara langsung via memori *runtime* JavaScript.

---

## 🚀 Fitur Utama

* **Dynamic DOM Creation:** Memanfaatkan perintah `.createElement()` dan `.appendChild()` untuk merakit tag HTML baru di memori browser secara langsung berdasarkan masukan teks pengguna.
* **Smart Event Bubbling Handler:** Menggunakan pemeriksaan properti `event.target` untuk memisahkan logika ketukan boks (pencoretan tugas) dengan ketukan tombol silang kecil (penghapusan data).
* **Flexible State Toggle:** Memanfaatkan fungsi `.classList.toggle()` untuk memasang dan melepas status selesai (`.done`) pada item tugas secara interaktif berulang kali.
* **Component Self-Destruction:** Menggunakan fungsi bawaan `.remove()` pada node DOM terpilih untuk menghapus seluruh blok elemen anak beserta sensornya dari struktur halaman web.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Struktur penampung utama ul list, bar input, dan tombol aksi
├── style.css        # Visualiasi garis coret dekorasi (.done), bayangan pop art, dan efek animasi pop-in
└── script.js        # Logika pabrikasi komponen HTML, manajemen sensor klik, dan pembersihan input
