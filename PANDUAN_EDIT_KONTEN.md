# Panduan Edit Konten Website OptikaVista

## 📍 Lokasi File Penting

### Halaman-Halaman Utama
- **Beranda**: `src/pages/Index.tsx`
- **Produk**: `src/pages/Produk.tsx`
- **Tentang**: `src/pages/Tentang.tsx`
- **Layanan**: `src/pages/Layanan.tsx`
- **Kontak**: `src/pages/Kontak.tsx`

### Komponen
- **Navbar**: `src/components/Navbar.tsx`
- **Footer**: `src/components/Footer.tsx`
- **Layout**: `src/components/Layout.tsx`

---

## 🎨 Cara Mengganti Konten

### 1. HALAMAN BERANDA (`src/pages/Index.tsx`)

#### A. Hero Section (Bagian Atas)
Cari baris ini dan edit:
```tsx
<h1 className="text-4xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
  Lihat Dunia Lebih <span className="text-primary">Jelas & Stylish</span>
</h1>
<p className="text-lg text-muted-foreground mb-8 max-w-lg">
  Temukan kacamata sempurna yang memadukan kenyamanan, gaya, dan teknologi lensa terbaik untuk penglihatan Anda.
</p>
```

#### B. Produk Unggulan
Cari array `bestSellers` dan edit:
```tsx
const bestSellers = [
  { 
    name: "Ray-Ban Aviator",           // Ganti nama produk
    price: "Rp 2.500.000",             // Ganti harga
    category: "Sunglasses"             // Ganti kategori
  },
  // Tambah produk baru dengan format yang sama
  { 
    name: "Produk Baru", 
    price: "Rp 1.000.000", 
    category: "Frame" 
  },
];
```

#### C. Testimoni
Cari array `testimonials` dan edit:
```tsx
const testimonials = [
  { 
    name: "Rina Wijaya",                                    // Nama pelanggan
    text: "Pelayanan sangat ramah dan profesional...",     // Testimoni
    rating: 5                                               // Rating (1-5)
  },
];
```

---

### 2. HALAMAN PRODUK (`src/pages/Produk.tsx`)

Cari array `products` dan edit:
```tsx
const products = [
  { 
    name: "Ray-Ban Aviator",                              // Nama produk
    price: "Rp 2.500.000",                                // Harga
    category: "Sunglasses",                               // Kategori
    desc: "Frame metal klasik dengan lensa tinted"        // Deskripsi
  },
  // Tambah produk baru
];
```

**Kategori yang tersedia**: "Frame", "Sunglasses", "Lensa"

---

### 3. HALAMAN TENTANG (`src/pages/Tentang.tsx`)

#### A. Statistik
```tsx
const stats = [
  { value: "15+", label: "Tahun Pengalaman" },    // Edit angka dan label
  { value: "10K+", label: "Pelanggan Puas" },
  { value: "50+", label: "Brand Partner" },
  { value: "3", label: "Cabang" },
];
```

#### B. Tim
```tsx
const team = [
  { 
    name: "Dr. Andi Pratama",                           // Nama
    role: "Optometris Utama",                           // Jabatan
    desc: "Berpengalaman 12 tahun dalam pemeriksaan mata"  // Deskripsi
  },
];
```

#### C. Cerita Perusahaan
Cari section "Cerita Kami" dan edit paragraf:
```tsx
<p>OptikaVista didirikan oleh Dr. Andi Pratama pada tahun 2010...</p>
<p>Kami percaya bahwa setiap orang berhak mendapatkan penglihatan yang jernih...</p>
```

---

### 4. HALAMAN LAYANAN (`src/pages/Layanan.tsx`)

Cari array `services` dan edit:
```tsx
const services = [
  { 
    icon: Eye,                                          // Ikon (jangan ubah)
    title: "Pemeriksaan Mata",                          // Judul layanan
    desc: "Pemeriksaan menyeluruh menggunakan...",      // Deskripsi
    features: [                                         // Fitur-fitur
      "Refraksi mata",
      "Tekanan bola mata",
      "Pemeriksaan retina",
      "Konsultasi hasil"
    ]
  },
];
```

---

### 5. HALAMAN KONTAK (`src/pages/Kontak.tsx`)

