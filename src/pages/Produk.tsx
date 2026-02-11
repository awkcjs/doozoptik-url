import { useState } from "react";
import { motion } from "framer-motion";
import { Glasses, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";

const categories = ["Semua", "Frame", "Sunglasses", "Lensa"];

const products = [
  { name: "Ray-Ban Aviator", price: "Rp 2.500.000", category: "Sunglasses", desc: "Frame metal klasik dengan lensa tinted" },
  { name: "Oakley Holbrook", price: "Rp 1.800.000", category: "Sunglasses", desc: "Frame sporty untuk aktivitas outdoor" },
  { name: "Tom Ford Classic", price: "Rp 4.200.000", category: "Frame", desc: "Desain elegan untuk tampilan premium" },
  { name: "Gentle Monster Sana", price: "Rp 3.100.000", category: "Frame", desc: "Gaya Korea dengan sentuhan modern" },
  { name: "Essilor Crizal", price: "Rp 1.200.000", category: "Lensa", desc: "Lensa anti-silau dan anti-gores" },
  { name: "Zeiss Progressive", price: "Rp 3.500.000", category: "Lensa", desc: "Lensa progresif presisi tinggi" },
  { name: "Cartier Panthère", price: "Rp 8.500.000", category: "Frame", desc: "Luxury frame dengan detail emas" },
  { name: "Persol Calligrapher", price: "Rp 3.800.000", category: "Sunglasses", desc: "Handcrafted Italian sunglasses" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.4 } }),
};

const Produk = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "Semua" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p, i) => (
              <motion.div key={p.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="overflow-hidden border hover:shadow-lg transition-all group cursor-pointer">
                  <div className="aspect-square bg-muted flex items-center justify-center">
                    <Glasses className="w-16 h-16 text-muted-foreground/30 group-hover:text-primary/40 transition-colors" />
                  </div>
                  <CardContent className="p-5 space-y-2">
                    <span className="text-xs font-medium text-primary">{p.category}</span>
                    <h3 className="font-semibold text-foreground">{p.name}</h3>
                    <p className="text-xs text-muted-foreground">{p.desc}</p>
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
