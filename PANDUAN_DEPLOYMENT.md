# 🚀 Panduan Deploy Website OptikaVista

## Pilihan Platform Hosting

### 1. Vercel (Recommended) ⭐
- **Gratis** untuk personal projects
- **Otomatis** deploy dari GitHub
- **Cepat** dan mudah setup
- **Custom domain** gratis

### 2. Netlify
- Gratis dengan fitur lengkap
- Drag & drop deployment
- Form handling built-in

### 3. GitHub Pages
- Gratis untuk public repository
- Langsung dari GitHub

---

## 🎯 Deploy ke Vercel (Paling Mudah)

### Persiapan

1. **Push code ke GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/optikavista.git
git push -u origin main
```

2. **Pastikan file `.env` tidak ter-commit**
   - Sudah ada di `.gitignore`
   - Jangan hapus file `.env.example`

### Langkah Deploy

#### A. Via Vercel Dashboard (Mudah)

1. **Buat Akun Vercel**
   - Kunjungi [vercel.com](https://vercel.com)
   - Sign up dengan GitHub

2. **Import Project**
   - Klik "Add New Project"
   - Pilih repository GitHub Anda
   - Klik "Import"

3. **Configure Project**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Environment Variables**
   Tambahkan di Vercel Dashboard:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

5. **Deploy**
   - Klik "Deploy"
   - Tunggu 2-3 menit
   - Website online! 🎉

#### B. Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? optikavista
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

---

## 🌐 Deploy ke Netlify

### Via Netlify Dashboard

1. **Buat Akun**
   - Kunjungi [netlify.com](https://netlify.com)
   - Sign up dengan GitHub

2. **New Site from Git**
   - Klik "Add new site" > "Import an existing project"
   - Pilih GitHub
   - Pilih repository

3. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

4. **Environment Variables**
   - Site settings > Environment variables
   - Tambahkan:
     ```
     VITE_SUPABASE_URL=your-url
     VITE_SUPABASE_ANON_KEY=your-key
     ```

5. **Deploy**
   - Klik "Deploy site"
   - Website online!

### Via Netlify CLI

```bash
# Install
npm install -g netlify-cli

# Login
netlify login

# Build
npm run build

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

---

## 📦 Deploy ke GitHub Pages

### Setup

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json**
```json
{
  "homepage": "https://username.github.io/optikavista",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.ts**
```typescript
export default defineConfig({
  base: '/optikavista/', // nama repository
  plugins: [react()],
})
```

4. **Deploy**
```bash
npm run deploy
```

5. **Enable GitHub Pages**
   - Repository Settings > Pages
   - Source: gh-pages branch
   - Save

**Note**: Environment variables harus di-hardcode atau gunakan GitHub Secrets

---

## 🔧 Build untuk Production

### Test Build Locally

```bash
# Build
npm run build

# Preview
npm run preview
```

### Optimasi Build

1. **Compress Images**
   - Gunakan TinyPNG atau ImageOptim
   - Target: < 500KB per gambar

2. **Check Bundle Size**
```bash
npm run build
# Lihat output size di terminal
```

3. **Environment Check**
   - Pastikan `.env` tidak ter-commit
   - Gunakan environment variables di hosting

---

## 🌍 Custom Domain

### Vercel

1. **Beli Domain** (Namecheap, GoDaddy, dll)
2. **Vercel Dashboard**
   - Project Settings > Domains
   - Add domain: `optikavista.com`
3. **Update DNS**
   - Tambahkan CNAME record:
     ```
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     ```
   - Tambahkan A record:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     ```

### Netlify

1. **Netlify Dashboard**
   - Domain settings > Add custom domain
2. **Update DNS**
   - Ikuti instruksi Netlify
   - Biasanya update nameservers

---

## 🔐 Setup Supabase untuk Production

### 1. Update RLS Policies

Pastikan policies sudah benar untuk production:

