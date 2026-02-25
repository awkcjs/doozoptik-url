import { useMutation } from '@tanstack/react-query';
import { supabase, ContactMessage, isSupabaseConfigured } from '@/lib/supabase';

// Kirim pesan kontak
export const useSendContactMessage = () => {
  return useMutation({
    mutationFn: async (message: Omit<ContactMessage, 'id' | 'created_at'>) => {
      // Jika Supabase belum dikonfigurasi, throw error untuk fallback
      if (!isSupabaseConfigured) {
        throw new Error('Supabase not configured');
      }
      
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([message])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
  });
};
