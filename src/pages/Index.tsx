import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, Glasses, ShieldCheck, Star, ArrowRight, CheckCircle, Loader2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { useProducts } from "@/hooks/useProducts";
import { useTestimonials } from "@/hooks/useTestimonials";

const highlights = [
  { icon: Eye, title: "Pemeriksaan Mata", desc: "Pemeriksaan komprehensif dengan alat terkini" },
  { icon: Glasses, title: "Koleksi Premium", desc: "Frame dari brand ternama dunia" },
  { icon: ShieldCheck, title: "Garansi Resmi", desc: "Garansi lensa dan frame hingga 2 tahun" },
];

// Data fallback
const fallbackBestSellers = [
  { id: "1", name: "Ray-Ban Aviator", price: "Rp 2.500.000", category: "Sunglasses", description: "", image_url: "" },
  { id: "2", name: "Oakley Holbrook", price: "Rp 1.800.000", category: "Sunglasses", description: "", image_url: "" },
  { id: "3", name: "Tom Ford Classic", price: "Rp 4.200.000", category: "Frame", description: "", image_url: "" },
  { id: "4", name: "Gentle Monster Sana", price: "Rp 3.100.000", category: "Frame", description: "", image_url: "" },
];

const fallbackTestimonials = [
  { id: "1", name: "Fitri Haryani", text: "Optik favorit, tempat nyaman luas. Alat pemeriksaannya juga lengkap . Mbak nya juga ramah 😍😍.", rating: 5 },
  { id: "2", name: "Ika Emilia", text: "Pelayanan sangat bagus, memberikan informasi dengan baik dan detail. Kualitas frame dan lensa tidak perlu diragukan lagi. Semuanya luar biasa bagus.", rating: 5 },
  { id: "3", name: "Muhajir Alhaq", text: "Pelayanan bagus, ruang nyaman, udah make teknologi yg up to date utk cek matanya, banyak pilihan juga. Recommended lahhh 👍", rating: 5 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {
  // Fetch data dari Supabase
  const { data: productsFromDB, isLoading: loadingProducts } = useProducts();
  const { data: testimonialsFromDB, isLoading: loadingTestimonials } = useTestimonials();
  
  // Gunakan data dari Supabase atau fallback, ambil 4 produk pertama
  const bestSellers = productsFromDB && productsFromDB.length > 0 
    ? productsFromDB.slice(0, 4) 
    : fallbackBestSellers;
    
  const testimonials = testimonialsFromDB && testimonialsFromDB.length > 0
    ? testimonialsFromDB.slice(0, 3)
    : fallbackTestimonials;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-secondary">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                ✨ Optik Terpercaya Sejak 2015
              </span>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
                Lihat Dunia Lebih <span className="text-primary">Jelas & Stylish</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Temukan kacamata sempurna yang memadukan kenyamanan, gaya, dan teknologi lensa terbaik untuk penglihatan Anda.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link to="/produk">Lihat Koleksi <ArrowRight className="w-4 h-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/layanan">Booking Pemeriksaan</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      </section>

      {/* Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-card">
                  <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Produk Unggulan</h2>
            <p className="text-muted-foreground">Koleksi terlaris pilihan pelanggan kami</p>
          </div>
          
          {loadingProducts ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {bestSellers.map((p, i) => (
                  <motion.div key={p.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                    <Card className="overflow-hidden border hover:shadow-lg transition-shadow group cursor-pointer">
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
                      <CardContent className="p-5">
                        <span className="text-xs font-medium text-primary">{p.category}</span>
                        <h3 className="font-semibold text-foreground mt-1">{p.name}</h3>
                        <p className="text-sm font-bold text-primary mt-2">{p.price}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Button variant="outline" asChild>
                  <Link to="/produk">Lihat Semua Produk <ArrowRight className="w-4 h-4" /></Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Kata Pelanggan</h2>
            <p className="text-muted-foreground">Kepuasan pelanggan adalah prioritas kami</p>
          </div>
          
          {loadingTestimonials ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div key={t.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                  <Card className="border-none shadow-md">
                    <CardContent className="p-8">
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{t.text}"</p>
                      <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Cabang */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Cabang Kami</h2>
            <p className="text-muted-foreground">Kunjungi salah satu dari 3 cabang kami yang tersebar di Jawa Tengah</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Dooz Optik Boyolali",
                address: "Jl. Pandanaran No. 252D, Boyolali, Jawa Tengah 57313",
                maps: "https://maps.app.goo.gl/eLREHxw8RMm5QP9e8",
              },
              {
                name: "Dooz Optik Karanganyar",
                address: "Jl. Kolonel Sugiono No.2, Karanganyar, Jawa Tengah 57722",
                maps: "https://maps.google.com/?q=Jl.+Kolonel+Sugiono+No.2+Karanganyar+Jawa+Tengah",
              },
              {
                name: "Dooz Optik Gentan",
                address: "Jl. Raya Songgo Langit, Gentan, Sukoharjo, Jawa Tengah 57556",
                maps: "https://maps.google.com/?q=Jl.+Raya+Songgo+Langit+Gentan+Sukoharjo+Jawa+Tengah",
              },
            ].map((branch, i) => (
              <motion.div key={branch.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-8 flex flex-col gap-4 h-full">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-lg mb-2">{branch.name}</h3>
                      <p className="text-sm text-muted-foreground">{branch.address}</p>
                    </div>
                    <a
                      href={branch.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
                    >
                      Lihat di Maps <ArrowRight className="w-3 h-3" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Siap Untuk Penglihatan yang Lebih Baik?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Booking pemeriksaan mata gratis atau kunjungi toko kami untuk menemukan kacamata impian Anda.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/layanan"><CheckCircle className="w-4 h-4" /> Booking Sekarang</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/kontak">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
