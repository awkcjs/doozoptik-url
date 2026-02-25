# 📝 Contoh Edit Konten - Step by Step

## 🎯 Contoh 1: Mengubah Nama Bisnis

### Lokasi: `src/components/Navbar.tsx` baris 32

**SEBELUM:**
```tsx
<span className="text-xl font-bold text-foreground">OptikaVista</span>
```

**SESUDAH:**
```tsx
<span className="text-xl font-bold text-foreground">Optik Sejahtera</span>
```

**Hasil:** Nama di navbar berubah menjadi "Optik Sejahtera"

---

## 🎯 Contoh 2: Mengubah Judul Halaman Beranda

### Lokasi: `src/pages/Index.tsx` baris 28-34

**SEBELUM:**
```tsx
<h1 className="text-4xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
  Lihat Dunia Lebih <span className="text-primary">Jelas & Stylish</span>
</h1>
<p className="text-lg text-muted-foreground mb-8 max-w-lg">
  Temukan kacamata sempurna yang memadukan kenyamanan, gaya, dan teknologi lensa terbaik untuk penglihatan Anda.
</p>
```

**SESUDAH:**
```tsx
<h1 className="text-4xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
  Optik Terpercaya <span className="text-primary">Sejak 2010</span>
</h1>
<p className="text-lg text-muted-foreground mb-8 max-w-lg">
  Kami menyediakan kacamata berkualitas dengan harga terjangkau untuk seluruh keluarga Indonesia.
</p>
```

**Hasil:** Hero section berubah dengan judul dan deskripsi baru

---

## 🎯 Contoh 3: Menambah Produk Baru

### Lokasi: `src/pages/Index.tsx` baris 17-24

**SEBELUM:**
```tsx
const bestSellers = [
  { name: "Ray-Ban Aviator", price: "Rp 2.500.000", category: "Sunglasses" },
  { name: "Oakley Holbrook", price: "Rp 1.800.000", category: "Sunglasses" },
];
```

**SESUDAH:**
```tsx
const bestSellers = [
  { name: "Ray-Ban Aviator", price: "Rp 2.500.000", category: "Sunglasses" },
  { name: "Oakley Holbrook", price: "Rp 1.800.000", category: "Sunglasses" },
  { name: "Kacamata Baca Premium", price: "Rp 500.000", category: "Frame" },
  { name: "Lensa Anti Radiasi", price: "Rp 750.000", category: "Lensa" },
];
```

**Hasil:** 2 produk baru muncul di halaman beranda

---

## 🎯 Contoh 4: Mengubah Testimoni

### Lokasi: `src/pages/Index.tsx` baris 26-30

**SEBELUM:**
```tsx
const testimonials = [
  { name: "Rina Wijaya", text: "Pelayanan sangat ramah dan profesional. Kacamata saya sangat nyaman!", rating: 5 },
  { name: "Budi Santoso", text: "Pemeriksaan mata yang sangat detail. Hasilnya akurat dan cepat.", rating: 5 },
];
```

**SESUDAH:**
```tsx
const testimonials = [
  { name: "Ahmad Hidayat", text: "Harga terjangkau, kualitas bagus. Sangat puas!", rating: 5 },
  { name: "Siti Nurhaliza", text: "Pelayanan ramah, produk berkualitas. Recommended!", rating: 5 },
  { name: "Budi Santoso", text: "Pemeriksaan mata yang sangat detail. Hasilnya akurat dan cepat.", rating: 5 },
];
```

**Hasil:** Testimoni baru muncul di halaman beranda

---

## 🎯 Contoh 5: Mengubah Nomor WhatsApp

### Lokasi: `src/pages/Kontak.tsx` baris 11

**SEBELUM:**
```tsx
const WHATSAPP_NUMBER = "6281234567890";
```

**SESUDAH:**
```tsx
const WHATSAPP_NUMBER = "6281987654321";
```

**Hasil:** Tombol WhatsApp akan mengarah ke nomor baru

