# Project Implementation Plan: ElysiaJS + Drizzle + MySQL with Bun

## Objective
Buat proyek backend baru di folder ini menggunakan ekosistem Bun. Layanan ini akan menyediakan REST API dengan framework ElysiaJS dan menggunakan Drizzle ORM untuk berinteraksi dengan database MySQL.

## Tech Stack
- **Runtime & Package Manager**: Bun
- **Web Framework**: ElysiaJS
- **ORM**: Drizzle ORM
- **Database**: MySQL

## High-Level Tasks

### 1. Inisialisasi Proyek
- Setup proyek Bun baru di direktori ini.
- Pastikan konfigurasi dasar `package.json` dan `tsconfig.json` (jika menggunakan TypeScript) sudah disiapkan dengan benar.

### 2. Instalasi Dependensi
- Instal *framework* utama: **ElysiaJS**.
- Instal **Drizzle ORM** dan *driver* database untuk MySQL (misalnya `mysql2`).
- Instal *development dependencies* untuk **Drizzle Kit** (untuk manajemen skema dan migrasi).

### 3. Setup Konfigurasi Database
- Buat file konfigurasi untuk mengatur koneksi ke database MySQL.
- Setup file definisi skema database awal (misalnya satu tabel contoh) menggunakan sintaks Drizzle.
- Siapkan konfigurasi Drizzle (`drizzle.config.ts`) agar *tools* migrasi dapat berjalan.
- Gunakan *Environment Variables* (file `.env`) untuk menyimpan kredensial dan URL database.

### 4. Setup ElysiaJS Server
- Inisialisasi instance server Elysia di *entry point* aplikasi (misal `src/index.ts`).
- Buat *endpoint* sederhana (seperti `GET /`) untuk memastikan server berjalan.
- Buat *endpoint* tambahan yang berinteraksi dengan database (membaca/menulis data) untuk memverifikasi koneksi Drizzle ke MySQL berjalan lancar.
- Jalankan server.

### 5. Dokumentasi Singkat
- Pastikan ada instruksi (*scripts* di `package.json`) yang jelas untuk menjalankan aplikasi (mode *development*).
- Sediakan instruksi untuk menjalankan proses migrasi database Drizzle.

## Catatan Implementasi
Dokumen ini hanya memuat panduan arsitektur dasar. Silakan kembangkan dan atur struktur *folder/file* (pemisahan *routes*, *controllers*, skema database) sesuai standar *clean code* dan *best practices* selama implementasi.
