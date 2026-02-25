# 🔧 Fix Halaman Putih - Langkah Cepat

## Yang Sudah Saya Perbaiki:

✅ File `.env` sudah diisi dengan nilai default
✅ Supabase client sudah di-handle untuk error
✅ Hooks sudah di-update dengan error handling
✅ QueryClient sudah dikonfigurasi dengan retry: false

## Langkah yang Harus Anda Lakukan:

### 1. Stop Server (Jika Masih Berjalan)
Tekan `Ctrl + C` di terminal

### 2. Restart Server
```bash
npm run dev
```

### 3. Test Halaman Sederhana
Buka browser dan akses:
```
http://localhost:8081/test
```

Jika halaman test muncul, berarti React berfungsi!

### 4. Cek Console Browser
1. Tekan `F12`
2. Klik tab "Console"
3. Screenshot error yang muncul (jika ada)

### 5. Akses Halaman Utama
```
http://localhost:8081/
```

---

## Jika Masih Putih:

### Opsi A: Clear Cache & Hard Refresh
1. Tekan `Ctrl + Shift + Delete`
2. Pilih "Cached images and files"
3. Klik "Clear data"
4. Refresh halaman dengan `Ctrl + Shift + R`

### Opsi B: Coba Browser Lain
- Chrome
- Firefox  
- Edge
- Atau mode Incognito

### Opsi C: Reinstall Dependencies
```bash
# Stop server (Ctrl+C)
rmdir /s /q node_modules
npm install
npm run dev
```

---

## Cara Cek Error di Console:

1. Buka browser
2. Tekan `F12`
3. Klik tab "Console"
4. Refresh halaman (`F5`)
5. Lihat error merah yang muncul
6. Screenshot atau copy text error
7. Kirim ke saya

---

## Error Umum & Solusi:

### Error: "Cannot find module"
```bash
npm install
```

### Error: "Failed to fetch"
- Normal jika Supabase belum setup
- Website tetap harus muncul dengan data contoh

### Error: "Unexpected token"
- Ada syntax error di kode
- Cek file yang disebutkan di error

### Error: "Network request failed"
- Cek koneksi internet
- Atau Supabase belum dikonfigurasi (ini OK)

---

## Informasi yang Saya Butuhkan:

Jika masih putih, kirim:
1. ✅ Screenshot console browser (F12 → Console)
2. ✅ Screenshot terminal (tempat npm run dev)
3. ✅ URL yang diakses
4. ✅ Browser yang digunakan
5. ✅ Apakah halaman `/test` muncul?

---

## Quick Test:

Jalankan command ini satu per satu:

```bash
# 1. Cek apakah server berjalan
npm run dev

# 2. Buka browser ke:
http://localhost:8081/test

# 3. Jika test page muncul, coba:
http://localhost:8081/

# 4. Jika masih putih, cek console (F12)
```

---

## File yang Sudah Diperbaiki:

- ✅ `src/lib/supabase.ts` - Handle empty env
- ✅ `src/hooks/useProducts.ts` - Error handling
- ✅ `src/hooks/useContact.ts` - Error handling  
- ✅ `.env` - Default values
- ✅ `src/pages/Test.tsx` - Test page baru

---

Restart server dan test lagi! 🚀
