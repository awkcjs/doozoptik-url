# 📝 Cara Edit Footer Website

## 📍 Lokasi File

**File:** `src/components/Footer.tsx`

Footer muncul di bagian bawah semua halaman website.

---

## 🎨 Bagian-Bagian Footer

Footer terbagi menjadi 4 kolom:

1. **Brand & Deskripsi** (Kolom 1)
   - Logo & nama bisnis
   - Deskripsi singkat
   - Social media icons

2. **Menu** (Kolom 2)
   - Link navigasi

3. **Layanan** (Kolom 3)
   - Daftar layanan

4. **Kontak** (Kolom 4)
   - Alamat
   - Telepon
   - Email
   - Jam operasional

5. **Copyright** (Bawah)
   - Teks copyright

---

## ✏️ Cara Edit Setiap Bagian

### 1. Ubah Nama Brand & Logo

**Lokasi:** Baris 10-14

**SEBELUM:**
```tsx
<span className="text-xl font-bold text-white">OptikaVista</span>
```

**SESUDAH:**
```tsx
<span className="text-xl font-bold text-white">Dooz Optik</span>
```

**Untuk ganti logo:**
```tsx
<img 
  src="/images/logo-white.png" 
  alt="Logo" 
  className="w-9 h-9 object-contain"
/>
```

---

### 2. Ubah Deskripsi Bisnis

**Lokasi:** Baris 15-17

**SEBELUM:**
```tsx
<p className="text-sm leading-relaxed opacity-80">
  Solusi terbaik untuk kesehatan mata dan gaya Anda. Kami menyediakan kacamata berkualitas dengan layanan pemeriksaan mata profesional.
</p>
```

**SESUDAH:**
```tsx
<p className="text-sm leading-relaxed opacity-80">
  Deskripsi bisnis Anda di sini. Jelaskan keunggulan dan layanan yang Anda tawarkan.
</p>
```

---

### 3. Ubah Link Social Media

**Lokasi:** Baris 18-24

**SEBELUM:**
```tsx
<div className="flex gap-3">
  {[Facebook, Instagram, Twitter].map((Icon, i) => (
    <a key={i} href="#" className="...">
      <Icon className="w-4 h-4" />
    </a>
  ))}
</div>
```

**SESUDAH (dengan link aktif):**
```tsx
<div className="flex gap-3">
  <a href="https://facebook.com/doozoptik" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
    <Facebook className="w-4 h-4" />
  </a>
  <a href="https://instagram.com/doozoptik" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
    <Instagram className="w-4 h-4" />
  </a>
  <a href="https://twitter.com/doozoptik" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
    <Twitter className="w-4 h-4" />
  </a>
</div>
```

---

### 4. Ubah Menu Navigasi

**Lokasi:** Baris 29-40

**SEBELUM:**
```tsx
{[
  { label: "Beranda", path: "/" },
  { label: "Produk", path: "/produk" },
  { label: "Tentang Kami", path: "/tentang" },
  { label: "Layanan", path: "/layanan" },
  { label: "Kontak", path: "/kontak" },
].map((link) => (
  <li key={link.path}>
    <Link to={link.path}>{link.label}</Link>
  </li>
))}
```

**Untuk menambah menu:**
```tsx
{[
  { label: "Beranda", path: "/" },
  { label: "Produk", path: "/produk" },
  { label: "Tentang Kami", path: "/tentang" },
  { label: "Layanan", path: "/layanan" },
  { label: "Kontak", path: "/kontak" },
  { label: "Blog", path: "/blog" },  // Menu baru
].map((link) => (
  <li key={link.path}>
    <Link to={link.path}>{link.label}</Link>
  </li>
))}
```

---

### 5. Ubah Daftar Layanan

**Lokasi:** Baris 45-51

**SEBELUM:**
```tsx
{["Pemeriksaan Mata", "Pemasangan Lensa", "Konsultasi Optik", "Kacamata Custom"].map((s) => (
  <li key={s}>{s}</li>
))}
```

**SESUDAH:**
```tsx
{[
  "Pemeriksaan Mata Gratis", 
  "Lensa Kontak", 
  "Frame Premium", 
  "Garansi 1 Tahun",
  "Konsultasi Online"
].map((s) => (
  <li key={s}>{s}</li>
))}
```

---

### 6. Ubah Info Kontak

**Lokasi:** Baris 56-61

**SEBELUM:**
```tsx
<li className="flex items-start gap-2">
  <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> 
  Jl. Sudirman No. 123, Jakarta Selatan
</li>
<li className="flex items-center gap-2">
  <Phone className="w-4 h-4 shrink-0" /> 
  (021) 555-0123
</li>
<li className="flex items-center gap-2">
  <Mail className="w-4 h-4 shrink-0" /> 
  info@optikavista.com
</li>
<li className="flex items-start gap-2">
  <Clock className="w-4 h-4 mt-0.5 shrink-0" /> 
  Sen-Sab: 09:00 - 20:00
</li>
```

