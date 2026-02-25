# OptikaVista - Website Toko Kacamata Modern

Website e-commerce modern untuk toko kacamata dengan admin dashboard dan integrasi Supabase.

![OptikaVista](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)
![Supabase](https://img.shields.io/badge/Supabase-Integrated-green)

## ✨ Fitur Utama

### 🏪 Halaman Publik
- **Beranda** - Hero section, produk unggulan, testimoni
- **Katalog Produk** - Filter kategori, search, gambar produk
- **Tentang Kami** - Profil perusahaan, tim, nilai-nilai
- **Layanan** - Detail layanan dan alur proses
- **Kontak** - Form kontak, WhatsApp, Google Maps, Email

### 🔐 Admin Dashboard
- **Kelola Produk** - CRUD produk dengan upload gambar
- **Kelola Pesan** - Lihat & balas pesan kontak
- **Kelola Testimoni** - Manage testimoni pelanggan

### 🗄️ Database & Storage
- Supabase PostgreSQL database
- Supabase Storage untuk gambar
- Row Level Security (RLS)
- Real-time ready

### 🎨 UI/UX
- Responsive design (mobile, tablet, desktop)
- Smooth animations (Framer Motion)
- Modern UI components (shadcn/ui)
- Loading states & error handling
- Toast notifications

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ dan npm
- Akun Supabase (gratis)

### Installation

1. **Clone repository**
```bash
git clone https://github.com/username/optikavista.git
cd optikavista
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup Supabase**
   - Buat project di [supabase.com](https://supabase.com)
   - Jalankan SQL dari `supabase-schema.sql` di SQL Editor
   - Copy API keys

4. **Configure environment**
```bash
# Copy .env.example ke .env
cp .env.example .env

# Edit .env dengan kredensial Supabase Anda
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. **Run development server**
```bash
npm run dev
```

6. **Open browser**
```
http://localhost:5173
```

## 📚 Dokumentasi

- **[PANDUAN_EDIT_KONTEN.md](PANDUAN_EDIT_KONTEN.md)** - Cara edit konten & gambar
- **[PANDUAN_SUPABASE.md](PANDUAN_SUPABASE.md)** - Setup Supabase lengkap
- **[PANDUAN_DEPLOYMENT.md](PANDUAN_DEPLOYMENT.md)** - Deploy ke production
- **[RINGKASAN_FITUR_LENGKAP.md](RINGKASAN_FITUR_LENGKAP.md)** - Daftar semua fitur

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Framer Motion** - Animations
- **React Router** - Routing
- **TanStack Query** - Data fetching

### Backend
- **Supabase** - Database & Auth
- **PostgreSQL** - Database
- **Supabase Storage** - File storage

## 📁 Project Structure

```
optikavista/
├── src/
│   ├── components/
│   │   ├── admin/          # Admin dashboard components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── hooks/              # Custom React hooks
│   │   ├── useProducts.ts
│   │   ├── useTestimonials.ts
│   │   └── useContact.ts
│   ├── lib/                # Utilities
│   │   ├── supabase.ts     # Supabase client
│   │   ├── storage.ts      # File upload utils
│   │   └── utils.ts
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Beranda
│   │   ├── Produk.tsx      # Katalog
│   │   ├── Tentang.tsx     # About
│   │   ├── Layanan.tsx     # Services
│   │   ├── Kontak.tsx      # Contact
│   │   └── Admin.tsx       # Admin dashboard
│   ├── App.tsx
│   └── main.tsx
├── public/                 # Static assets
├── supabase-schema.sql     # Database schema
└── package.json
```

## 🎯 Usage

### Untuk Pengunjung
1. Browse produk di `/produk`
2. Filter berdasarkan kategori atau search
3. Hubungi via form kontak, WhatsApp, atau email
4. Lihat informasi perusahaan di `/tentang`

### Untuk Admin
1. Akses admin dashboard di `/admin`
2. **Tab Produk**: Tambah, edit, hapus produk
3. **Tab Pesan**: Lihat & balas pesan kontak
4. **Tab Testimoni**: Kelola testimoni pelanggan

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Lint & Test
npm run lint         # Run ESLint
npm run test         # Run tests
```

### Environment Variables

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🚀 Deployment

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub
2. Import project di [vercel.com](https://vercel.com)
3. Set environment variables
4. Deploy!

Lihat [PANDUAN_DEPLOYMENT.md](PANDUAN_DEPLOYMENT.md) untuk detail lengkap.

### Deploy ke Netlify

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## 🔐 Security

- Environment variables tidak ter-commit (`.gitignore`)
- Row Level Security (RLS) enabled di Supabase
- Input validation & sanitization
- HTTPS enforced (via hosting)

## 📊 Database Schema

### Tables
- `products` - Produk kacamata
- `testimonials` - Testimoni pelanggan
- `contact_messages` - Pesan kontak
- `services` - Layanan (opsional)

### Storage
- `product-images` - Bucket untuk gambar produk

Lihat `supabase-schema.sql` untuk detail lengkap.

## 🎨 Customization

### Ganti Warna Tema
Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: "hsl(24 100% 50%)", // Ganti dengan warna Anda
  }
}
```

### Ganti Logo
1. Simpan logo di `public/images/logo.png`
2. Edit `src/components/Navbar.tsx`

### Edit Konten
Lihat [PANDUAN_EDIT_KONTEN.md](PANDUAN_EDIT_KONTEN.md)

## 🐛 Troubleshooting

### Build Failed
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Supabase Connection Error
- Cek environment variables
- Cek RLS policies di Supabase
- Cek CORS settings

Lihat dokumentasi untuk troubleshooting lengkap.

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:
- Baca dokumentasi di folder project
- Check [Issues](https://github.com/username/optikavista/issues)
- Email: info@optikavista.com

## 🙏 Acknowledgments

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Supabase](https://supabase.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)

---

Made with ❤️ for OptikaVista
