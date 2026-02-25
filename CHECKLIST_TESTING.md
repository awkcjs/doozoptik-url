# ✅ Checklist Testing Lengkap - OptikaVista

## 🎯 Testing Sebelum Deploy

### 1. Setup & Installation

- [ ] `npm install` berhasil tanpa error
- [ ] File `.env` sudah dibuat dan diisi
- [ ] Supabase project sudah dibuat
- [ ] SQL schema sudah dijalankan di Supabase
- [ ] Storage bucket `product-images` sudah dibuat
- [ ] `npm run dev` berjalan tanpa error

---

### 2. Halaman Beranda (`/`)

#### Visual & Layout
- [ ] Hero section tampil dengan benar
- [ ] Judul dan deskripsi terbaca jelas
- [ ] Tombol CTA berfungsi
- [ ] Highlight cards (3 cards) tampil
- [ ] Ikon di cards tampil

#### Produk Unggulan
- [ ] 4 produk tampil (atau loading state)
- [ ] Gambar produk tampil (atau placeholder)
- [ ] Nama, harga, kategori tampil
- [ ] Hover effect berfungsi
- [ ] Tombol "Lihat Semua Produk" berfungsi

#### Testimoni
- [ ] 3 testimoni tampil (atau loading state)
- [ ] Rating bintang tampil
- [ ] Nama dan teks testimoni terbaca
- [ ] Card styling konsisten

#### CTA Section
- [ ] Background warna primary
- [ ] Tombol "Booking Sekarang" berfungsi
- [ ] Tombol "Hubungi Kami" berfungsi

#### Responsive
- [ ] Mobile (< 640px) - layout vertikal
- [ ] Tablet (640-1024px) - grid 2 kolom
- [ ] Desktop (> 1024px) - grid 4 kolom

---

### 3. Halaman Produk (`/produk`)

#### Filter & Search
- [ ] Search box berfungsi
- [ ] Filter "Semua" menampilkan semua produk
- [ ] Filter "Frame" hanya tampilkan Frame
- [ ] Filter "Sunglasses" hanya tampilkan Sunglasses
- [ ] Filter "Lensa" hanya tampilkan Lensa
- [ ] Search + filter bekerja bersamaan

#### Produk Grid
- [ ] Semua produk dari database tampil
- [ ] Loading state muncul saat fetch
- [ ] Gambar produk tampil (atau placeholder)
- [ ] Nama, harga, kategori, deskripsi tampil
- [ ] Hover effect berfungsi
- [ ] Empty state jika tidak ada hasil

#### Data
- [ ] Data dari Supabase tampil
- [ ] Fallback data tampil jika Supabase error
- [ ] Error handling berfungsi

---

### 4. Halaman Tentang (`/tentang`)

#### Konten
- [ ] Header section tampil
- [ ] Statistik (4 angka) tampil
- [ ] Cerita perusahaan terbaca
- [ ] Nilai-nilai (4 cards) tampil
- [ ] Tim (3 orang) tampil
- [ ] Keunggulan list tampil

#### Visual
- [ ] Ikon di setiap section tampil
- [ ] Spacing konsisten
- [ ] Typography jelas
- [ ] Animasi smooth

---

### 5. Halaman Layanan (`/layanan`)

#### Konten
- [ ] Header section tampil
- [ ] 4 layanan tampil dengan detail
- [ ] Fitur setiap layanan tampil
- [ ] Alur proses (4 steps) tampil
- [ ] CTA section tampil

#### Interaksi
- [ ] Tombol "Hubungi Kami" berfungsi
- [ ] Animasi fade-up berfungsi

---

### 6. Halaman Kontak (`/kontak`)

#### Form Kontak
- [ ] Form tampil dengan 3 field (nama, email, pesan)
- [ ] Validation berfungsi (required fields)
- [ ] Submit button berfungsi
- [ ] Loading state saat submit
- [ ] Toast notification muncul setelah submit
- [ ] Form reset setelah submit berhasil
- [ ] Data tersimpan di Supabase (cek di Table Editor)