**SESUDAH:**
```tsx
<li className="flex items-start gap-2">
  <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> 
  Jl. Pandanaran No. 252D, Boyolali, Jawa Tengah
</li>
<li className="flex items-center gap-2">
  <Phone className="w-4 h-4 shrink-0" /> 
  (0276) 3287286
</li>
<li className="flex items-center gap-2">
  <Mail className="w-4 h-4 shrink-0" /> 
  info@doozoptik.com
</li>
<li className="flex items-start gap-2">
  <Clock className="w-4 h-4 mt-0.5 shrink-0" /> 
  Senin - Ahad: 08:00 - 21:00
</li>
```

---

### 7. Ubah Copyright

**Lokasi:** Baris 67-69

**SEBELUM:**
```tsx
© 2026 OptikaVista. Semua hak dilindungi.
```

**SESUDAH:**
```tsx
© 2024 Dooz Optik Boyolali. Semua hak dilindungi.
```

---

## 🎨 Contoh Edit Lengkap

Berikut contoh edit lengkap untuk Dooz Optik:

```tsx
import { Link } from "react-router-dom";
import { Eye, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sky-dark text-sky-light">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-white">Dooz Optik</span>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Optik terpercaya di Boyolali sejak 2010. Menyediakan kacamata berkualitas dengan harga terjangkau untuk seluruh keluarga.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com/doozoptik" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/doozoptik" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Menu</h4>
            <ul className="space-y-3 text-sm opacity-80">
              {[
                { label: "Beranda", path: "/" },
                { label: "Produk", path: "/produk" },
                { label: "Tentang Kami", path: "/tentang" },
                { label: "Layanan", path: "/layanan" },
                { label: "Kontak", path: "/kontak" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-semibold text-white mb-4">Layanan</h4>
            <ul className="space-y-3 text-sm opacity-80">
              {[
                "Pemeriksaan Mata Gratis", 
                "Lensa Kontak", 
                "Frame Premium", 
                "Garansi 1 Tahun"
              ].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> 
                Jl. Pandanaran No. 252D, Boyolali
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" /> 
                (0276) 3287286
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" /> 
                info@doozoptik.com
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" /> 
                Senin - Ahad: 08:00 - 21:00
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6 text-center text-sm opacity-60">
          © 2024 Dooz Optik Boyolali. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

---

## 💡 Tips Edit Footer

### 1. Konsistensi Data
Pastikan info kontak di Footer sama dengan halaman Kontak:
- Alamat
- Telepon
- Email
- Jam operasional

### 2. Link Social Media
Ganti `#` dengan URL aktif:
```tsx
<a href="https://instagram.com/username" target="_blank">
```

### 3. Tambah WhatsApp
Jika ingin tambah icon WhatsApp:

```tsx
import { MessageCircle } from "lucide-react";

// Di bagian social media:
<a href="https://wa.me/628112640770" target="_blank" rel="noopener noreferrer" className="...">
  <MessageCircle className="w-4 h-4" />
</a>
```

### 4. Hapus Kolom
Jika ingin hapus kolom Layanan, hapus bagian:
```tsx
{/* Layanan */}
<div>
  <h4>Layanan</h4>
  ...
</div>
```

Dan ubah grid dari `lg:grid-cols-4` menjadi `lg:grid-cols-3`

---

## 📋 Checklist Edit Footer

- [ ] Ubah nama brand
- [ ] Edit deskripsi bisnis
- [ ] Update link social media
- [ ] Sesuaikan menu navigasi
- [ ] Edit daftar layanan
- [ ] Update alamat
- [ ] Update telepon
- [ ] Update email
- [ ] Update jam operasional
- [ ] Ubah copyright
- [ ] Simpan file (`Ctrl + S`)
- [ ] Refresh browser (`F5`)
- [ ] Cek footer di semua halaman

---

## 🎯 Langkah Cepat

1. Buka file: `src/components/Footer.tsx`
2. Edit bagian yang ingin diubah
3. Simpan (`Ctrl + S`)
4. Refresh browser (`F5`)
5. Cek hasilnya di bagian bawah halaman

---

## 🆘 Troubleshooting

### Footer Tidak Berubah
- Pastikan file sudah disimpan
- Hard refresh browser (`Ctrl + Shift + R`)
- Clear cache browser

### Error Setelah Edit
- Cek console browser (F12)
- Undo perubahan (`Ctrl + Z`)
- Cek syntax: kurung kurawal, koma, tanda kutip

### Footer Berantakan
- Cek apakah ada tag yang tidak ditutup
- Pastikan struktur HTML benar
- Restore dari backup jika perlu

---

Selamat mengedit Footer! 🎉
