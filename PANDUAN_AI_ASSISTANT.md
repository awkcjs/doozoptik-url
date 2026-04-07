# 🤖 Panduan AI Assistant - Dooz Optik

## ✅ AI Assistant Sudah Terpasang!

Chatbot AI sudah aktif di website Anda dan siap menjawab pertanyaan pelanggan.

---

## 🎯 Fitur AI Assistant

### 1. **Otomatis Menjawab Pertanyaan**
Bot bisa menjawab pertanyaan tentang:
- ✅ Jam operasional
- ✅ Lokasi & alamat
- ✅ Kontak (telepon, WhatsApp, email)
- ✅ Produk & harga
- ✅ Layanan
- ✅ Pemeriksaan mata
- ✅ Garansi
- ✅ Brand yang tersedia
- ✅ Cara booking

### 2. **Tampilan Modern**
- Icon chat melayang di kanan bawah
- Window chat yang responsif
- Animasi typing
- Timestamp setiap pesan

### 3. **User Friendly**
- Mudah digunakan
- Responsif di mobile & desktop
- Bisa minimize/maximize
- Enter untuk kirim pesan

---

## 📍 Lokasi File

**File:** `src/components/ChatBot.tsx`

Bot sudah otomatis muncul di **semua halaman** karena ditambahkan ke Layout.

---

## 🎨 Cara Kerja

### 1. Icon Chat
- Muncul di kanan bawah halaman
- Klik untuk membuka chat window

### 2. Chat Window
- Header: Nama bot & status
- Body: Percakapan
- Footer: Input pesan

### 3. Knowledge Base
Bot menggunakan keyword matching untuk menjawab:
```tsx
if (msg.includes("jam") || msg.includes("buka")) {
  return "Kami buka setiap hari...";
}
```

---

## ✏️ Cara Edit Jawaban Bot

### File: `src/components/ChatBot.tsx`

Cari fungsi `getResponse` (sekitar baris 35):

```tsx
const getResponse = (userMessage: string): string => {
  const msg = userMessage.toLowerCase();

  // Tambah atau edit jawaban di sini
  if (msg.includes("keyword")) {
    return "Jawaban bot";
  }
}
```

### Contoh Menambah Jawaban Baru:

```tsx
// Promo
if (msg.includes("promo") || msg.includes("diskon") || msg.includes("sale")) {
  return "🎉 Promo bulan ini:\n• Diskon 20% untuk frame pilihan\n• Gratis lensa anti-radiasi\n• Cashback 10% untuk pembelian di atas 1 juta\n\nKunjungi toko kami sekarang!";
}
```

---

## 🎯 Contoh Pertanyaan yang Bisa Dijawab

### Jam Operasional:
- "Jam berapa buka?"
- "Kapan tutup?"
- "Jam operasional?"

**Jawaban:**
```
Kami buka setiap hari:
📅 Senin - Ahad
🕐 Pukul 08:00 - 21:00 WIB

Kami siap melayani Anda!
```

### Lokasi:
- "Dimana lokasinya?"
- "Alamat toko?"
- "Di mana?"

**Jawaban:**
```
📍 Alamat kami:
Jl. Pandanaran No. 252D, Boyolali, Jawa Tengah 57313

Anda bisa klik menu Kontak untuk melihat peta lokasi kami.
```

### Kontak:
- "Nomor telepon?"
- "WhatsApp?"
- "Kontak?"

**Jawaban:**
```
📞 Hubungi kami:
• Telepon: (0276) 3287286
• WhatsApp: 0811-2640-770
• Email: info@doozoptik.com

Silakan hubungi kami kapan saja!
```

### Produk:
- "Produk apa saja?"
- "Jual kacamata?"
- "Ada frame?"

**Jawaban:**
```
🕶️ Kami menyediakan:
• Frame kacamata premium
• Kacamata hitam (sunglasses)
• Lensa berkualitas tinggi
• Lensa kontak

Klik menu Produk untuk melihat katalog lengkap kami!
```

---

## 🎨 Cara Kustomisasi

### 1. Ubah Nama Bot

**Lokasi:** Baris 95

```tsx
<CardTitle className="text-lg">Dooz Assistant</CardTitle>
```

Ganti dengan nama yang Anda inginkan.

### 2. Ubah Pesan Pembuka

**Lokasi:** Baris 18-24

```tsx
{
  id: "1",
  text: "Halo! Selamat datang di Dooz Optik Boyolali. Ada yang bisa saya bantu?",
  sender: "bot",
  timestamp: new Date(),
}
```

### 3. Ubah Warna

Bot menggunakan warna dari theme (primary color).
Untuk ubah warna, edit `tailwind.config.ts`.

### 4. Ubah Posisi Icon