#### WhatsApp Integration
- [ ] Tombol WhatsApp tampil
- [ ] Klik membuka WhatsApp Web/App
- [ ] Nomor WhatsApp benar
- [ ] Pesan default terisi

#### Email Integration
- [ ] Klik "Kirim via Email" membuka email client
- [ ] Subject terisi otomatis
- [ ] Body terisi dengan data form
- [ ] Email tujuan benar

#### Google Maps
- [ ] Peta tampil (bukan placeholder)
- [ ] Lokasi benar
- [ ] Zoom & pan berfungsi
- [ ] Fullscreen berfungsi

#### Informasi Kontak
- [ ] Alamat tampil dan klik membuka Maps
- [ ] Telepon tampil dan klik membuka dialer
- [ ] Email tampil dan klik membuka email client
- [ ] Jam operasional tampil
- [ ] Social media icons tampil

---

### 7. Admin Dashboard (`/admin`)

#### Akses
- [ ] URL `/admin` bisa diakses
- [ ] Halaman tampil tanpa error
- [ ] 3 tabs tampil (Produk, Pesan, Testimoni)

#### Tab Produk
- [ ] Semua produk tampil
- [ ] Tombol "Tambah Produk" berfungsi
- [ ] Dialog form muncul
- [ ] Form validation berfungsi
- [ ] Upload gambar berfungsi (drag & drop)
- [ ] Preview gambar tampil
- [ ] Paste URL gambar berfungsi
- [ ] Submit berhasil simpan ke database
- [ ] Toast notification muncul
- [ ] Produk baru tampil di list
- [ ] Edit produk berfungsi
- [ ] Hapus produk berfungsi (dengan konfirmasi)
- [ ] Loading states berfungsi

#### Tab Pesan
- [ ] Semua pesan tampil
- [ ] Badge jumlah pesan tampil
- [ ] Status pesan tampil (Belum Dibaca/Sudah Dibaca/Dibalas)
- [ ] Timestamp format Indonesia
- [ ] Tombol "Tandai Dibaca" berfungsi
- [ ] Tombol "Tandai Dibalas" berfungsi
- [ ] Tombol "Balas via Email" membuka email client
- [ ] Tombol hapus berfungsi (dengan konfirmasi)
- [ ] Empty state tampil jika tidak ada pesan

#### Tab Testimoni
- [ ] Semua testimoni tampil
- [ ] Tombol "Tambah Testimoni" berfungsi
- [ ] Dialog form muncul
- [ ] Rating selector berfungsi (1-5)
- [ ] Submit berhasil simpan ke database
- [ ] Testimoni baru tampil di list
- [ ] Hapus testimoni berfungsi (dengan konfirmasi)
- [ ] Empty state tampil jika tidak ada testimoni

---

### 8. Navbar & Footer

#### Navbar
- [ ] Logo tampil
- [ ] Nama brand tampil
- [ ] Menu desktop tampil (5 links)
- [ ] Menu mobile (hamburger) berfungsi
- [ ] Active state menu berfungsi
- [ ] Tombol "Hubungi Kami" berfungsi
- [ ] Sticky navbar berfungsi
- [ ] Backdrop blur berfungsi

#### Footer
- [ ] Footer tampil (jika ada)
- [ ] Links berfungsi
- [ ] Copyright tampil

---

### 9. Database Supabase

#### Tables
- [ ] Table `products` exists
- [ ] Table `testimonials` exists
- [ ] Table `contact_messages` exists
- [ ] Sample data ada di setiap table

#### RLS Policies
- [ ] Public bisa SELECT products
- [ ] Public bisa SELECT testimonials
- [ ] Public bisa INSERT contact_messages
- [ ] Policies tidak block operasi yang valid

#### Storage
- [ ] Bucket `product-images` exists
- [ ] Bucket is public
- [ ] Upload policy berfungsi
- [ ] Delete policy berfungsi
- [ ] Public URL accessible

