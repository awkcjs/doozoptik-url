# ⚠️ Kesalahan Umum Google Maps

## 🔴 Masalah yang Baru Terjadi

Website menjadi putih karena error syntax di file `Kontak.tsx`

### ❌ SALAH:
```tsx
const GOOGLE_MAPS_EMBED = "<iframe src="https://www.google.com/maps/embed?pb=...";
```

**Masalah:**
- Memasukkan tag `<iframe>` lengkap
- Tanda kutip ganda (`"`) bertabrakan
- Menyebabkan syntax error

### ✅ BENAR:
```tsx
const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=...";
```

**Yang Benar:**
- Hanya URL-nya saja
- Tanpa tag `<iframe>`
- Tanpa atribut lain

---

## 📋 Cara yang Benar

### Langkah 1: Copy dari Google Maps

Saat Anda klik "Embed a map", akan muncul kode seperti ini:

```html
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1355.28!2d110.60!3d-7.52!..." width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
```

### Langkah 2: Ambil HANYA URL dari src

Copy hanya bagian di dalam `src="..."`:

```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1355.28!2d110.60!3d-7.52!...
```

### Langkah 3: Paste ke File

```tsx
const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1355.28!2d110.60!3d-7.52!...";
```

---

## ✅ Contoh Benar vs Salah

### ❌ SALAH 1: Memasukkan tag iframe
```tsx
const GOOGLE_MAPS_EMBED = "<iframe src="https://..."></iframe>";
```

### ❌ SALAH 2: Menggunakan tanda kutip tunggal di dalam
```tsx
const GOOGLE_MAPS_EMBED = "<iframe src='https://...'></iframe>";
```

### ❌ SALAH 3: Memasukkan atribut lain
```tsx
const GOOGLE_MAPS_EMBED = "https://... width="600" height="450"";
```

### ✅ BENAR:
```tsx
const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1355.2804437038787!2d110.60017622153077!3d-7.525421636394591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a6fba095510cb%3A0xb80389938b4ff58a!2sDooz%20Optik%20Boyolali!5e0!3m2!1sid!2sid!4v1771987209108!5m2!1sid!2sid";
```

---

## 🎯 Cara Copy yang Benar

### Visual Guide:

```
Kode dari Google Maps:
┌────────────────────────────────────────────────────────────┐
│ <iframe src="https://www.google.com/maps/embed?pb=..."    │
│         width="600" height="450" style="border:0;"         │
│         allowfullscreen="" loading="lazy"></iframe>        │
└────────────────────────────────────────────────────────────┘
         ↓
    Copy HANYA ini:
         ↓
┌────────────────────────────────────────────────────────────┐
│ https://www.google.com/maps/embed?pb=...                   │
└────────────────────────────────────────────────────────────┘
```

### Langkah Detail:

1. **Klik "COPY HTML"** di Google Maps
2. **Paste ke Notepad** atau text editor
3. **Cari bagian** `src="`
4. **Copy mulai dari** `https://` 
5. **Sampai sebelum** `"` (tanda kutip penutup)
6. **Paste ke file** `Kontak.tsx`

---

## 🔧 Cara Memperbaiki Jika Error

### Jika Website Putih Setelah Edit:

1. **Buka Console Browser**
   - Tekan `F12`
   - Tab "Console"
   - Lihat error merah

2. **Undo Perubahan**
   - Buka file `src/pages/Kontak.tsx`
   - Tekan `Ctrl + Z` untuk undo
   - Simpan (`Ctrl + S`)

3. **Coba Lagi dengan Benar**
   - Copy HANYA URL dari `src="..."`
   - Paste ke konstanta
   - Simpan dan test

---

## 📝 Template yang Benar

Copy template ini dan ganti URL-nya:

```tsx
// Konfigurasi kontak
const WHATSAPP_NUMBER = "628112640770";
const EMAIL_ADDRESS = "info@doozoptik.com";
const PHONE_NUMBER = "(0276) 3287286";
const ADDRESS = "Jl. Pandanaran No. 252D, Boyolali, Jawa Tengah";

// URL Google Maps untuk embed iframe (HANYA URL!)
const GOOGLE_MAPS_EMBED = "PASTE_URL_DI_SINI";

// URL Google Maps untuk link
const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/eLREHxw8RMm5QP9e8";
```

---

## ✅ Checklist Sebelum Simpan

- [ ] URL dimulai dengan `https://www.google.com/maps/embed`
- [ ] Tidak ada tag `<iframe>`
- [ ] Tidak ada atribut `width`, `height`, dll
- [ ] Hanya URL dalam tanda kutip ganda `"..."`
- [ ] Tidak ada tanda kutip ganda di dalam URL
- [ ] Diakhiri dengan titik koma `;`

---

## 🆘 Troubleshooting

### Website Putih Setelah Edit

**Penyebab:** Syntax error di file Kontak

**Solusi:**
1. Tekan `Ctrl + Z` untuk undo
2. Simpan file
3. Refresh browser
4. Coba lagi dengan benar

### Error: "Unexpected token"

**Penyebab:** Tanda kutip bertabrakan

**Solusi:**
- Pastikan hanya URL dalam tanda kutip
- Tidak ada tag HTML

### Peta Tidak Muncul Tapi Tidak Error

**Penyebab:** URL salah atau tidak lengkap

**Solusi:**
- Cek URL dimulai dengan `https://www.google.com/maps/embed`
- Pastikan URL lengkap sampai akhir

---

## 💡 Tips Pro

### 1. Test URL di Browser Dulu
Sebelum paste ke kode:
- Copy URL
- Paste di address bar browser
- Tekan Enter
- Jika muncul peta = URL benar

### 2. Gunakan Text Editor
- Paste kode iframe ke Notepad
- Extract URL dengan tenang
- Copy URL yang sudah bersih

### 3. Backup Sebelum Edit
- Copy file `Kontak.tsx` ke `Kontak.backup.tsx`
- Jika error, bisa restore

---

## 📸 Screenshot Panduan

### Yang Harus Di-Copy:

```
Dari Google Maps:
<iframe src="https://www.google.com/maps/embed?pb=!1m18!..." width="600" height="450"></iframe>
            ↑                                           ↑
            Mulai dari sini                    Sampai sebelum tanda kutip
```

### Hasil Akhir di File:

```tsx
const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!...";
                          ↑                                              ↑
                          Tanda kutip buka                    Tanda kutip tutup
```

---

## ✅ URL Anda Sekarang (Sudah Benar!)

```tsx
const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1355.2804437038787!2d110.60017622153077!3d-7.525421636394591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a6fba095510cb%3A0xb80389938b4ff58a!2sDooz%20Optik%20Boyolali!5e0!3m2!1sid!2sid!4v1771987209108!5m2!1sid!2sid";
```

✅ Format sudah benar!
✅ Peta sekarang harus muncul!

---

## 🚀 Test Sekarang

1. Simpan file (`Ctrl + S`)
2. Refresh browser (`Ctrl + Shift + R`)
3. Akses: `http://localhost:8081/kontak`
4. Scroll ke bawah
5. Peta harus muncul!

---

Jangan lupa: **HANYA URL, TANPA TAG!** 🗺️✨
