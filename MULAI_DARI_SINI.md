# 🚀 MULAI DARI SINI - Panduan Lengkap

## 📚 File Panduan yang Tersedia

### 1. **PANDUAN_EDIT_KONTEN_MUDAH.md** ⭐ (BACA INI DULU!)
Panduan lengkap edit konten website:
- Cara edit teks, produk, testimoni
- Cara tambah gambar
- Cara ubah logo
- Lokasi file untuk setiap konten

### 2. **CONTOH_EDIT_KONTEN.md** 
Contoh konkret edit konten step-by-step:
- 12 contoh edit dengan kode sebelum/sesudah
- Mudah diikuti untuk pemula

### 3. **PANDUAN_SUPABASE.md**
Tutorial setup database Supabase:
- Cara buat akun
- Setup database
- Integrasi dengan website

### 4. **RINGKASAN_INTEGRASI_SUPABASE.md**
Overview fitur Supabase yang sudah terintegrasi

### 5. **FIX_HALAMAN_PUTIH.md**
Solusi jika website tidak muncul

### 6. **TROUBLESHOOTING.md**
Panduan lengkap troubleshooting berbagai masalah

---

## 🎯 Langkah Cepat Mulai

### Jika Website Belum Jalan:

1. **Install Dependencies**
```bash
npm install
```

2. **Jalankan Server**
```bash
npm run dev
```

3. **Buka Browser**
```
http://localhost:8081/
```

4. **Jika Halaman Putih**
Baca: `FIX_HALAMAN_PUTIH.md`

---

### Jika Website Sudah Jalan:

#### Opsi A: Edit via Admin Dashboard (Mudah) ⭐
1. Akses: `http://localhost:8081/admin`
2. Edit produk, testimoni via form
3. Tidak perlu coding!

#### Opsi B: Edit File Langsung
1. Baca: `PANDUAN_EDIT_KONTEN_MUDAH.md`
2. Ikuti contoh di: `CONTOH_EDIT_KONTEN.md`
3. Edit file yang disebutkan
4. Simpan & refresh browser

---

## 📂 Struktur File Penting

```
doozoptik-url/
├── src/
│   ├── pages/
│   │   ├── Index.tsx          ← Halaman Beranda
│   │   ├── Produk.tsx         ← Halaman Produk
│   │   ├── Tentang.tsx        ← Halaman Tentang
│   │   ├── Layanan.tsx        ← Halaman Layanan
│   │   ├── Kontak.tsx         ← Halaman Kontak
│   │   └── Admin.tsx          ← Dashboard Admin
│   ├── components/
│   │   ├── Navbar.tsx         ← Menu Navigasi
│   │   └── Footer.tsx         ← Footer
│   └── lib/
│       └── supabase.ts        ← Konfigurasi Database
├── public/
│   └── images/                ← Simpan gambar di sini
├── .env                       ← API Keys Supabase
└── package.json               ← Dependencies
```

---

## 🎨 Yang Bisa Anda Edit

### Tanpa Coding (Via Admin):
- ✅ Produk (tambah, edit, hapus)
- ✅ Testimoni
- ✅ Lihat pesan kontak

### Edit File (Mudah):
- ✅ Nama bisnis
- ✅ Logo
- ✅ Judul & deskripsi
- ✅ Menu navigasi
- ✅ Info kontak
- ✅ Nomor WhatsApp
- ✅ Cerita perusahaan
- ✅ Statistik
- ✅ Layanan

---

## 🔧 Command Penting

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview

# Install Supabase (jika belum)
npm install @supabase/supabase-js
```

---

## 📱 Akses Website

### Development (Local):
```
http://localhost:8081/
```

### Halaman yang Tersedia:
- `/` - Beranda
- `/produk` - Katalog Produk
- `/tentang` - Tentang Kami
- `/layanan` - Layanan
- `/kontak` - Kontak
- `/admin` - Dashboard Admin
- `/test` - Test Page (untuk debugging)

---

## 🎯 Workflow Edit Konten

### 1. Edit Konten
- Buka file yang ingin diedit
- Ubah teks/data
- Simpan (`Ctrl + S`)

### 2. Lihat Hasil
- Refresh browser (`F5`)
- Atau hard refresh (`Ctrl + Shift + R`)

### 3. Jika Ada Error
- Tekan `F12` → Console
- Lihat error yang muncul
- Undo (`Ctrl + Z`) jika perlu

---

## 🗂️ Edit Konten Berdasarkan Halaman

### Halaman Beranda:
**File:** `src/pages/Index.tsx`
- Hero section (judul, deskripsi)
- Produk unggulan
- Testimoni
- Highlights layanan

### Halaman Produk:
**File:** `src/pages/Produk.tsx`
- Daftar produk
- Kategori
- Harga & deskripsi

### Halaman Tentang:
**File:** `src/pages/Tentang.tsx`
- Statistik perusahaan
- Cerita perusahaan
- Data tim
- Nilai-nilai perusahaan

### Halaman Layanan:
**File:** `src/pages/Layanan.tsx`
- Daftar layanan
- Fitur setiap layanan
- Alur proses

### Halaman Kontak:
**File:** `src/pages/Kontak.tsx`
- Nomor WhatsApp
- Email
- Telepon
- Alamat
- Google Maps

### Navbar (Menu):
**File:** `src/components/Navbar.tsx`
- Nama brand
- Logo
- Menu navigasi

---

## 🖼️ Cara Tambah Gambar

### 1. Simpan Gambar
```
public/images/nama-gambar.jpg
```

### 2. Gunakan di Kode
```tsx
<img src="/images/nama-gambar.jpg" alt="Deskripsi" />
```

### Contoh Struktur:
```
public/
  └── images/
      ├── logo.png
      ├── hero-bg.jpg
      └── products/
          ├── produk1.jpg
          ├── produk2.jpg
          └── produk3.jpg
