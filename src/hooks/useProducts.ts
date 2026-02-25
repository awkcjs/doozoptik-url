import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase, Product, isSupabaseConfigured } from '@/lib/supabase';

// Fetch semua produk
export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      // Jika Supabase belum dikonfigurasi, return empty array
      if (!isSupabaseConfigured) {
        return [];
      }
      
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching products:', error);
        return [];
      }
      return data as Product[];
    },
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

// Fetch produk berdasarkan kategori
export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ['products', category],
    queryFn: async () => {
      if (!isSupabaseConfigured) {
        return [];
      }
      
      let query = supabase.from('products').select('*');
      
      if (category !== 'Semua') {
        query = query.eq('category', category);
      }
      
      const { data, error } = await query.order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching products by category:', error);
        return [];
      }
      return data as Product[];
    },
    retry: false,
  });
};

// Tambah produk baru
export const useAddProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (product: Omit<Product, 'id' | 'created_at'>) => {
      const { data, error } = await supabase
        .from('products')
        .insert([product])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};

// Update produk
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ id, ...updates }: Partial<Product> & { id: string }) => {
      const { data, error } = await supabase
        .from('products')
        .update(updates)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};

// Hapus produk
export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};