Edit konstanta di bagian atas file:
```tsx
const WHATSAPP_NUMBER = "6281234567890";              // Nomor WhatsApp
const EMAIL_ADDRESS = "info@optikavista.com";         // Email
const PHONE_NUMBER = "(021) 555-0123";                // Telepon
const ADDRESS = "Jl. Sudirman No. 123, Jakarta...";   // Alamat
const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=...";  // URL Maps
```

---

### 6. NAVBAR (`src/components/Navbar.tsx`)

#### A. Nama Brand
```tsx
<span className="text-xl font-bold text-foreground">OptikaVista</span>
```

#### B. Menu Navigasi
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

## 🖼️ Cara Menambahkan Foto/Gambar

### Metode 1: Simpan di Folder Public (Recommended)

1. Buat folder struktur:
```
public/
  ├── images/
  │   ├── products/
  │   ├── team/
  │   ├── hero/
  │   └── logo/
```

2. Simpan gambar Anda di folder yang sesuai

3. Gunakan di kode:
```tsx
// Contoh di produk
<img 
  src="/images/products/rayban-aviator.jpg" 
  alt="Ray-Ban Aviator"
  className="w-full h-full object-cover"
/>
```

### Metode 2: URL Eksternal
```tsx
<img 
  src="https://example.com/image.jpg" 
  alt="Deskripsi"
/>
```

### Contoh Implementasi di Produk

Edit file `src/pages/Produk.tsx`:

**SEBELUM** (menggunakan ikon):
```tsx
<div className="aspect-square bg-muted flex items-center justify-center">
  <Glasses className="w-16 h-16 text-muted-foreground/30" />
</div>
```

**SESUDAH** (menggunakan gambar):
```tsx
<div className="aspect-square bg-muted overflow-hidden">
  <img 
    src={`/images/products/${p.name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
    alt={p.name}
    className="w-full h-full object-cover hover:scale-110 transition-transform"
  />
</div>
```

---

## 🎨 Cara Mengganti Warna

Edit file `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "hsl(24 100% 50%)",    // Warna utama (orange)
    foreground: "hsl(0 0% 100%)",   // Teks di atas primary
  },
  // Edit warna lainnya
}
```

Atau gunakan warna langsung di className:
```tsx
<div className="bg-blue-500 text-white">
  Konten
</div>
```

---

## 📱 Cara Mengganti Logo

1. Simpan logo di `public/images/logo/logo.png`

2. Edit `src/components/Navbar.tsx`:

**SEBELUM**:
```tsx
<div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
  <Eye className="w-5 h-5 text-primary-foreground" />
</div>
```

**SESUDAH**:
```tsx
<img 
  src="/images/logo/logo.png" 
  alt="OptikaVista Logo"
  className="w-9 h-9 object-contain"
/>
```

---

## 🔧 Tips Penting

### 1. Format Gambar yang Disarankan
- **Logo**: PNG dengan background transparan
- **Produk**: JPG/PNG, ukuran 800x800px
- **Hero**: JPG, ukuran 1920x1080px
- **Team**: JPG/PNG, ukuran 400x400px

### 2. Optimasi Gambar
- Kompres gambar sebelum upload (gunakan TinyPNG.com)
- Ukuran file maksimal 500KB per gambar
- Gunakan format WebP untuk performa lebih baik

### 3. Setelah Edit
Simpan file dan refresh browser (Ctrl+R atau Cmd+R)

### 4. Jika Ada Error
- Cek console browser (F12)
- Pastikan path gambar benar
- Pastikan format data array tidak rusak (koma, kurung kurawal)

---

## 📋 Checklist Edit Konten

- [ ] Edit nama brand di Navbar
- [ ] Ganti hero text di Beranda
- [ ] Update daftar produk
- [ ] Edit testimoni pelanggan
- [ ] Update informasi perusahaan di Tentang
- [ ] Edit daftar layanan
- [ ] Update informasi kontak
- [ ] Ganti nomor WhatsApp
- [ ] Update Google Maps embed
- [ ] Tambahkan foto produk
- [ ] Ganti logo (opsional)
- [ ] Test semua link dan tombol

---

## 🆘 Butuh Bantuan?

Jika ada yang tidak jelas atau butuh bantuan edit konten tertentu, tanyakan saja!

Contoh:
- "Bagaimana cara menambah produk baru?"
- "Bagaimana cara mengganti warna tema?"
- "Bagaimana cara menambah halaman baru?"