**PENTING:** Format harus `62` + nomor tanpa `0` di depan
- Contoh: 0819-8765-4321 → 6281987654321

---

## 🎯 Contoh 6: Mengubah Alamat & Info Kontak

### Lokasi: `src/pages/Kontak.tsx` baris 11-15

**SEBELUM:**
```tsx
const WHATSAPP_NUMBER = "6281234567890";
const EMAIL_ADDRESS = "info@optikavista.com";
const PHONE_NUMBER = "(021) 555-0123";
const ADDRESS = "Jl. Sudirman No. 123, Jakarta Selatan 12190";
```

**SESUDAH:**
```tsx
const WHATSAPP_NUMBER = "6281987654321";
const EMAIL_ADDRESS = "contact@optiksejahtera.com";
const PHONE_NUMBER = "(021) 123-4567";
const ADDRESS = "Jl. Merdeka No. 45, Bandung 40111";
```

**Hasil:** Semua info kontak berubah

---

## 🎯 Contoh 7: Mengubah Statistik Perusahaan

### Lokasi: `src/pages/Tentang.tsx` baris 9-14

**SEBELUM:**
```tsx
const stats = [
  { value: "15+", label: "Tahun Pengalaman" },
  { value: "10K+", label: "Pelanggan Puas" },
  { value: "50+", label: "Brand Partner" },
  { value: "3", label: "Cabang" },
];
```

**SESUDAH:**
```tsx
const stats = [
  { value: "20+", label: "Tahun Pengalaman" },
  { value: "25K+", label: "Pelanggan Puas" },
  { value: "100+", label: "Brand Partner" },
  { value: "5", label: "Cabang" },
];
```

**Hasil:** Angka statistik berubah di halaman Tentang

---

## 🎯 Contoh 8: Menambah Gambar Logo

### Langkah 1: Simpan Logo
Simpan file logo di: `public/images/logo.png`

### Langkah 2: Edit Navbar
Lokasi: `src/components/Navbar.tsx` baris 29-32

**SEBELUM:**
```tsx
<div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
  <Eye className="w-5 h-5 text-primary-foreground" />
</div>
```

**SESUDAH:**
```tsx
<img 
  src="/images/logo.png" 
  alt="Logo Optik Sejahtera"
  className="w-9 h-9 object-contain"
/>
```

**Hasil:** Logo muncul di navbar

---

## 🎯 Contoh 9: Menambah Gambar Produk

### Langkah 1: Simpan Gambar
Simpan di: `public/images/products/kacamata1.jpg`

### Langkah 2: Update Data Produk
Lokasi: `src/pages/Produk.tsx` baris 11-18

**SEBELUM:**
```tsx
const fallbackProducts = [
  { 
    id: "1", 
    name: "Ray-Ban Aviator", 
    price: "Rp 2.500.000", 
    category: "Sunglasses", 
    description: "Frame metal klasik" 
  },
];
```

**SESUDAH:**
```tsx
const fallbackProducts = [
  { 
    id: "1", 
    name: "Ray-Ban Aviator", 
    price: "Rp 2.500.000", 
    category: "Sunglasses", 
    description: "Frame metal klasik",
    image_url: "/images/products/kacamata1.jpg"
  },
];
```

**Hasil:** Gambar produk muncul di halaman Produk

---

## 🎯 Contoh 10: Mengubah Menu Navigasi

### Lokasi: `src/components/Navbar.tsx` baris 10-16

**SEBELUM:**
```tsx
const navLinks = [
  { label: "Beranda", path: "/" },
  { label: "Produk", path: "/produk" },
  { label: "Tentang Kami", path: "/tentang" },
  { label: "Layanan", path: "/layanan" },
  { label: "Kontak", path: "/kontak" },
];
```

**SESUDAH:**
```tsx
const navLinks = [
  { label: "Home", path: "/" },
  { label: "Katalog", path: "/produk" },
  { label: "About", path: "/tentang" },
  { label: "Services", path: "/layanan" },
  { label: "Contact", path: "/kontak" },
];
```

