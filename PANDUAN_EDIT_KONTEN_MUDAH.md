# 📝 Panduan Edit Konten Website - Mudah & Praktis

## 🎯 2 Cara Edit Konten

### Cara 1: Via Admin Dashboard (Paling Mudah) ⭐
Akses: `http://localhost:8081/admin`

**Anda bisa edit:**
- ✅ Produk (tambah, edit, hapus)
- ✅ Testimoni
- ✅ Lihat pesan kontak

**Tidak perlu coding!** Semua via form.

---

### Cara 2: Edit File Langsung (Jika Belum Setup Supabase)

---

## 📂 Lokasi File untuk Edit

### 1. HALAMAN BERANDA (`src/pages/Index.tsx`)

#### A. Ubah Judul & Tagline Hero
**Cari baris 28-34:**
```tsx
<h1 className="text-4xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
  Lihat Dunia Lebih <span className="text-primary">Jelas & Stylish</span>
</h1>
<p className="text-lg text-muted-foreground mb-8 max-w-lg">
  Temukan kacamata sempurna yang memadukan kenyamanan, gaya, dan teknologi lensa terbaik untuk penglihatan Anda.
</p>
```

**Ganti dengan:**
```tsx
<h1 className="text-4xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
  Judul Anda <span className="text-primary">Di Sini</span>
</h1>
<p className="text-lg text-muted-foreground mb-8 max-w-lg">
  Deskripsi bisnis Anda di sini.
</p>
```

#### B. Ubah Produk Unggulan
**Cari baris 17-24:**
```tsx
const bestSellers = [
  { name: "Ray-Ban Aviator", price: "Rp 2.500.000", category: "Sunglasses" },
  { name: "Oakley Holbrook", price: "Rp 1.800.000", category: "Sunglasses" },
  // ... dst
];
```

**Edit atau tambah produk:**
```tsx
const bestSellers = [
  { name: "Nama Produk Anda", price: "Rp 1.000.000", category: "Frame" },
  { name: "Produk Kedua", price: "Rp 2.000.000", category: "Sunglasses" },
];
```

#### C. Ubah Testimoni
**Cari baris 26-30:**
```tsx
const testimonials = [
  { name: "Rina Wijaya", text: "Pelayanan sangat ramah...", rating: 5 },
  { name: "Budi Santoso", text: "Pemeriksaan mata yang detail...", rating: 5 },
];
```

**Ganti dengan testimoni Anda:**
```tsx
const testimonials = [
  { name: "Nama Pelanggan", text: "Testimoni pelanggan Anda", rating: 5 },
];
```

---

### 2. HALAMAN PRODUK (`src/pages/Produk.tsx`)

**Cari baris 11-18:**
```tsx
const fallbackProducts = [
  { id: "1", name: "Ray-Ban Aviator", price: "Rp 2.500.000", category: "Sunglasses", description: "Deskripsi" },
  // ... dst
];
```

**Edit produk:**
```tsx
const fallbackProducts = [
  { 
    id: "1", 
    name: "Nama Produk", 
    price: "Rp 1.500.000", 
    category: "Frame",  // Frame, Sunglasses, atau Lensa
    description: "Deskripsi produk Anda" 
  },
];
```

---

### 3. HALAMAN TENTANG (`src/pages/Tentang.tsx`)

#### A. Ubah Statistik
**Cari baris 9-14:**
```tsx
const stats = [
  { value: "15+", label: "Tahun Pengalaman" },
  { value: "10K+", label: "Pelanggan Puas" },
  { value: "50+", label: "Brand Partner" },
  { value: "3", label: "Cabang" },
];
```

#### B. Ubah Cerita Perusahaan
**Cari baris 70-75:**
```tsx
<p>OptikaVista didirikan oleh Dr. Andi Pratama pada tahun 2010...</p>
<p>Kami percaya bahwa setiap orang berhak mendapatkan penglihatan yang jernih...</p>
```

**Ganti dengan cerita Anda**

#### C. Ubah Data Tim
**Cari baris 16-20:**
```tsx
const team = [
  { name: "Dr. Andi Pratama", role: "Optometris Utama", desc: "Berpengalaman 12 tahun" },
  { name: "Siti Rahayu", role: "Manajer Operasional", desc: "Ahli dalam manajemen" },
];
```

---

### 4. HALAMAN LAYANAN (`src/pages/Layanan.tsx`)

**Cari baris 9-20:**
```tsx
const services = [
  { 
    icon: Eye, 
    title: "Pemeriksaan Mata", 
    desc: "Pemeriksaan menyeluruh...", 
    features: ["Refraksi mata", "Tekanan bola mata", "Pemeriksaan retina"] 
  },
];
```

**Edit layanan Anda**

---

### 5. HALAMAN KONTAK (`src/pages/Kontak.tsx`)

