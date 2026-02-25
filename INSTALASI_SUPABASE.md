# Instalasi Supabase - Quick Start

## 🚀 Langkah Cepat

### 1. Install Package Supabase

Buka terminal/command prompt di folder project ini, lalu jalankan salah satu command berikut:

**Menggunakan npm:**
```bash
npm install @supabase/supabase-js
```

**Menggunakan yarn:**
```bash
yarn add @supabase/supabase-js
```

**Menggunakan pnpm:**
```bash
pnpm add @supabase/supabase-js
```

### 2. Setup Environment Variables

1. Buka file `.env` di root project
2. Ganti dengan kredensial Supabase Anda:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. Setup Database

1. Login ke [Supabase Dashboard](https://supabase.com)
2. Buka project Anda
3. Klik **SQL Editor**
4. Copy isi file `supabase-schema.sql`
5. Paste dan klik **Run**

### 4. Test

```bash
npm run dev
```

Buka `http://localhost:5173/produk` - produk harus muncul dari database!

---

## 📖 Panduan Lengkap

Lihat file `PANDUAN_SUPABASE.md` untuk tutorial detail step-by-step.

---

## ⚠️ Troubleshooting PowerShell

Jika muncul error "running scripts is disabled", jalankan:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Atau gunakan Command Prompt (CMD) sebagai alternatif:
```cmd
npm install @supabase/supabase-js
```

---

## ✅ Checklist

- [ ] Install package `@supabase/supabase-js`
- [ ] Buat akun Supabase
- [ ] Buat project baru di Supabase
- [ ] Copy API keys ke file `.env`
- [ ] Jalankan SQL schema di Supabase
- [ ] Test di browser

---

## 🆘 Butuh Bantuan?

Jika ada error atau pertanyaan, tanyakan dengan detail error yang muncul!