---

### 10. Performance & UX

#### Loading States
- [ ] Skeleton/spinner saat fetch data
- [ ] Button disabled saat submit
- [ ] Loading text informatif

#### Error Handling
- [ ] Error message jelas
- [ ] Fallback data berfungsi
- [ ] Toast error tampil
- [ ] Console error minimal

#### Animations
- [ ] Fade-up animations smooth
- [ ] Hover effects smooth
- [ ] Transitions tidak janky
- [ ] No layout shift

#### Responsive
- [ ] Mobile (320px - 640px)
- [ ] Tablet (640px - 1024px)
- [ ] Desktop (1024px+)
- [ ] Touch interactions berfungsi

---

### 11. Browser Compatibility

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

### 12. SEO & Meta

- [ ] Page titles benar
- [ ] Meta descriptions ada
- [ ] Favicon tampil
- [ ] robots.txt ada
- [ ] Images have alt text

---

### 13. Security

- [ ] `.env` tidak ter-commit
- [ ] API keys tidak exposed di code
- [ ] RLS policies aktif
- [ ] Input sanitization berfungsi
- [ ] No console.log sensitive data

---

### 14. Build & Deploy

#### Local Build
- [ ] `npm run build` berhasil
- [ ] No build errors
- [ ] No build warnings (critical)
- [ ] Bundle size reasonable (< 1MB)

#### Preview
- [ ] `npm run preview` berjalan
- [ ] Production build berfungsi
- [ ] Environment variables loaded

#### Deploy
- [ ] Push ke GitHub berhasil
- [ ] Deploy ke Vercel/Netlify berhasil
- [ ] Environment variables set di hosting
- [ ] Production URL accessible
- [ ] HTTPS enabled
- [ ] Custom domain (jika ada) berfungsi

---

### 15. Post-Deploy Testing

#### Production URL
- [ ] Semua halaman accessible
- [ ] Supabase connection berfungsi
- [ ] Images loading
- [ ] Forms berfungsi
- [ ] Admin dashboard accessible

#### Performance
- [ ] PageSpeed Insights score > 80
- [ ] First Contentful Paint < 2s
- [ ] Time to Interactive < 3s
- [ ] No console errors

#### Mobile Testing
- [ ] Test di real device (iOS)
- [ ] Test di real device (Android)
- [ ] Touch interactions smooth
- [ ] Viewport correct

---

## 🐛 Common Issues & Fixes

### Issue: Data tidak muncul
**Fix:**
1. Cek browser console
2. Cek Supabase RLS policies
3. Cek environment variables
4. Cek network tab (F12)

### Issue: Upload gambar gagal
**Fix:**
1. Cek bucket exists
2. Cek bucket public
3. Cek storage policies
4. Cek file size < 5MB

### Issue: Build failed
**Fix:**
1. `rm -rf node_modules package-lock.json`
2. `npm install`
3. `npm run build`

### Issue: Environment variables tidak loaded
**Fix:**
1. Restart dev server
2. Cek prefix `VITE_`
3. Cek `.env` file location (root)

---

## 📊 Testing Report Template

```
# Testing Report - OptikaVista
Date: [DATE]
Tester: [NAME]

## Summary
- Total Tests: [NUMBER]
- Passed: [NUMBER]
- Failed: [NUMBER]
- Skipped: [NUMBER]

## Failed Tests
1. [Test Name] - [Reason] - [Priority: High/Medium/Low]
2. ...

## Notes
- [Any additional notes]

## Next Steps
- [Action items]
```

---

## ✅ Final Checklist

Sebelum launch production:

- [ ] Semua tests passed
- [ ] No critical bugs
- [ ] Performance acceptable
- [ ] Mobile tested
- [ ] Security checked
- [ ] Backup database
- [ ] Documentation updated
- [ ] Team trained (jika ada)
- [ ] Support ready
- [ ] Monitoring setup

---

**Ready to launch! 🚀**
