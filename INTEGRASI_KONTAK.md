# Panduan Integrasi Kontak OptikaVista

## Fitur yang Ditambahkan

### 1. Integrasi WhatsApp
- Tombol "Chat via WhatsApp" untuk menghubungi langsung via WhatsApp
- Pesan otomatis sudah disiapkan untuk memudahkan pelanggan

### 2. Integrasi Email
- Form kontak akan membuka email client default pengguna
- Data form otomatis terisi di email (nama, email, pesan)
- Alternatif: Bisa diintegrasikan dengan EmailJS atau backend API

### 3. Google Maps
- Peta interaktif menampilkan lokasi toko
- Klik pada alamat akan membuka Google Maps di tab baru

### 4. Klik untuk Aksi
- Klik nomor telepon → Membuka dialer
- Klik email → Membuka email client
- Klik alamat → Membuka Google Maps

## Konfigurasi yang Perlu Dilakukan

### 1. Nomor WhatsApp
Buka file `src/pages/Kontak.tsx` dan ubah:
```typescript
const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor Anda
```
Format: 62 (kode negara Indonesia) + nomor tanpa 0 di depan
Contoh: 081234567890 → 6281234567890

### 2. Google Maps Embed URL

#### Cara Mendapatkan Embed URL:
1. Buka [Google Maps](https://www.google.com/maps)
2. Cari lokasi toko Anda
3. Klik tombol "Share" atau "Bagikan"
4. Pilih tab "Embed a map" atau "Sematkan peta"
5. Salin kode iframe, ambil URL dari atribut `src`
6. Paste di file `src/pages/Kontak.tsx`:

```typescript
const GOOGLE_MAPS_EMBED = "URL_EMBED_ANDA_DI_SINI";
```

Contoh URL embed yang benar:
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.84513167499243!3d-6.208763393780856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonas!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid
```

### 3. Informasi Kontak Lainnya
Ubah konstanta berikut sesuai data toko Anda:
```typescript
const EMAIL_ADDRESS = "info@optikavista.com";
const PHONE_NUMBER = "(021) 555-0123";
const ADDRESS = "Jl. Sudirman No. 123, Jakarta Selatan 12190";
```

## Opsi Integrasi Email Lanjutan

### Menggunakan EmailJS (Recommended)

Jika ingin email terkirim otomatis tanpa membuka email client:

1. Daftar di [EmailJS](https://www.emailjs.com/)
2. Install package:
```bash
npm install @emailjs/browser
```

3. Ganti fungsi `handleSubmit` dengan:
```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: form.nama,
        from_email: form.email,
        message: form.pesan,
      },
      'YOUR_PUBLIC_KEY'
    );
    
    toast({ 
      title: "Pesan Terkirim!", 
      description: "Kami akan menghubungi Anda segera." 
    });
    setForm({ nama: "", email: "", pesan: "" });
  } catch (error) {
    toast({ 
      title: "Gagal Mengirim", 
      description: "Silakan coba lagi atau hubungi via WhatsApp.",
      variant: "destructive"
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

## Testing

### Test WhatsApp:
1. Klik tombol "Chat via WhatsApp"
2. Pastikan membuka WhatsApp Web/App dengan nomor yang benar

### Test Email:
1. Isi form dan klik "Kirim via Email"
2. Email client default akan terbuka dengan data terisi

### Test Google Maps:
1. Pastikan peta muncul di halaman
2. Klik alamat untuk membuka di Google Maps

### Test Telepon:
1. Klik nomor telepon
2. Pada mobile: akan membuka dialer
3. Pada desktop: akan menawarkan aplikasi yang bisa handle tel: protocol

## Troubleshooting

### Peta tidak muncul:
- Pastikan URL embed sudah benar
- Cek console browser untuk error
- Pastikan tidak ada ad-blocker yang memblokir iframe

### WhatsApp tidak terbuka:
- Pastikan format nomor benar (62xxx)
- Test di mobile dan desktop
- Pastikan WhatsApp terinstall

### Email tidak terbuka:
- Pastikan user memiliki email client default
- Alternatif: gunakan EmailJS untuk pengalaman lebih baik

## Keamanan

- Jangan expose API keys di frontend
- Untuk production, gunakan environment variables
- Pertimbangkan rate limiting untuk form submission
- Validasi input di backend jika menggunakan API

## Fitur Tambahan yang Bisa Ditambahkan

1. **reCAPTCHA** - Mencegah spam
2. **Form validation** - Validasi lebih detail
3. **Multiple locations** - Jika ada beberapa cabang
4. **Live chat widget** - Tawk.to, Crisp, dll
5. **Booking system** - Integrasi dengan kalender
