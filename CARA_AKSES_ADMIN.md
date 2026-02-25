# 🔐 Cara Akses Admin Dashboard

## 📍 URL Admin Dashboard

```
http://localhost:5173/admin          (Development)
https://optikavista.vercel.app/admin (Production)
```

## 🚀 Quick Access

### Development (Local)
1. Jalankan server: `npm run dev`
2. Buka browser: `http://localhost:5173/admin`
3. Langsung bisa akses (belum ada login)

### Production (Online)
1. Buka: `https://your-domain.com/admin`
2. Langsung bisa akses (belum ada login)

---

## ⚠️ PENTING: Keamanan Admin

Saat ini admin dashboard **TIDAK ADA PROTEKSI LOGIN**.

Siapa saja yang tahu URL `/admin` bisa mengakses!

### Solusi Keamanan:

#### Opsi 1: Sembunyikan Link (Temporary)
- Jangan share URL `/admin` ke publik
- Hanya admin yang tahu URL ini
- Bookmark URL admin di browser

#### Opsi 2: Tambah Authentication (Recommended)

Implementasi login dengan Supabase Auth:

```bash
npm install @supabase/auth-ui-react
```

Buat halaman login di `src/pages/Login.tsx`:

```typescript
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate('/admin');
      }
    });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
        />
      </div>
    </div>
  );
};

export default Login;
```

Protect admin route di `src/App.tsx`:

```typescript
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!session) return <Navigate to="/login" />;
  
  return <>{children}</>;
};

// Di Routes:
<Route path="/login" element={<Login />} />
<Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
```

#### Opsi 3: Password Protection Sederhana

Tambah password check di `src/pages/Admin.tsx`:

```typescript
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  const ADMIN_PASSWORD = 'admin123'; // Ganti dengan password Anda

  useEffect(() => {
    // Cek localStorage
    const auth = localStorage.getItem('admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('admin_auth', 'true');
    } else {
      alert('Password salah!');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-md w-full p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className="w-full">Login</Button>
          </form>
        </div>
      </div>
    );
  }

  // Rest of admin dashboard code...
};
```

#### Opsi 4: IP Whitelist (Advanced)

Batasi akses hanya dari IP tertentu menggunakan middleware di hosting.

---

## 📱 Fitur Admin Dashboard

### Tab 1: Kelola Produk
- ✅ Lihat semua produk
- ✅ Tambah produk baru
- ✅ Edit produk existing
- ✅ Hapus produk
- ✅ Upload gambar produk

**Cara Tambah Produk:**
1. Klik tombol "Tambah Produk"
2. Isi form:
   - Nama produk
   - Harga (format: Rp 2.500.000)
   - Kategori (Frame/Sunglasses/Lensa)
   - Deskripsi
   - Upload gambar atau paste URL
3. Klik "Tambah Produk"

**Cara Upload Gambar:**
- Klik area upload atau drag & drop
- Atau paste URL gambar eksternal
- Preview akan muncul sebelum save

### Tab 2: Kelola Pesan
- ✅ Lihat semua pesan kontak
- ✅ Status pesan (Belum Dibaca/Sudah Dibaca/Dibalas)
- ✅ Update status
- ✅ Balas via email
- ✅ Hapus pesan

**Cara Balas Pesan:**
1. Klik "Balas via Email"
2. Email client akan terbuka
3. Tulis balasan dan kirim

**Cara Update Status:**
1. Klik "Tandai Dibaca" untuk pesan baru
2. Klik "Tandai Dibalas" setelah membalas

### Tab 3: Kelola Testimoni
- ✅ Lihat semua testimoni
- ✅ Tambah testimoni baru
- ✅ Hapus testimoni

**Cara Tambah Testimoni:**
1. Klik "Tambah Testimoni"
2. Isi:
   - Nama pelanggan
   - Rating (1-5 bintang)
   - Testimoni
3. Klik "Tambah Testimoni"

---

## 🔑 Kredensial Default

### Jika Menggunakan Supabase Auth:

**Email**: admin@optikavista.com
**Password**: (buat di Supabase Dashboard)

Cara buat user admin:
1. Buka Supabase Dashboard
2. Authentication > Users
3. Klik "Add user"
4. Isi email & password
5. Confirm email (atau disable email confirmation)

### Jika Menggunakan Password Sederhana:

**Password**: admin123 (ganti di code)

---

## 🛡️ Best Practices Keamanan

### DO ✅
- Gunakan password yang kuat
- Enable 2FA jika menggunakan Supabase Auth
- Jangan share kredensial
- Logout setelah selesai
- Gunakan HTTPS di production
- Backup database secara berkala

### DON'T ❌
- Jangan hardcode password di code (production)
- Jangan share URL admin ke publik
- Jangan gunakan password default
- Jangan akses admin dari WiFi publik
- Jangan simpan password di browser (public computer)

---

## 📊 Monitoring Admin Activity

### Cara Lihat Log Activity:

Di Supabase Dashboard:
1. Logs > Postgres Logs
2. Filter by table (products, testimonials, contact_messages)
3. Lihat INSERT, UPDATE, DELETE operations

### Setup Email Notifications (Opsional):

Buat trigger di Supabase untuk kirim email saat ada:
- Produk baru ditambahkan
- Pesan kontak masuk
- Testimoni baru

---

## 🔄 Backup & Restore

### Backup Database:

```bash
# Via Supabase CLI
supabase db dump -f backup.sql

# Via Dashboard
# Database > Backups > Download
```

### Restore Database:

```bash
# Via Supabase CLI
supabase db reset
psql -h db.xxx.supabase.co -U postgres -d postgres -f backup.sql
```

---

## 📱 Mobile Access

Admin dashboard responsive dan bisa diakses dari:
- ✅ Desktop/Laptop
- ✅ Tablet
- ✅ Smartphone

**Tips Mobile:**
- Gunakan landscape mode untuk tablet
- Swipe untuk navigasi tabs
- Pinch to zoom untuk detail

---

## 🆘 Troubleshooting

### Tidak Bisa Akses Admin
1. Cek URL benar: `/admin` (bukan `/Admin`)
2. Cek server running: `npm run dev`
3. Clear browser cache
4. Coba incognito mode

### Tidak Bisa Upload Gambar
1. Cek Supabase Storage bucket exists
2. Cek bucket public
3. Cek file size < 5MB
4. Cek format file (PNG, JPG, WEBP)

### Data Tidak Muncul
1. Cek Supabase connection
2. Cek RLS policies
3. Cek browser console untuk error
4. Refresh halaman

### Logout Tidak Berfungsi
1. Clear localStorage: `localStorage.clear()`
2. Clear cookies
3. Restart browser

---

## 📞 Butuh Bantuan?

Jika ada masalah dengan admin dashboard:
1. Cek browser console (F12)
2. Cek Supabase logs
3. Cek dokumentasi
4. Tanyakan dengan detail error

---

## ✅ Checklist Admin

### Setup Awal:
- [ ] Akses `/admin` berhasil
- [ ] Semua tab bisa dibuka
- [ ] Bisa tambah produk
- [ ] Bisa upload gambar
- [ ] Bisa lihat pesan
- [ ] Bisa tambah testimoni

### Keamanan:
- [ ] Ganti password default
- [ ] Jangan share URL admin
- [ ] Enable authentication (production)
- [ ] Backup database
- [ ] Test di mobile

### Maintenance:
- [ ] Cek pesan kontak rutin
- [ ] Update produk berkala
- [ ] Hapus pesan lama
- [ ] Monitor storage usage

---

**Happy managing! 🎉**