**Hasil:** Label menu berubah

---

## 🎯 Contoh 11: Mengubah Cerita Perusahaan

### Lokasi: `src/pages/Tentang.tsx` baris 70-75

**SEBELUM:**
```tsx
<p>OptikaVista didirikan oleh Dr. Andi Pratama pada tahun 2010 di Jakarta. Berawal dari klinik kecil, kami kini telah berkembang menjadi salah satu optik terpercaya dengan 3 cabang di area Jabodetabek.</p>
<p>Kami percaya bahwa setiap orang berhak mendapatkan penglihatan yang jernih. Oleh karena itu, kami menghadirkan layanan pemeriksaan mata profesional, koleksi kacamata premium, dan harga yang terjangkau.</p>
```

**SESUDAH:**
```tsx
<p>Optik Sejahtera didirikan pada tahun 2005 di Bandung. Dengan pengalaman lebih dari 15 tahun, kami telah melayani ribuan pelanggan di seluruh Indonesia.</p>
<p>Visi kami adalah menjadi optik pilihan utama keluarga Indonesia dengan menyediakan produk berkualitas tinggi dan pelayanan terbaik.</p>
```

**Hasil:** Cerita perusahaan berubah

---

## 🎯 Contoh 12: Menambah Layanan Baru

### Lokasi: `src/pages/Layanan.tsx` baris 9-20

**SEBELUM:**
```tsx
const services = [
  { 
    icon: Eye, 
    title: "Pemeriksaan Mata", 
    desc: "Pemeriksaan menyeluruh...", 
    features: ["Refraksi mata", "Tekanan bola mata"] 
  },
];
```

**SESUDAH:**
```tsx
const services = [
  { 
    icon: Eye, 
    title: "Pemeriksaan Mata", 
    desc: "Pemeriksaan menyeluruh...", 
    features: ["Refraksi mata", "Tekanan bola mata"] 
  },
  { 
    icon: Glasses, 
    title: "Lensa Kontak", 
    desc: "Fitting dan pemasangan lensa kontak", 
    features: ["Konsultasi gratis", "Berbagai pilihan brand", "Panduan perawatan"] 
  },
];
```

**Hasil:** Layanan baru muncul di halaman Layanan

---

## 📋 Checklist Setelah Edit

Setelah edit konten, lakukan:

- [ ] Simpan file (`Ctrl + S`)
- [ ] Refresh browser (`F5` atau `Ctrl + Shift + R`)
- [ ] Cek apakah perubahan muncul
- [ ] Test di mobile view (F12 → Toggle device toolbar)
- [ ] Cek console browser (F12) untuk error
- [ ] Test semua link masih berfungsi

---

## 🆘 Troubleshooting

### Perubahan Tidak Muncul
1. Pastikan file sudah disimpan (`Ctrl + S`)
2. Hard refresh browser (`Ctrl + Shift + R`)
3. Clear cache browser
4. Restart server (`Ctrl + C` lalu `npm run dev`)

### Error Setelah Edit
1. Cek console browser (F12)
2. Undo perubahan (`Ctrl + Z`)
3. Cek syntax: kurung kurawal `{}`, koma `,`, tanda kutip `""`
4. Tanyakan dengan screenshot error

### Gambar Tidak Muncul
1. Cek path gambar benar
2. Pastikan gambar ada di folder `public/images/`
3. Cek nama file (huruf besar/kecil harus sama)
4. Refresh browser dengan `Ctrl + Shift + R`

---

## 💡 Tips Pro

1. **Edit sedikit demi sedikit** - Jangan edit banyak sekaligus
2. **Test setiap perubahan** - Refresh dan cek hasilnya
3. **Backup file** - Copy file asli sebelum edit
4. **Gunakan Ctrl + Z** - Untuk undo jika salah
5. **Cek console** - Tekan F12 untuk lihat error

---

Selamat mengedit! Jika ada yang tidak jelas, tanyakan saja! 🚀
