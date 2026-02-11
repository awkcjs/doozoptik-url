import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const contactInfo = [
  { icon: MapPin, label: "Alamat", value: "Jl. Sudirman No. 123, Jakarta Selatan 12190" },
  { icon: Phone, label: "Telepon", value: "(021) 555-0123" },
  { icon: Mail, label: "Email", value: "info@optikavista.com" },
  { icon: Clock, label: "Jam Operasional", value: "Senin - Sabtu: 09:00 - 20:00" },
];

const Kontak = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Pesan Terkirim!", description: "Kami akan menghubungi Anda segera." });
    setForm({ nama: "", email: "", pesan: "" });
  };

  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-gradient-to-b from-accent/50 to-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">Hubungi Kami</h1>
            <p className="text-muted-foreground max-w-md mx-auto">Kami siap membantu Anda. Kirim pesan atau kunjungi langsung toko kami</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <Card className="border-none shadow-md">
                <CardContent className="p-8">
                  <h2 className="text-xl font-bold text-foreground mb-6">Kirim Pesan</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Nama</label>
                      <Input placeholder="Nama lengkap Anda" value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                      <Input type="email" placeholder="email@contoh.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Pesan</label>
                      <Textarea placeholder="Tulis pesan Anda..." rows={5} value={form.pesan} onChange={(e) => setForm({ ...form, pesan: e.target.value })} required />
                    </div>
                    <Button type="submit" className="w-full">
                      <Send className="w-4 h-4" /> Kirim Pesan
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-6">Informasi Kontak</h2>
                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{info.label}</p>
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Ikuti Kami</h3>
                <div className="flex gap-3">
                  {[Facebook, Instagram, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors text-primary">
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden border bg-muted aspect-video flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-8 h-8 mx-auto mb-2 opacity-40" />
                  <p className="text-sm">Peta lokasi akan ditampilkan di sini</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontak;
