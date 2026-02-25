import { motion } from "framer-motion";
import { Award, Users, Target, Heart, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const stats = [
  { value: "15+", label: "Tahun Pengalaman" },
  { value: "10K+", label: "Pelanggan Puas" },
  { value: "50+", label: "Brand Partner" },
  { value: "3", label: "Cabang" },
];

const team = [
  { name: "Dr. Andi Pratama", role: "Optometris Utama", desc: "Berpengalaman 12 tahun dalam pemeriksaan mata" },
  { name: "Siti Rahayu", role: "Manajer Operasional", desc: "Ahli dalam manajemen optik dan customer service" },
  { name: "Dr. Maya Lestari", role: "Optometris", desc: "Spesialis lensa kontak dan low vision" },
];

const values = [
  { icon: Award, title: "Kualitas", desc: "Produk dan layanan terbaik dengan standar internasional" },
  { icon: Heart, title: "Kepedulian", desc: "Kesehatan mata pelanggan adalah prioritas utama kami" },
  { icon: Target, title: "Inovasi", desc: "Selalu mengadopsi teknologi terbaru dalam dunia optik" },
  { icon: Users, title: "Kebersamaan", desc: "Tim profesional yang bekerja sebagai keluarga" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Tentang = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-accent/50 to-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">Tentang Dooz Optik</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Kami hadir sejak 2015 dengan misi memberikan solusi penglihatan terbaik dan kacamata berkualitas untuk masyarakat Indonesia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div key={s.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
                <p className="text-4xl font-extrabold text-primary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Cerita Kami</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>OptikaVista didirikan oleh Dr. Andi Pratama pada tahun 2010 di Jakarta. Berawal dari klinik kecil, kami kini telah berkembang menjadi salah satu optik terpercaya dengan 3 cabang di area Jabodetabek.</p>
              <p>Kami percaya bahwa setiap orang berhak mendapatkan penglihatan yang jernih. Oleh karena itu, kami menghadirkan layanan pemeriksaan mata profesional, koleksi kacamata premium, dan harga yang terjangkau.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-10 text-center">Nilai-Nilai Kami</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="border-none shadow-md text-center h-full">
                  <CardContent className="p-8 flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                      <v.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-10 text-center">Tim Kami</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((t, i) => (
              <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="text-center border-none shadow-md">
                  <CardContent className="p-8">
                    <div className="w-20 h-20 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{t.name}</h3>
                    <p className="text-sm text-primary font-medium">{t.role}</p>
                    <p className="text-xs text-muted-foreground mt-2">{t.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-8">Mengapa Memilih Kami?</h2>
          <div className="space-y-4 text-left">
            {["Peralatan pemeriksaan mata berteknologi terbaru", "Optometris bersertifikat dan berpengalaman", "Garansi produk hingga 2 tahun", "Harga transparan tanpa biaya tersembunyi", "Layanan after-sales yang responsif"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tentang;
