import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, Glasses, Stethoscope, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const services = [
  { icon: Eye, title: "Pemeriksaan Mata", desc: "Pemeriksaan menyeluruh menggunakan peralatan digital terkini untuk mendeteksi gangguan penglihatan secara akurat.", features: ["Refraksi mata", "Tekanan bola mata", "Pemeriksaan retina", "Konsultasi hasil"] },
  { icon: Glasses, title: "Pemasangan Lensa", desc: "Pemasangan lensa presisi tinggi sesuai resep dokter dengan pilihan lensa premium dari brand ternama.", features: ["Lensa single vision", "Lensa progresif", "Lensa anti-blue ray", "Coating premium"] },
  { icon: Stethoscope, title: "Konsultasi Optik", desc: "Konsultasi personal untuk membantu Anda memilih kacamata dan lensa yang tepat sesuai kebutuhan.", features: ["Analisis kebutuhan", "Rekomendasi produk", "Tips perawatan mata", "Follow-up gratis"] },
  { icon: Wrench, title: "Service & Reparasi", desc: "Layanan perbaikan dan perawatan kacamata agar selalu dalam kondisi terbaik.", features: ["Adjustment frame", "Penggantian nose pad", "Pembersihan ultrasonik", "Perbaikan engsel"] },
];

const steps = [
  { num: "01", title: "Booking", desc: "Buat janji melalui website atau telepon" },
  { num: "02", title: "Pemeriksaan", desc: "Tim optometris kami memeriksa mata Anda" },
  { num: "03", title: "Konsultasi", desc: "Pilih kacamata dan lensa yang sesuai" },
  { num: "04", title: "Selesai", desc: "Kacamata siap sesuai dengan lensa yang dipilih customer" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Layanan = () => {
  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-gradient-to-b from-accent/50 to-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">Layanan Kami</h1>
            <p className="text-muted-foreground max-w-md mx-auto">Layanan optik profesional untuk kesehatan mata dan kenyamanan penglihatan Anda</p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="border-none shadow-md h-full">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-5">
                      <s.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mb-5">{s.desc}</p>
                    <ul className="space-y-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-12 text-center">Alur Layanan</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div key={step.num} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
                <div className="text-4xl font-extrabold text-primary/20 mb-3">{step.num}</div>
                <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4">Siap Booking Pemeriksaan Mata?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">Hubungi kami sekarang untuk menjadwalkan pemeriksaan mata gratis</p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/kontak">Hubungi Kami <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Layanan;
