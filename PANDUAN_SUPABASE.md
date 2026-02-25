# Panduan Integrasi Supabase - OptikaVista

## 📋 Daftar Isi
1. [Setup Supabase](#setup-supabase)
2. [Konfigurasi Project](#konfigurasi-project)
3. [Install Dependencies](#install-dependencies)
4. [Setup Database](#setup-database)
5. [Testing](#testing)
6. [Troubleshooting](#troubleshooting)

---

## 🚀 Setup Supabase

### 1. Buat Akun Supabase
1. Kunjungi [https://supabase.com](https://supabase.com)
2. Klik "Start your project"
3. Sign up dengan GitHub atau email
4. Verifikasi email Anda

### 2. Buat Project Baru
1. Klik "New Project"
2. Isi informasi:
   - **Name**: OptikaVista (atau nama lain)
   - **Database Password**: Buat password yang kuat (SIMPAN INI!)
   - **Region**: Pilih yang terdekat (Southeast Asia - Singapore)
   - **Pricing Plan**: Free (cukup untuk development)
3. Klik "Create new project"
4. Tunggu 2-3 menit sampai project siap

### 3. Dapatkan API Keys
1. Setelah project siap, buka **Settings** (ikon gear di sidebar)
2. Pilih **API**
3. Salin informasi berikut:
   - **Project URL** (contoh: `https://xxxxx.supabase.co`)
   - **anon public** key (key yang panjang)

---

## ⚙️ Konfigurasi Project

### 1. Install Dependencies

Buka terminal di folder project dan jalankan:

```bash
npm install @supabase/supabase-js
```

Atau jika menggunakan yarn:
```bash
yarn add @supabase/supabase-js
```

### 2. Setup Environment Variables

1. Buka file `.env` di root project
2. Ganti dengan kredensial Supabase Anda:

```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx
```

**PENTING**: 
- Jangan commit file `.env` ke Git!
- File `.env` sudah ada di `.gitignore`
- Gunakan `.env.example` sebagai template

---

## 🗄️ Setup Database

### Metode 1: Menggunakan SQL Editor (Recommended)

1. Buka Supabase Dashboard
2. Pilih project Anda
3. Klik **SQL Editor** di sidebar
4. Klik **New Query**
5. Copy seluruh isi file `supabase-schema.sql`
6. Paste ke SQL Editor
7. Klik **Run** atau tekan `Ctrl+Enter`
8. Tunggu sampai selesai (akan muncul "Success")

### Metode 2: Menggunakan Table Editor (Manual)

#### A. Buat Tabel Products
1. Klik **Table Editor** di sidebar
2. Klik **New Table**
3. Isi:
   - **Name**: `products`
   - **Enable Row Level Security**: ✅ (centang)
4. Tambahkan kolom:

| Name | Type | Default Value | Primary | Nullable |
|------|------|---------------|---------|----------|
| id | uuid | gen_random_uuid() | ✅ | ❌ |
| name | varchar | - | ❌ | ❌ |
| price | varchar | - | ❌ | ❌ |
| category | varchar | - | ❌ | ❌ |
| description | text | - | ❌ | ✅ |
| image_url | text | - | ❌ | ✅ |
| created_at | timestamptz | now() | ❌ | ❌ |

5. Klik **Save**

#### B. Buat Tabel Testimonials
Ulangi langkah di atas dengan kolom:

| Name | Type | Default Value | Primary | Nullable |
|------|------|---------------|---------|----------|
| id | uuid | gen_random_uuid() | ✅ | ❌ |
| name | varchar | - | ❌ | ❌ |
| text | text | - | ❌ | ❌ |
| rating | int4 | - | ❌ | ❌ |
| created_at | timestamptz | now() | ❌ | ❌ |

#### C. Buat Tabel Contact Messages
| Name | Type | Default Value | Primary | Nullable |
|------|------|---------------|---------|----------|
| id | uuid | gen_random_uuid() | ✅ | ❌ |
| nama | varchar | - | ❌ | ❌ |
| email | varchar | - | ❌ | ❌ |
| pesan | text | - | ❌ | ❌ |
| status | varchar | 'unread' | ❌ | ❌ |
| created_at | timestamptz | now() | ❌ | ❌ |

### 3. Setup Row Level Security (RLS) Policies

Untuk setiap tabel, tambahkan policies:

#### Products Policies:
```sql
-- Public dapat melihat
CREATE POLICY "Public dapat melihat produk" ON products
  FOR SELECT USING (true);

-- Authenticated dapat insert/update/delete
CREATE POLICY "Authenticated dapat mengelola produk" ON products
  FOR ALL USING (auth.role() = 'authenticated');
```

#### Testimonials Policies:
```sql
CREATE POLICY "Public dapat melihat testimoni" ON testimonials
  FOR SELECT USING (true);

CREATE POLICY "Authenticated dapat menambah testimoni" ON testimonials
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');
```

#### Contact Messages Policies:
```sql
-- Public dapat kirim pesan
CREATE POLICY "Public dapat kirim pesan" ON contact_messages
  FOR INSERT WITH CHECK (true);

-- Authenticated dapat melihat pesan
CREATE POLICY "Authenticated dapat melihat pesan" ON contact_messages
  FOR SELECT USING (auth.role() = 'authenticated');
```

### 4. Insert Data Contoh

Buka SQL Editor dan jalankan:

```sql
-- Insert produk contoh
INSERT INTO products (name, price, category, description) VALUES
  ('Ray-Ban Aviator', 'Rp 2.500.000', 'Sunglasses', 'Frame metal klasik dengan lensa tinted'),
  ('Oakley Holbrook', 'Rp 1.800.000', 'Sunglasses', 'Frame sporty untuk aktivitas outdoor'),
  ('Tom Ford Classic', 'Rp 4.200.000', 'Frame', 'Desain elegan untuk tampilan premium');

-- Insert testimoni contoh
INSERT INTO testimonials (name, text, rating) VALUES
  ('Rina Wijaya', 'Pelayanan sangat ramah dan profesional!', 5),
  ('Budi Santoso', 'Pemeriksaan mata yang sangat detail.', 5);
```

---

## 🧪 Testing

### 1. Jalankan Development Server

```bash
npm run dev
```

### 2. Test Halaman Produk
1. Buka `http://localhost:5173/produk`
2. Produk harus muncul dari database
3. Coba filter kategori
4. Coba search produk

### 3. Test Halaman Kontak
1. Buka `http://localhost:5173/kontak`
2. Isi form kontak
3. Klik "Kirim via Email"
4. Pesan harus tersimpan di Supabase

### 4. Verifikasi di Supabase Dashboard
1. Buka **Table Editor**
2. Pilih tabel `contact_messages`
3. Pesan yang Anda kirim harus muncul di sini

---

## 📊 Melihat Data di Supabase

### Cara 1: Table Editor
1. Buka Supabase Dashboard
2. Klik **Table Editor**
3. Pilih tabel yang ingin dilihat
4. Data akan ditampilkan dalam bentuk tabel

### Cara 2: SQL Editor
```sql
-- Lihat semua produk
SELECT * FROM products;

-- Lihat produk berdasarkan kategori
SELECT * FROM products WHERE category = 'Frame';

-- Lihat pesan kontak terbaru
SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 10;

-- Lihat testimoni dengan rating tinggi
SELECT * FROM testimonials WHERE rating >= 4;
```

---

## 🖼️ Upload Gambar Produk (Opsional)

### 1. Buat Storage Bucket
1. Klik **Storage** di sidebar
2. Klik **New Bucket**
3. Isi:
   - **Name**: `product-images`
   - **Public bucket**: ✅ (centang)
4. Klik **Create bucket**

### 2. Upload Gambar
1. Klik bucket `product-images`
2. Klik **Upload file**
3. Pilih gambar produk
4. Setelah upload, klik gambar
5. Copy **Public URL**

### 3. Update Database
```sql
UPDATE products 
SET image_url = 'https://xxxxx.supabase.co/storage/v1/object/public/product-images/rayban.jpg'
WHERE name = 'Ray-Ban Aviator';
```

---

## 🔧 Troubleshooting

### Error: "Invalid API key"
- Pastikan `.env` sudah benar
- Restart development server (`Ctrl+C` lalu `npm run dev`)
- Cek apakah `VITE_` prefix ada di environment variables

### Error: "Failed to fetch"
- Cek koneksi internet
- Pastikan Supabase project aktif
- Cek Supabase Dashboard > Settings > API untuk status

### Data tidak muncul
- Cek apakah RLS policies sudah dibuat
- Cek di Table Editor apakah data ada
- Buka browser console (F12) untuk lihat error

### Error: "Row Level Security"
- Pastikan policies sudah dibuat dengan benar
- Untuk testing, bisa disable RLS sementara:
  ```sql
  ALTER TABLE products DISABLE ROW LEVEL SECURITY;
  ```
  (Jangan lupa enable lagi untuk production!)

### Gambar tidak muncul
- Pastikan bucket `product-images` adalah public
- Cek URL gambar di browser
- Pastikan format URL benar

---

## 📱 Fitur yang Sudah Terintegrasi

✅ **Halaman Produk**
- Fetch produk dari Supabase
- Filter berdasarkan kategori
- Search produk
- Loading state
- Fallback data jika Supabase belum setup

✅ **Halaman Kontak**
- Simpan pesan ke Supabase
- Fallback ke mailto jika gagal
- Toast notification

✅ **Hooks Custom**
- `useProducts()` - Fetch semua produk
- `useProductsByCategory()` - Filter produk
- `useTestimonials()` - Fetch testimoni
- `useSendContactMessage()` - Kirim pesan kontak

---

## 🚀 Next Steps

### 1. Tambah Fitur Admin Dashboard
Buat halaman admin untuk:
- Tambah/edit/hapus produk
- Lihat pesan kontak
- Kelola testimoni

### 2. Implementasi Authentication
```bash
npm install @supabase/auth-ui-react
```

### 3. Real-time Updates
Gunakan Supabase Realtime untuk update otomatis:
```typescript
supabase
  .channel('products')
  .on('postgres_changes', { event: '*', schema: 'public', table: 'products' }, 
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()
```

### 4. Upload Gambar dari Frontend
Implementasi upload gambar langsung dari form produk

---

## 📚 Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Storage](https://supabase.com/docs/guides/storage)

---

## 🆘 Butuh Bantuan?

Jika ada masalah atau pertanyaan:
1. Cek error di browser console (F12)
2. Cek Supabase logs di Dashboard
3. Tanyakan dengan detail error yang muncul

**Contoh pertanyaan yang baik:**
- "Error 'Failed to fetch' saat load produk, console menunjukkan..."
- "Bagaimana cara menambah kolom baru di tabel products?"
- "Pesan kontak tidak tersimpan, error: ..."
