import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Glasses, Search, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import { useProducts } from "@/hooks/useProducts";

const categories = ["Semua", "Frame", "Sunglasses", "Lensa"];

// Data fallback jika Supabase belum dikonfigurasi
const fallbackProducts = [
  { id: "1", name: "Ray-Ban Aviator", price: "Rp 2.500.000", category: "Sunglasses", description: "Frame metal klasik dengan lensa tinted" },
  { id: "2", name: "Oakley Holbrook", price: "Rp 1.800.000", category: "Sunglasses", description: "Frame sporty untuk aktivitas outdoor" },
  { id: "3", name: "Tom Ford Classic", price: "Rp 4.200.000", category: "Frame", description: "Desain elegan untuk tampilan premium" },
  { id: "4", name: "Gentle Monster Sana", price: "Rp 3.100.000", category: "Frame", description: "Gaya Korea dengan sentuhan modern" },
  { id: "5", name: "Essilor Crizal", price: "Rp 1.200.000", category: "Lensa", description: "Lensa anti-silau dan anti-gores" },
  { id: "6", name: "Zeiss Progressive", price: "Rp 3.500.000", category: "Lensa", description: "Lensa progresif presisi tinggi" },
  { id: "7", name: "Cartier Panthère", price: "Rp 8.500.000", category: "Frame", description: "Luxury frame dengan detail emas" },
  { id: "8", name: "Persol Calligrapher", price: "Rp 3.800.000", category: "Sunglasses", description: "Handcrafted Italian sunglasses" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
};

const Produk = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [search, setSearch] = useState("");
  
  // Fetch produk dari Supabase
  const { data: productsFromDB, isLoading, error } = useProducts();
  
  // Gunakan data dari Supabase atau fallback
  const products = productsFromDB && productsFromDB.length > 0 ? productsFromDB : fallbackProducts;

  // Filter produk
  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = activeCategory === "Semua" || p.category === activeCategory;
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [products, activeCategory, search]);

  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-gradient-to-b from-accent/50 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">Katalog Produk</h1>
            <p className="text-muted-foreground max-w-md mx-auto">Temukan kacamata yang sempurna untuk gaya dan kebutuhan Anda</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 max-w-2xl mx-auto">
            <div className="relative w-full sm:w-auto sm:flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Cari produk..." className="pl-10" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="flex gap-2">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          {/* Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <span className="ml-3 text-muted-foreground">Memuat produk...</span>
            </div>
          ) : error ? (
            <div className="text-center py-16 text-muted-foreground">
              <p className="mb-2">Gagal memuat produk dari database</p>
              <p className="text-sm">Menampilkan data contoh</p>
            </div>
          ) : null}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <motion.div key={p.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="overflow-hidden border hover:shadow-lg transition-all group cursor-pointer">
                  <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                    {p.image_url ? (
                      <img 
                        src={p.image_url} 
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    ) : (
                      <Glasses className="w-16 h-16 text-muted-foreground/30 group-hover:text-primary/40 transition-colors" />
                    )}
                  </div>
                  <CardContent className="p-5 space-y-2">
                    <span className="text-xs font-medium text-primary">{p.category}</span>
                    <h3 className="font-semibold text-foreground">{p.name}</h3>
                    <p className="text-xs text-muted-foreground">{p.description}</p>
                    <p className="text-sm font-bold text-primary">{p.price}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <Glasses className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p>Produk tidak ditemukan</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Produk;
