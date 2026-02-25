import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { useSendContactMessage } from "@/hooks/useContact";

// Konfigurasi kontak
const WHATSAPP_NUMBER = "628112640770"; // Ganti dengan nomor WhatsApp Anda (format: 62xxx)
const EMAIL_ADDRESS = "info@optikavista.com";
const PHONE_NUMBER = "(0276) 3287286";
const ADDRESS = "Jl. Pandanaran No. 252D, Boyolali, Jawa Tengah, Indonesia 57313";

// URL Google Maps untuk embed iframe (HANYA URL, bukan tag <iframe>)
const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1355.2804437038787!2d110.60017622153077!3d-7.525421636394591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a6fba095510cb%3A0xb80389938b4ff58a!2sDooz%20Optik%20Boyolali!5e0!3m2!1sid!2sid!4v1771987209108!5m2!1sid!2sid";

// URL Google Maps untuk link (klik alamat)
const GOOGLE_MAPS_LINK = "https://maps.app.goo.gl/eLREHxw8RMm5QP9e8";

const contactInfo = [
  { icon: MapPin, label: "Alamat", value: ADDRESS, action: "map" },
  { icon: Phone, label: "Telepon", value: PHONE_NUMBER, action: "phone" },
  { icon: Mail, label: "Email", value: EMAIL_ADDRESS, action: "email" },
  { icon: Clock, label: "Jam Operasional", value: "Senin - Ahad: 08:00 - 21:00", action: null },
];

const Kontak = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Hook untuk menyimpan pesan ke Supabase
  const sendMessage = useSendContactMessage();

  // Handler untuk mengirim pesan
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simpan ke Supabase
      await sendMessage.mutateAsync(form);
      
      toast({ 
        title: "Pesan Terkirim!", 
        description: "Terima kasih, kami akan menghubungi Anda segera." 
      });
      
      setForm({ nama: "", email: "", pesan: "" });
    } catch (error) {
      // Jika gagal simpan ke Supabase, fallback ke mailto
      const subject = encodeURIComponent(`Pesan dari ${form.nama}`);
      const body = encodeURIComponent(
        `Nama: ${form.nama}\nEmail: ${form.email}\n\nPesan:\n${form.pesan}`
      );
      const mailtoLink = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      toast({ 
        title: "Email Client Dibuka!", 
        description: "Silakan kirim email dari aplikasi email Anda." 
      });
      
      setForm({ nama: "", email: "", pesan: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handler untuk WhatsApp
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Halo Dooz Optik, saya ingin bertanya tentang produk dan layanan Anda."
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
        window.open(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1355.2804437038787!2d110.60017622153077!3d-7.525421636394591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a6fba095510cb%3A0xb80389938b4ff58a!2sDooz%20Optik%20Boyolali!5e0!3m2!1sid!2sid!4v1771987209108!5m2!1sid!2sid${encodeURIComponent(value)}`, "_blank");
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
                  title="Lokasi Dooz Optik"
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
