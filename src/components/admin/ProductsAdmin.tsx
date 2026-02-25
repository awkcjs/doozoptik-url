import { useState } from "react";
import { useProducts, useAddProduct, useUpdateProduct, useDeleteProduct } from "@/hooks/useProducts";
import { uploadProductImage } from "@/lib/storage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Plus, Pencil, Trash2, Glasses, Upload, X } from "lucide-react";
import { Product } from "@/lib/supabase";

const ProductsAdmin = () => {
  const { data: products, isLoading } = useProducts();
  const addProduct = useAddProduct();
  const updateProduct = useUpdateProduct();
  const deleteProduct = useDeleteProduct();
  const { toast } = useToast();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [uploading, setUploading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Frame" as "Frame" | "Sunglasses" | "Lensa",
    description: "",
    image_url: "",
  });

  const resetForm = () => {
    setFormData({
      name: "",
      price: "",
      category: "Frame",
      description: "",
      image_url: "",
    });
    setEditingProduct(null);
    setImageFile(null);
    setImagePreview("");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let imageUrl = formData.image_url;

      // Upload gambar jika ada file baru
      if (imageFile) {
        setUploading(true);
        imageUrl = await uploadProductImage(imageFile);
      }

      const productData = { ...formData, image_url: imageUrl };
      
      if (editingProduct) {
        await updateProduct.mutateAsync({ id: editingProduct.id, ...productData });
        toast({ title: "Produk berhasil diupdate!" });
      } else {
        await addProduct.mutateAsync(productData);
        toast({ title: "Produk berhasil ditambahkan!" });
      }
      setIsDialogOpen(false);
      resetForm();
    } catch (error) {
      toast({ 
        title: "Gagal menyimpan produk", 
        description: error instanceof Error ? error.message : "Silakan coba lagi",
        variant: "destructive" 
      });
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      category: product.category,
      description: product.description || "",
      image_url: product.image_url || "",
    });
    setImagePreview(product.image_url || "");
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Yakin ingin menghapus produk ini?")) return;
    
    try {
      await deleteProduct.mutateAsync(id);
      toast({ title: "Produk berhasil dihapus!" });
    } catch (error) {
      toast({ 
        title: "Gagal menghapus produk",
        variant: "destructive" 
      });
    }
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
        <h2 className="text-2xl font-bold">Kelola Produk</h2>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Tambah Produk
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingProduct ? "Edit Produk" : "Tambah Produk Baru"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Nama Produk</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ray-Ban Aviator"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Harga</label>
                <Input
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="Rp 2.500.000"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Kategori</label>
                <Select
                  value={formData.category}
                  onValueChange={(value: any) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Frame">Frame</SelectItem>
                    <SelectItem value="Sunglasses">Sunglasses</SelectItem>
                    <SelectItem value="Lensa">Lensa</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Deskripsi</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Deskripsi produk..."
                  rows={3}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Gambar Produk</label>
                
                {/* Image Preview */}
                {(imagePreview || formData.image_url) && (
                  <div className="relative mb-3 aspect-square w-full max-w-xs mx-auto rounded-lg overflow-hidden border">
                    <img 
                      src={imagePreview || formData.image_url} 
                      alt="Preview" 
                      className="w-full h-full object-cover"
                    />
                    <Button
                      type="button"
                      size="sm"
                      variant="destructive"
                      className="absolute top-2 right-2"
                      onClick={() => {
                        setImageFile(null);
                        setImagePreview("");
                        setFormData({ ...formData, image_url: "" });
                      }}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                )}

                {/* Upload Button */}
                <div className="space-y-2">
                  <label className="cursor-pointer">
                    <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary transition-colors">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Klik untuk upload gambar
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PNG, JPG, WEBP (max 5MB)
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                  
                  <p className="text-xs text-muted-foreground text-center">atau</p>
                  
                  <Input
                    value={formData.image_url}
                    onChange={(e) => {
                      setFormData({ ...formData, image_url: e.target.value });
                      setImagePreview(e.target.value);
                    }}
                    placeholder="Paste URL gambar di sini"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={addProduct.isPending || updateProduct.isPending || uploading}>
                {(addProduct.isPending || updateProduct.isPending || uploading) && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {uploading ? "Mengupload..." : editingProduct ? "Update Produk" : "Tambah Produk"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => (
          <Card key={product.id}>
            <CardContent className="p-4">
              <div className="aspect-square bg-muted rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                {product.image_url ? (
                  <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                  <Glasses className="w-12 h-12 text-muted-foreground/30" />
                )}
              </div>
              <span className="text-xs font-medium text-primary">{product.category}</span>
              <h3 className="font-semibold text-foreground mt-1">{product.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
              <p className="text-sm font-bold text-primary mt-2">{product.price}</p>
              <div className="flex gap-2 mt-3">
                <Button size="sm" variant="outline" onClick={() => handleEdit(product)} className="flex-1">
                  <Pencil className="w-3 h-3 mr-1" />
                  Edit
                </Button>
                <Button 
                  size="sm" 
                  variant="destructive" 
                  onClick={() => handleDelete(product.id)}
                  disabled={deleteProduct.isPending}
                >
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {products?.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center text-muted-foreground">
            <Glasses className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p>Belum ada produk. Klik "Tambah Produk" untuk memulai.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProductsAdmin;
