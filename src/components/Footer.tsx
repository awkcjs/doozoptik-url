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
              <span className="text-xl font-bold text-white">OptikaVista</span>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Solusi terbaik untuk kesehatan mata dan gaya Anda. Kami menyediakan kacamata berkualitas dengan layanan pemeriksaan mata profesional.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
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
              {["Pemeriksaan Mata", "Pemasangan Lensa", "Konsultasi Optik", "Kacamata Custom"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Jl. Sudirman No. 123, Jakarta Selatan</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" /> (021) 555-0123</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0" /> info@optikavista.com</li>
              <li className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 shrink-0" /> Sen-Sab: 09:00 - 20:00</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6 text-center text-sm opacity-60">
          © 2026 OptikaVista. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