**Cari baris 11-15:**
```tsx
const WHATSAPP_NUMBER = "6281234567890";  // Format: 62xxx (tanpa +)
const EMAIL_ADDRESS = "info@optikavista.com";
const PHONE_NUMBER = "(021) 555-0123";
const ADDRESS = "Jl. Sudirman No. 123, Jakarta Selatan 12190";
const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=...";
```

**Ganti dengan data Anda:**
- WhatsApp: Format 62xxx (contoh: 6281234567890)
- Email: Email bisnis Anda
- Telepon: Nomor telepon
- Alamat: Alamat lengkap
- Google Maps: URL embed dari Google Maps

---

### 6. NAVBAR (`src/components/Navbar.tsx`)

#### Ubah Nama Brand
**Cari baris 32:**
```tsx
<span className="text-xl font-bold text-foreground">OptikaVista</span>
```

**Ganti dengan:**
```tsx
<span className="text-xl font-bold text-foreground">Nama Bisnis Anda</span>
```

#### Ubah Menu
**Cari baris 10-16:**
```tsx
const navLinks = [
  { label: "Beranda", path: "/" },
  { label: "Produk", path: "/produk" },
  { label: "Tentang Kami", path: "/tentang" },
  { label: "Layanan", path: "/layanan" },
  { label: "Kontak", path: "/kontak" },
];
```

---

## 🖼️ Cara Menambah Gambar

### 1. Simpan Gambar di Folder Public
```
public/
  └── images/
      ├── products/
      │   ├── produk1.jpg
      │   └── produk2.jpg
      ├── logo.png
      └── hero-bg.jpg
```

### 2. Gunakan di Kode
```tsx
<img src="/images/products/produk1.jpg" alt="Nama Produk" />
```

### 3. Atau Gunakan URL Eksternal
```tsx
<img src="https://example.com/gambar.jpg" alt="Deskripsi" />
```

---

## 🎨 Cara Mengganti Logo

### Di Navbar (`src/components/Navbar.tsx`)

**Cari baris 29-32:**
```tsx
<div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
  <Eye className="w-5 h-5 text-primary-foreground" />
</div>
```

**Ganti dengan:**
```tsx
<img 
  src="/images/logo.png" 
  alt="Logo" 
  className="w-9 h-9 object-contain"
/>
```

---

## 🎯 Tips Edit Konten

### 1. Edit Satu File Sekali
Jangan edit banyak file sekaligus, test dulu satu per satu

### 2. Simpan & Refresh
- Simpan file (`Ctrl + S`)
- Refresh browser (`F5`)
- Lihat perubahan

### 3. Backup Sebelum Edit
Copy file asli sebelum edit, jadi bisa dikembalikan jika error

### 4. Cek Console Browser
Jika ada error, tekan `F12` → Console untuk lihat error

---

## 📋 Checklist Edit Konten

- [ ] Ubah nama brand di Navbar
- [ ] Edit hero section di Beranda
- [ ] Update produk unggulan
- [ ] Ganti testimoni
- [ ] Edit statistik di Tentang
- [ ] Update cerita perusahaan
- [ ] Ganti data tim
- [ ] Edit layanan
- [ ] Update info kontak
- [ ] Ganti nomor WhatsApp
- [ ] Upload logo (opsional)
- [ ] Tambah gambar produk (opsional)

---

## 🆘 Jika Ada Error

### Error: Syntax Error
- Cek tanda kurung `{ }` dan koma `,`
- Pastikan string dalam tanda kutip `""`
- Undo perubahan terakhir (`Ctrl + Z`)

### Error: Halaman Tidak Update
- Simpan file (`Ctrl + S`)
- Hard refresh browser (`Ctrl + Shift + R`)
- Restart server (stop dengan `Ctrl + C`, lalu `npm run dev`)

### Error: Gambar Tidak Muncul
- Cek path gambar benar
- Pastikan gambar ada di folder `public/images/`
- Cek nama file (case-sensitive)

---

## 🚀 Cara Cepat Edit via Admin

Jika sudah setup Supabase:

1. Akses: `http://localhost:8081/admin`
2. Edit produk, testimoni via form
3. Tidak perlu edit file!

---

## 📞 Butuh Bantuan?

Tanyakan dengan format:
- File apa yang ingin diedit?
- Konten apa yang ingin diubah?
- Screenshot jika perlu

Contoh: "Bagaimana cara mengubah judul di halaman beranda?"

---

## 🎓 Contoh Edit Lengkap

### Mengubah Hero Section

**SEBELUM:**
```tsx
<h1>Lihat Dunia Lebih <span>Jelas & Stylish</span></h1>
```

**SESUDAH:**
```tsx
<h1>Optik Terbaik di <span>Jakarta</span></h1>
```

**Langkah:**
1. Buka `src/pages/Index.tsx`
2. Cari baris 28
3. Ganti teks
4. Simpan (`Ctrl + S`)
5. Refresh browser (`F5`)

---

Selamat mengedit! 🎉