```sql
-- Cek policies
SELECT * FROM pg_policies WHERE tablename = 'products';

-- Pastikan public bisa read
CREATE POLICY "Public dapat melihat produk" ON products
  FOR SELECT USING (true);
```

### 2. Enable Email Confirmations (Opsional)

Jika menggunakan auth:
- Supabase Dashboard > Authentication > Settings
- Enable "Enable email confirmations"

### 3. Setup Storage Bucket

```sql
-- Pastikan bucket public
UPDATE storage.buckets 
SET public = true 
WHERE name = 'product-images';
```

### 4. CORS Settings

Tambahkan domain production ke allowed origins:
- Supabase Dashboard > Settings > API
- Allowed origins: `https://optikavista.vercel.app`

---

## 📊 Monitoring & Analytics

### Google Analytics (Opsional)

1. **Buat GA4 Property**
   - [analytics.google.com](https://analytics.google.com)

2. **Install Package**
```bash
npm install react-ga4
```

3. **Setup di App.tsx**
```typescript
import ReactGA from 'react-ga4';

ReactGA.initialize('G-XXXXXXXXXX');

// Track pageviews
useEffect(() => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
}, []);
```

### Vercel Analytics

- Gratis untuk Vercel users
- Enable di Project Settings > Analytics

---

## ✅ Checklist Deployment

### Pre-Deploy
- [ ] Test build locally (`npm run build`)
- [ ] Test preview (`npm run preview`)
- [ ] Cek semua environment variables
- [ ] Pastikan `.env` di `.gitignore`
- [ ] Push code ke GitHub
- [ ] Test Supabase connection

### Deploy
- [ ] Deploy ke hosting pilihan
- [ ] Set environment variables di hosting
- [ ] Test website di URL production
- [ ] Test semua fitur (produk, kontak, admin)
- [ ] Test di mobile & desktop

### Post-Deploy
- [ ] Setup custom domain (opsional)
- [ ] Enable HTTPS (otomatis di Vercel/Netlify)
- [ ] Setup analytics (opsional)
- [ ] Test performance (PageSpeed Insights)
- [ ] Backup database Supabase

---

## 🐛 Troubleshooting

### Build Failed

**Error: "Module not found"**
```bash
# Clear cache dan reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error: "Environment variable not defined"**
- Cek environment variables di hosting dashboard
- Pastikan prefix `VITE_` ada

### Website Blank/White Screen

1. **Cek Console Browser** (F12)
2. **Cek Base URL** di `vite.config.ts`
3. **Cek Environment Variables**

### Supabase Connection Failed

1. **Cek API Keys** di hosting
2. **Cek CORS** di Supabase
3. **Cek RLS Policies**

### Images Not Loading

1. **Cek Storage Bucket** public
2. **Cek Image URLs** valid
3. **Cek CORS** settings

---

## 🔄 Auto Deploy

### Vercel/Netlify

Otomatis deploy setiap push ke GitHub:

```bash
# Push changes
git add .
git commit -m "Update content"
git push

# Vercel/Netlify akan auto-deploy
```

### Manual Deploy

```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod
```

---

## 📱 PWA (Progressive Web App) - Opsional

Buat website bisa diinstall seperti app:

```bash
npm install vite-plugin-pwa -D
```

Update `vite.config.ts`:
```typescript
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'OptikaVista',
        short_name: 'OptikaVista',
        description: 'Toko Kacamata Terpercaya',
        theme_color: '#ff6b35',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
```

---

## 🎉 Selesai!

Website Anda sekarang online dan bisa diakses publik!

**URL Production**: `https://optikavista.vercel.app`

### Next Steps:
1. Share link ke teman/klien
2. Submit ke Google Search Console
3. Setup Google My Business
4. Promosi di social media

---

## 📞 Butuh Bantuan?

Jika ada masalah saat deployment:
1. Cek error message di build logs
2. Cek browser console (F12)
3. Tanyakan dengan menyertakan error message lengkap

Happy deploying! 🚀