**Lokasi:** Baris 138

```tsx
className="fixed bottom-6 right-6 ..."
```

Ubah `bottom-6` dan `right-6` untuk posisi berbeda:
- `bottom-6 left-6` → Kiri bawah
- `top-6 right-6` → Kanan atas

---

## 🚀 Fitur Lanjutan (Opsional)

### 1. Integrasi dengan API AI

Untuk jawaban lebih pintar, integrasikan dengan:
- OpenAI GPT
- Google Dialogflow
- Rasa
- Botpress

### 2. Simpan Percakapan

Simpan chat history ke database:
```tsx
const saveMessage = async (message: Message) => {
  await supabase.from('chat_logs').insert([message]);
};
```

### 3. Notifikasi Admin

Kirim notifikasi ke admin saat ada chat baru:
```tsx
const notifyAdmin = async (message: string) => {
  // Send to WhatsApp API or Email
};
```

### 4. Analytics

Track pertanyaan yang sering ditanya:
```tsx
const trackQuestion = (question: string) => {
  // Log to analytics
};
```

---

## 📱 Tampilan

### Desktop:
- Icon chat di kanan bawah
- Window chat 400px x 600px
- Smooth animations

### Mobile:
- Responsive
- Full width di layar kecil
- Touch-friendly

---

## 🎯 Tips Menggunakan Bot

### Untuk Pelanggan:
1. Klik icon chat di kanan bawah
2. Ketik pertanyaan
3. Tekan Enter atau klik tombol kirim
4. Bot akan menjawab otomatis

### Untuk Admin:
1. Monitor pertanyaan yang sering ditanya
2. Update jawaban bot secara berkala
3. Tambah keyword baru sesuai kebutuhan
4. Test bot secara rutin

---

## 🔧 Troubleshooting

### Bot Tidak Muncul
- Refresh browser (`Ctrl + Shift + R`)
- Cek console browser (F12) untuk error
- Pastikan file `ChatBot.tsx` ada
- Pastikan sudah ditambahkan ke `Layout.tsx`

### Bot Tidak Menjawab
- Cek keyword di fungsi `getResponse`
- Pastikan keyword match dengan pertanyaan
- Tambah lebih banyak keyword variations

### Jawaban Salah
- Edit jawaban di fungsi `getResponse`
- Update knowledge base
- Test dengan berbagai pertanyaan

---

## 📋 Checklist

- [x] ChatBot component dibuat
- [x] Ditambahkan ke Layout
- [x] Knowledge base diisi
- [x] Styling disesuaikan
- [ ] Test di berbagai browser
- [ ] Test di mobile
- [ ] Update jawaban sesuai kebutuhan
- [ ] Monitor feedback pelanggan

---

## 💡 Ide Pengembangan

### 1. Quick Replies
Tambah tombol quick reply:
```tsx
<div className="flex gap-2 flex-wrap">
  <Button size="sm" onClick={() => handleQuickReply("Jam buka?")}>
    Jam Buka?
  </Button>
  <Button size="sm" onClick={() => handleQuickReply("Lokasi?")}>
    Lokasi?
  </Button>
</div>
```

### 2. Rich Messages
Tambah gambar, link, atau card:
```tsx
<div className="space-y-2">
  <img src="/images/promo.jpg" alt="Promo" />
  <p>Promo spesial bulan ini!</p>
  <Button>Lihat Detail</Button>
</div>
```

### 3. Multi-language
Support bahasa Inggris:
```tsx
const getResponse = (msg: string, lang: string) => {
  if (lang === "en") {
    return "We are open daily from 8 AM to 9 PM";
  }
  return "Kami buka setiap hari pukul 08:00 - 21:00";
};
```

### 4. Voice Input
Tambah fitur voice:
```tsx
const handleVoiceInput = () => {
  const recognition = new webkitSpeechRecognition();
  recognition.start();
  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setInputMessage(transcript);
  };
};
```

---

## 🎓 Cara Melatih Bot

### 1. Kumpulkan Pertanyaan
Monitor pertanyaan yang sering ditanya pelanggan

### 2. Tambah Keyword
Tambah variations keyword untuk setiap topik

### 3. Update Jawaban
Perbaiki jawaban yang kurang jelas

### 4. Test Berkala
Test bot dengan berbagai pertanyaan

---

## 📞 Support

Jika butuh bantuan:
1. Cek file `ChatBot.tsx`
2. Lihat console browser untuk error
3. Test dengan pertanyaan sederhana dulu
4. Tanyakan jika ada masalah

---

AI Assistant Dooz Optik siap membantu pelanggan Anda 24/7! 🤖✨

**Test sekarang:** Refresh browser dan klik icon chat di kanan bawah!
