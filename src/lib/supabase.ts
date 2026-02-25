import { createClient } from '@supabase/supabase-js';

// Ganti dengan kredensial Supabase Anda
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// Cek apakah Supabase sudah dikonfigurasi
export const isSupabaseConfigured = 
  import.meta.env.VITE_SUPABASE_URL && 
  import.meta.env.VITE_SUPABASE_ANON_KEY &&
  import.meta.env.VITE_SUPABASE_URL !== 'your_supabase_project_url';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types untuk database
export interface Product {
  id: string;
  name: string;
  price: string;
  category: 'Frame' | 'Sunglasses' | 'Lensa';
  description: string;
  image_url?: string;
  created_at?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  created_at?: string;
}

export interface ContactMessage {
  id?: string;
  nama: string;
  email: string;
  pesan: string;
  created_at?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  created_at?: string;
}
