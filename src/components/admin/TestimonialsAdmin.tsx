import { useState } from "react";
import { useTestimonials, useAddTestimonial } from "@/hooks/useTestimonials";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Plus, Star, Trash2 } from "lucide-react";

const TestimonialsAdmin = () => {
  const { data: testimonials, isLoading } = useTestimonials();
  const addTestimonial = useAddTestimonial();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    text: "",
    rating: 5,
  });

  const deleteTestimonial = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['testimonials'] });
      toast({ title: "Testimoni berhasil dihapus!" });
    },
  });

  const resetForm = () => {
    setFormData({
      name: "",
      text: "",
      rating: 5,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await addTestimonial.mutateAsync(formData);
      toast({ title: "Testimoni berhasil ditambahkan!" });
      setIsDialogOpen(false);
      resetForm();
    } catch (error) {
      toast({ 
        title: "Gagal menyimpan testimoni", 
        description: "Silakan coba lagi",
        variant: "destructive" 
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Yakin ingin menghapus testimoni ini?")) return;
    deleteTestimonial.mutate(id);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Kelola Testimoni</h2>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Tambah Testimoni
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Tambah Testimoni Baru</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Nama Pelanggan</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Nama lengkap"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Rating</label>
                <Select
                  value={formData.rating.toString()}
                  onValueChange={(value) => setFormData({ ...formData, rating: parseInt(value) })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">⭐⭐⭐⭐⭐ (5)</SelectItem>
                    <SelectItem value="4">⭐⭐⭐⭐ (4)</SelectItem>
                    <SelectItem value="3">⭐⭐⭐ (3)</SelectItem>
                    <SelectItem value="2">⭐⭐ (2)</SelectItem>
                    <SelectItem value="1">⭐ (1)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Testimoni</label>
                <Textarea
                  required
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  placeholder="Tulis testimoni pelanggan..."
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full" disabled={addTestimonial.isPending}>
                {addTestimonial.isPending && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Tambah Testimoni
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials?.map((testimonial: any) => (
          <Card key={testimonial.id}>
            <CardContent className="p-6">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => handleDelete(testimonial.id)}
                  disabled={deleteTestimonial.isPending}
                >
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {testimonials?.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center text-muted-foreground">
            <Star className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>Belum ada testimoni. Klik "Tambah Testimoni" untuk memulai.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TestimonialsAdmin;
