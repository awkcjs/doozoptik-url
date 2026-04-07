import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const EMAIL_ADDRESS = "info@doozoptik.com";

const branches = [
  {
    name: "Dooz Optik Boyolali",
    address: "Jl. Pandanaran No. 252D, Boyolali, Jawa Tengah 57313",
    phone: "(0276) 3287286",
    whatsapp: "628112640770",
    hours: "Senin - Ahad: 08:00 - 21:00",
    mapsLink: "https://maps.app.goo.gl/eLREHxw8RMm5QP9e8",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1355.2804437038787!2d110.60017622153077!3d-7.525421636394591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a6fba095510cb%3A0xb80389938b4ff58a!2sDooz%20Optik%20Boyolali!5e0!3m2!1sid!2sid!4v1771987209108!5m2!1sid!2sid",
  },
  {
    name: "Dooz Optik Karanganyar",
    address: "Jl. Kolonel Sugiono No.2, Karanganyar, Jawa Tengah 57722",
    phone: "0821-3693-4065",
    whatsapp: "6282136934065",
    hours: "Senin - Ahad: 08:00 - 20:00",
    mapsLink: "https://maps.google.com/?q=Jl.+Kolonel+Sugiono+No.2+Karanganyar+Jawa+Tengah",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.836608449103!2d110.9368702744969!3d-7.592755692421972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a19fba0a1460b%3A0x34e8375facb78edc!2sDOOZ%20Optik%20Karanganyar!5e0!3m2!1sen!2sid!4v1775532384358!5m2!1sen!2sid",
  },
  {
    name: "Dooz Optik Gentan",
    address: "Jl. Raya Songgo Langit, Gentan, Sukoharjo, Jawa Tengah 57556",
    phone: "0812-2800-0502",
    whatsapp: "6281228000502",
    hours: "Senin - Ahad: 10:00 - 20:00",
    mapsLink: "https://maps.google.com/?q=Jl.+Raya+Songgo+Langit+Gentan+Sukoharjo+Jawa+Tengah",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.9256885233735!2d110.78137527449678!3d-7.583067992431409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a159f17b7f33d%3A0x9ee739d03d09077d!2sDooz%20Optic%20Gentan!5e0!3m2!1sen!2sid!4v1775532424237!5m2!1sen!2sid",
  },
];

const Kontak = () => {
  const [form, setForm] = useState({ nama: "", pesan: "" });
  const [activeBranch, setActiveBranch] = useState(0);

  const branch = branches[activeBranch];

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Halo ${branch.name}, saya ${form.nama}.\n\n${form.pesan}`
    );
    window.open(`https://wa.me/${branch.whatsapp}?text=${message}`, "_blank");
    setForm({ nama: "", pesan: "" });
  };

  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-gradient-to-b from-accent/50 to-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">Hubungi Kami</h1>
            <p className="text-muted-foreground max-w-md mx-auto">Kami siap membantu Anda. Kirim pesan atau kunjungi langsung salah satu cabang kami</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">

          {/* Branch Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {branches.map((b, i) => (
              <button
                key={b.name}
                onClick={() => setActiveBranch(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  activeBranch === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-foreground hover:bg-accent/70"
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div key={`form-${activeBranch}`} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
              <Card className="border-none shadow-md">
                <CardContent className="p-8">
                  <h2 className="text-xl font-bold text-foreground mb-2">Kirim Pesan via WhatsApp</h2>
                  <p className="text-sm text-muted-foreground mb-6">Pesan akan dikirim ke {branch.name}</p>
                  <form onSubmit={handleWhatsApp} className="space-y-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Nama</label>
                      <Input placeholder="Nama lengkap Anda" value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Pesan</label>
                      <Textarea placeholder="Tulis pesan Anda..." rows={6} value={form.pesan} onChange={(e) => setForm({ ...form, pesan: e.target.value })} required />
                    </div>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <MessageCircle className="w-4 h-4" /> Kirim via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Info */}
            <motion.div key={`info-${activeBranch}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-6">Informasi Kontak — {branch.name}</h2>
                <div className="space-y-4">
                  {[
                    { icon: MapPin, label: "Alamat", value: branch.address, href: branch.mapsLink },
                    { icon: Phone, label: "Telepon / WhatsApp", value: branch.phone, href: `tel:${branch.phone.replace(/\D/g, "")}` },
                    { icon: Clock, label: "Jam Operasional", value: branch.hours, href: null },
                  ].map((info) => (
                    <div
                      key={info.label}
                      className={`flex items-start gap-4 p-3 rounded-lg transition-colors ${info.href ? "cursor-pointer hover:bg-accent/50" : ""}`}
                      onClick={() => info.href && window.open(info.href, "_blank")}
                    >
                      <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{info.label}</p>
                        <p className={`text-sm ${info.href ? "text-primary hover:underline" : "text-muted-foreground"}`}>{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-semibold text-foreground mb-3">Ikuti Kami</h3>
                <div className="flex gap-3">
                  <a href="https://facebook.com/doozoptik" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors text-primary">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href="https://instagram.com/doozoptik" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors text-primary">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href={`https://wa.me/${branch.whatsapp}`} target="_blank" rel="noopener noreferrer" title={`WhatsApp ${branch.name}`} className="w-10 h-10 rounded-full bg-accent hover:bg-green-500 hover:text-white flex items-center justify-center transition-colors text-primary">
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border bg-muted">
                <iframe
                  src={branch.mapsEmbed}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Lokasi ${branch.name}`}
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