```

---

## 🔐 Setup Supabase (Opsional)

Jika ingin data produk & testimoni dari database:

### 1. Buat Akun
- Kunjungi: https://supabase.com
- Sign up gratis

### 2. Buat Project
- Klik "New Project"
- Isi nama & password

### 3. Setup Database
- Buka SQL Editor
- Copy isi `supabase-schema.sql`
- Paste & Run

### 4. Konfigurasi
- Copy API keys dari Settings → API
- Paste ke file `.env`

**Detail lengkap:** Baca `PANDUAN_SUPABASE.md`

---

## 🆘 Troubleshooting Cepat

| Masalah | Solusi |
|---------|--------|
| Halaman putih | Baca `FIX_HALAMAN_PUTIH.md` |
| Error di console | Tekan F12, screenshot error, tanyakan |
| Perubahan tidak muncul | Hard refresh (`Ctrl + Shift + R`) |
| Server tidak jalan | `npm install` lalu `npm run dev` |
| Gambar tidak muncul | Cek path & nama file |

---

## 📞 Butuh Bantuan?

### Format Pertanyaan yang Baik:

❌ **Kurang Jelas:**
"Website error"

✅ **Jelas:**
"Saya edit file Index.tsx baris 28, sekarang halaman putih. 
Error di console: [screenshot]. 
Bagaimana cara memperbaikinya?"

### Informasi yang Membantu:
- File apa yang diedit
- Baris berapa
- Error message (screenshot)
- Apa yang ingin dicapai

---

## ✅ Checklist Pemula

- [ ] Install dependencies (`npm install`)
- [ ] Jalankan server (`npm run dev`)
- [ ] Buka website di browser
- [ ] Baca `PANDUAN_EDIT_KONTEN_MUDAH.md`
- [ ] Coba edit nama brand di Navbar
- [ ] Simpan & refresh browser
- [ ] Lihat perubahan
- [ ] Coba akses `/admin` untuk edit via dashboard
- [ ] (Opsional) Setup Supabase

---

## 🎓 Urutan Belajar

### Level 1: Pemula
1. Baca file ini (`MULAI_DARI_SINI.md`)
2. Baca `PANDUAN_EDIT_KONTEN_MUDAH.md`
3. Ikuti `CONTOH_EDIT_KONTEN.md`
4. Edit nama brand & judul
5. Tambah gambar logo

### Level 2: Menengah
1. Edit semua konten (produk, testimoni, dll)
2. Tambah gambar produk
3. Ubah warna tema (opsional)
4. Setup Supabase

### Level 3: Lanjutan
1. Buat halaman baru
2. Modifikasi layout
3. Tambah fitur baru
4. Deploy ke hosting

---

## 🚀 Quick Start (5 Menit)

```bash
# 1. Install
npm install

# 2. Jalankan
npm run dev

# 3. Buka browser
# http://localhost:8081/

# 4. Edit nama brand
# File: src/components/Navbar.tsx
# Baris: 32
# Ganti: "OptikaVista" → "Nama Anda"

# 5. Simpan & Refresh
# Ctrl + S, lalu F5 di browser
```

---

## 📖 Dokumentasi Lengkap

| File | Isi |
|------|-----|
| `MULAI_DARI_SINI.md` | File ini - overview lengkap |
| `PANDUAN_EDIT_KONTEN_MUDAH.md` | Cara edit konten |
| `CONTOH_EDIT_KONTEN.md` | Contoh konkret |
| `PANDUAN_SUPABASE.md` | Setup database |
| `FIX_HALAMAN_PUTIH.md` | Fix masalah tampilan |
| `TROUBLESHOOTING.md` | Solusi berbagai masalah |

---

Selamat mencoba! Jika ada pertanyaan, jangan ragu untuk bertanya! 🎉
