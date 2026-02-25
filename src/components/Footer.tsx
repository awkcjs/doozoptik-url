import { Link } from "react-router-dom";
import { Eye, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sky-dark text-sky-light">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-white">Dooz Optik</span>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Optik terpercaya sejak 2015. Menyediakan kacamata berkualitas dengan harga terjangkau untuk seluruh keluarga Indonesia.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com/doozoptik" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/doozoptik" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/628112640770" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors" title="WhatsApp">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Menu</h4>
            <ul className="space-y-3 text-sm opacity-80">
              {[
                { label: "Beranda", path: "/" },
                { label: "Produk", path: "/produk" },
                { label: "Tentang Kami", path: "/tentang" },
                { label: "Layanan", path: "/layanan" },
                { label: "Kontak", path: "/kontak" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-semibold text-white mb-4">Layanan</h4>
            <ul className="space-y-3 text-sm opacity-80">
              {["Pemeriksaan Mata Gratis", "Lensa Kontak", "Frame Premium", "Garansi 2 Tahun"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Jl. Pandanaran No. 252D, Boyolali, Jawa Tengah</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" /> (0276) 3287286</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0" /> info@doozoptik.com</li>
              <li className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 shrink-0" /> Senin - Ahad: 08:00 - 21:00</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6 text-center text-sm opacity-60">
          © 2026 Dooz Optik Boyolali. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
