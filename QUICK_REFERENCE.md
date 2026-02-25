# ⚡ Quick Reference - OptikaVista

## 🚀 Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:5173)
npm run build            # Build for production
npm run preview          # Preview production build

# Lint & Test
npm run lint             # Run ESLint
npm run test             # Run tests
```

## 📍 URLs

```
Development:
http://localhost:5173           # Beranda
http://localhost:5173/produk    # Katalog
http://localhost:5173/tentang   # About
http://localhost:5173/layanan   # Services
http://localhost:5173/kontak    # Contact
http://localhost:5173/admin     # Admin Dashboard

Production:
https://your-domain.com/admin   # Admin Dashboard
```

## 🗄️ Database Tables

```sql
-- Produk
SELECT * FROM products;

-- Testimoni
SELECT * FROM testimonials;

-- Pesan Kontak
SELECT * FROM contact_messages;

-- Layanan (opsional)
SELECT * FROM services;
```

## 📁 File Locations

### Edit Konten
```
src/pages/Index.tsx      # Beranda
src/pages/Produk.tsx     # Katalog
src/pages/Tentang.tsx    # About
src/pages/Layanan.tsx    # Services
src/pages/Kontak.tsx     # Contact
src/components/Navbar.tsx # Menu & Logo
```

### Konfigurasi
```
.env                     # API Keys (jangan commit!)
tailwind.config.ts       # Warna & styling
vite.config.ts           # Build config
supabase-schema.sql      # Database schema
```

### Admin
```
src/pages/Admin.tsx                        # Admin dashboard
src/components/admin/ProductsAdmin.tsx     # Kelola produk
src/components/admin/ContactMessagesAdmin.tsx # Kelola pesan
src/components/admin/TestimonialsAdmin.tsx # Kelola testimoni
```

## 🎨 Customization

### Ganti Warna
```typescript
// tailwind.config.ts
colors: {
  primary: {
    DEFAULT: "hsl(24 100% 50%)", // Orange
  }
}
```

### Ganti Konten
```typescript
// src/pages/Kontak.tsx
const WHATSAPP_NUMBER = "6281234567890";
const EMAIL_ADDRESS = "info@optikavista.com";
const PHONE_NUMBER = "(021) 555-0123";
const ADDRESS = "Jl. Sudirman No. 123...";
const GOOGLE_MAPS_EMBED = "https://...";
```

### Ganti Logo
```typescript
// src/components/Navbar.tsx
<span>OptikaVista</span> // Ganti nama
// atau
<img src="/logo.png" alt="Logo" />
```

## 🔧 Troubleshooting

### Data tidak muncul
```bash
# 1. Cek console browser (F12)
# 2. Cek .env file
# 3. Restart server
npm run dev
```

### Build error
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Upload gambar gagal
```sql
-- Cek bucket exists
SELECT * FROM storage.buckets WHERE name = 'product-images';

-- Buat bucket jika belum ada
INSERT INTO storage.buckets (id, name, public)
VALUES ('product-images', 'product-images', true);
```

## 📊 Supabase Quick Access

### Dashboard URLs
```
https://supabase.com/dashboard
Project > Table Editor    # Lihat data
Project > SQL Editor       # Run SQL
Project > Storage          # Manage files
Project > Settings > API   # Get API keys
```

### Common SQL
```sql
-- Lihat semua produk
SELECT * FROM products ORDER BY created_at DESC;

-- Tambah produk
INSERT INTO products (name, price, category, description)
VALUES ('Produk Baru', 'Rp 1.000.000', 'Frame', 'Deskripsi');

-- Update produk
UPDATE products SET price = 'Rp 1.500.000' WHERE id = 'xxx';

-- Hapus produk
DELETE FROM products WHERE id = 'xxx';

-- Lihat pesan baru
SELECT * FROM contact_messages WHERE status = 'unread';

-- Update status pesan
UPDATE contact_messages SET status = 'read' WHERE id = 'xxx';
```

## 🔐 Environment Variables

```env
# .env (Development)
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Vercel/Netlify (Production)
# Set di Dashboard > Settings > Environment Variables
```

## 📱 Admin Dashboard Quick Guide

### Tambah Produk
1. `/admin` > Tab "Produk"
2. Klik "Tambah Produk"
3. Isi form
4. Upload gambar atau paste URL
5. Simpan

### Lihat Pesan
1. `/admin` > Tab "Pesan"
2. Lihat semua pesan
3. Klik "Tandai Dibaca"
4. Klik "Balas via Email"

### Tambah Testimoni
1. `/admin` > Tab "Testimoni"
2. Klik "Tambah Testimoni"
3. Isi nama, rating, teks
4. Simpan

## 🚀 Deploy Checklist

```bash
# 1. Build locally
npm run build

# 2. Test preview
npm run preview

# 3. Push to GitHub
git add .
git commit -m "Ready to deploy"
git push

# 4. Deploy to Vercel
# - Import repository
# - Set environment variables
# - Deploy

# 5. Test production
# - Open production URL
# - Test all features
# - Check mobile
```

## 📚 Documentation Files

```
README.md                          # Project overview
SELESAI_BACA_INI.md               # Start here! ⭐
PANDUAN_EDIT_KONTEN.md            # Edit content
PANDUAN_SUPABASE.md               # Database setup
PANDUAN_DEPLOYMENT.md             # Deploy guide
CARA_AKSES_ADMIN.md               # Admin guide
RINGKASAN_FITUR_LENGKAP.md        # All features
CHECKLIST_TESTING.md              # Testing guide
QUICK_REFERENCE.md                # This file
```

## 🎯 Common Tasks

### Task: Tambah Produk Baru
```
1. Login ke /admin
2. Tab "Produk" > "Tambah Produk"
3. Isi data & upload gambar
4. Simpan
```

### Task: Ganti Nomor WhatsApp
```
1. Edit src/pages/Kontak.tsx
2. Ganti WHATSAPP_NUMBER
3. Save & refresh
```

### Task: Ganti Google Maps
```
1. Buka Google Maps
2. Cari lokasi > Share > Embed
3. Copy URL
4. Paste di GOOGLE_MAPS_EMBED
```

### Task: Backup Database
```
1. Supabase Dashboard
2. Database > Backups
3. Download backup
```

### Task: Update Warna Tema
```
1. Edit tailwind.config.ts
2. Ganti primary color
3. Restart dev server
```

## 🆘 Emergency Contacts

```
Supabase Support: https://supabase.com/support
Vercel Support: https://vercel.com/support
GitHub Issues: [Your Repo]/issues
```

## 💡 Pro Tips

1. **Bookmark `/admin`** - Quick access
2. **Use Incognito** - Test tanpa cache
3. **F12 Console** - Debug errors
4. **Ctrl+Shift+R** - Hard refresh
5. **Mobile View** - F12 > Toggle device
6. **Backup Weekly** - Export database
7. **Test Before Deploy** - npm run build
8. **Monitor Logs** - Supabase Dashboard
9. **Update Regular** - npm update
10. **Read Docs** - When stuck

## 📞 Quick Help

**Problem:** Website blank
**Solution:** Check console (F12), check .env, restart server

**Problem:** Data tidak muncul
**Solution:** Check Supabase connection, check RLS policies

**Problem:** Upload gagal
**Solution:** Check storage bucket, check policies

**Problem:** Build error
**Solution:** Delete node_modules, npm install, npm run build

---

**Keep this file handy for quick reference! 📌**
