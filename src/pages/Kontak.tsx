import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

// Konfigurasi kontak
const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor WhatsApp Anda (format: 62xxx)
const EMAIL_ADDRESS = "info@optikavista.com";
const PHONE_NUMBER = "(021) 555-0123";
const ADDRESS = "Jl. Sudirman No. 123, Jakarta Selatan 12190";
const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1234567890!2d106.8229!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMzEuNyJTIDEwNsKwNDknMjIuNCJF!5e0!3m2!1sen!2sid!4v1234567890"; // Ganti dengan embed URL Google Maps Anda

const contactInfo = [
  { icon: MapPin, label: "Alamat", value: ADDRESS, action: "map" },
  { icon: Phone, label: "Telepon", value: PHONE_NUMBER, action: "phone" },
  { icon: Mail, label: "Email", value: EMAIL_ADDRESS, action: "email" },
  { icon: Clock, label: "Jam Operasional", value: "Senin - Sabtu: 09:00 - 20:00", action: null },
];

const Kontak = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handler untuk mengirim email
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Membuat mailto link dengan data form
    const subject = encodeURIComponent(`Pesan dari ${form.nama}`);
    const body = encodeURIComponent(
      `Nama: ${form.nama}\nEmail: ${form.email}\n\nPesan:\n${form.pesan}`
    );
    const mailtoLink = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;

    // Membuka email client
    window.location.href = mailtoLink;

    // Simulasi delay untuk UX
    setTimeout(() => {
      toast({ 
        title: "Email Client Dibuka!", 
        description: "Silakan kirim email dari aplikasi email Anda." 
      });
      setForm({ nama: "", email: "", pesan: "" });
      setIsSubmitting(false);
    }, 500);
  };

  // Handler untuk WhatsApp
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Halo OptikaVista, saya ingin bertanya tentang produk dan layanan Anda."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  // Handler untuk klik info kontak
  const handleContactClick = (action: string | null, value: string) => {
    switch (action) {
      case "phone":
        window.location.href = `tel:${value.replace(/\D/g, "")}`;
        break;
      case "email":
        window.location.href = `mailto:${value}`;
        break;
      case "map":
        window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(value)}`, "_blank");
        break;
    }
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
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      <Send className="w-4 h-4" /> {isSubmitting ? "Membuka Email..." : "Kirim via Email"}
                    </Button>
                  </form>

                  {/* WhatsApp Button */}
                  <div className="mt-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-full bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
                      onClick={handleWhatsApp}
                    >
                      <MessageCircle className="w-4 h-4" /> Chat via WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-6">Informasi Kontak</h2>
                <div className="space-y-5">
                  {contactInfo.map((info) => (
                    <div 
                      key={info.label} 
                      className={`flex items-start gap-4 ${info.action ? 'cursor-pointer hover:bg-accent/50 p-3 rounded-lg transition-colors' : 'p-3'}`}
                      onClick={() => info.action && handleContactClick(info.action, info.value)}
                    >
                      <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{info.label}</p>
                        <p className={`text-sm ${info.action ? 'text-primary hover:underline' : 'text-muted-foreground'}`}>
                          {info.value}
                        </p>
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

              {/* Map */}
              <div className="rounded-xl overflow-hidden border bg-muted">
                <iframe
                  src={GOOGLE_MAPS_EMBED}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi OptikaVista"
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontak;
