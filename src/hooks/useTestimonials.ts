import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase, Testimonial } from '@/lib/supabase';

// Fetch semua testimoni
export const useTestimonials = () => {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Testimonial[];
    },
  });
};

// Tambah testimoni baru
export const useAddTestimonial = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (testimonial: Omit<Testimonial, 'id' | 'created_at'>) => {
      const { data, error } = await supabase
        .from('testimonials')
        .insert([testimonial])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['testimonials'] });
    },
  });
};
