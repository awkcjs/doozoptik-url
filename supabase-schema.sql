-- ============================================
-- SUPABASE DATABASE SCHEMA untuk OptikaVista
-- ============================================

-- 1. Tabel Products (Produk)
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price VARCHAR(100) NOT NULL,
  category VARCHAR(50) NOT NULL CHECK (category IN ('Frame', 'Sunglasses', 'Lensa')),
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index untuk pencarian lebih cepat
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_name ON products(name);

-- 2. Tabel Testimonials (Testimoni)
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  text TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Tabel Contact Messages (Pesan Kontak)
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nama VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  pesan TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'replied')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index untuk filter status
CREATE INDEX idx_contact_status ON contact_messages(status);
CREATE INDEX idx_contact_created ON contact_messages(created_at DESC);

-- 4. Tabel Services (Layanan) - Opsional
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  icon VARCHAR(50),
  features JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Products: Public dapat membaca, hanya authenticated yang bisa menulis
CREATE POLICY "Public dapat melihat produk" ON products
  FOR SELECT USING (true);

CREATE POLICY "Authenticated dapat menambah produk" ON products
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated dapat update produk" ON products
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated dapat hapus produk" ON products
  FOR DELETE USING (auth.role() = 'authenticated');

-- Testimonials: Public dapat membaca, authenticated dapat menulis
CREATE POLICY "Public dapat melihat testimoni" ON testimonials
  FOR SELECT USING (true);

CREATE POLICY "Authenticated dapat menambah testimoni" ON testimonials
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Contact Messages: Public dapat insert, hanya authenticated yang bisa baca
CREATE POLICY "Public dapat kirim pesan" ON contact_messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated dapat melihat pesan" ON contact_messages
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated dapat update status pesan" ON contact_messages
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Services: Public dapat membaca, authenticated dapat menulis
CREATE POLICY "Public dapat melihat layanan" ON services
  FOR SELECT USING (true);

CREATE POLICY "Authenticated dapat mengelola layanan" ON services
  FOR ALL USING (auth.role() = 'authenticated');

-- ============================================
-- SAMPLE DATA (Data Contoh)
-- ============================================

-- Insert sample products
INSERT INTO products (name, price, category, description) VALUES
  ('Ray-Ban Aviator', 'Rp 2.500.000', 'Sunglasses', 'Frame metal klasik dengan lensa tinted'),
  ('Oakley Holbrook', 'Rp 1.800.000', 'Sunglasses', 'Frame sporty untuk aktivitas outdoor'),
  ('Tom Ford Classic', 'Rp 4.200.000', 'Frame', 'Desain elegan untuk tampilan premium'),
  ('Gentle Monster Sana', 'Rp 3.100.000', 'Frame', 'Gaya Korea dengan sentuhan modern'),
  ('Essilor Crizal', 'Rp 1.200.000', 'Lensa', 'Lensa anti-silau dan anti-gores'),
  ('Zeiss Progressive', 'Rp 3.500.000', 'Lensa', 'Lensa progresif presisi tinggi'),
  ('Cartier Panthère', 'Rp 8.500.000', 'Frame', 'Luxury frame dengan detail emas'),
  ('Persol Calligrapher', 'Rp 3.800.000', 'Sunglasses', 'Handcrafted Italian sunglasses');

-- Insert sample testimonials
INSERT INTO testimonials (name, text, rating) VALUES
  ('Rina Wijaya', 'Pelayanan sangat ramah dan profesional. Kacamata saya sangat nyaman!', 5),
  ('Budi Santoso', 'Pemeriksaan mata yang sangat detail. Hasilnya akurat dan cepat.', 5),
  ('Sari Dewi', 'Koleksi kacamata lengkap dengan harga yang bersaing. Recommended!', 5);

-- ============================================
-- FUNCTIONS & TRIGGERS
-- ============================================

-- Function untuk update timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger untuk products
CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger untuk services
CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON services
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- STORAGE BUCKET untuk gambar produk
-- ============================================

-- Buat bucket untuk product images
INSERT INTO storage.buckets (id, name, public)
VALUES ('product-images', 'product-images', true)
ON CONFLICT (id) DO NOTHING;

-- Policy untuk storage - Public dapat melihat
CREATE POLICY "Public dapat melihat gambar produk"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'product-images');

-- Policy untuk storage - Public dapat upload (untuk testing)
-- Untuk production, ganti dengan authenticated
CREATE POLICY "Public dapat upload gambar"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'product-images');

-- Policy untuk storage - Public dapat delete (untuk testing)
-- Untuk production, ganti dengan authenticated
CREATE POLICY "Public dapat delete gambar"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'product-images');
