import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Halo! Selamat datang di Dooz Optik Boyolali. Ada yang bisa saya bantu?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Knowledge base untuk chatbot
  const getResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    // Greeting
    if (msg.includes("halo") || msg.includes("hai") || msg.includes("hello") || msg.includes("hi")) {
      return "Halo! Selamat datang di Dooz Optik. Saya siap membantu Anda. Anda bisa bertanya tentang produk, layanan, atau lokasi kami.";
    }

    // Jam operasional
    if (msg.includes("jam") || msg.includes("buka") || msg.includes("tutup") || msg.includes("operasional")) {
      return "Kami buka setiap hari:\n📅 Senin - Ahad\n🕐 Pukul 08:00 - 21:00 WIB\n\nKami siap melayani Anda!";
    }

    // Lokasi
    if (msg.includes("lokasi") || msg.includes("alamat") || msg.includes("dimana") || msg.includes("di mana")) {
      return "📍 Alamat kami:\nJl. Pandanaran No. 252D, Boyolali, Jawa Tengah 57313\n\nAnda bisa klik menu Kontak untuk melihat peta lokasi kami.";
    }

    // Kontak
    if (msg.includes("kontak") || msg.includes("telepon") || msg.includes("telp") || msg.includes("whatsapp") || msg.includes("wa")) {
      return "📞 Hubungi kami:\n• Telepon: (0276) 3287286\n• WhatsApp: 0811-2640-770\n• Email: info@doozoptik.com\n\nSilakan hubungi kami kapan saja!";
    }

    // Produk
    if (msg.includes("produk") || msg.includes("kacamata") || msg.includes("frame") || msg.includes("lensa")) {
      return "🕶️ Kami menyediakan:\n• Frame kacamata premium\n• Kacamata hitam (sunglasses)\n• Lensa berkualitas tinggi\n• Lensa kontak\n\nKlik menu Produk untuk melihat katalog lengkap kami!";
    }

    // Harga
    if (msg.includes("harga") || msg.includes("berapa") || msg.includes("biaya")) {
      return "💰 Harga produk kami bervariasi mulai dari Rp 500.000 hingga jutaan rupiah tergantung jenis dan brand.\n\nUntuk info harga detail, silakan:\n• Kunjungi toko kami\n• Hubungi WhatsApp: 0811-2640-770\n• Lihat katalog di menu Produk";
    }

    // Layanan
    if (msg.includes("layanan") || msg.includes("service") || msg.includes("pemeriksaan")) {
      return "✨ Layanan kami:\n• Pemeriksaan mata GRATIS\n• Pemasangan lensa\n• Konsultasi optik\n• Lensa kontak\n• Garansi 1 tahun\n\nKlik menu Layanan untuk info lengkap!";
    }

    // Pemeriksaan mata
    if (msg.includes("periksa mata") || msg.includes("cek mata") || msg.includes("tes mata")) {
      return "👁️ Pemeriksaan mata di Dooz Optik:\n• GRATIS untuk semua pelanggan\n• Dilakukan oleh optometris berpengalaman\n• Menggunakan alat modern\n• Hasil akurat dan cepat\n\nLangsung datang ke toko kami atau booking via WhatsApp!";
    }

    // Garansi
    if (msg.includes("garansi") || msg.includes("jaminan")) {
      return "✅ Garansi Dooz Optik:\n• Garansi frame 1 tahun\n• Garansi lensa 1 tahun\n• Gratis penyesuaian frame\n• After-sales service\n\nKami menjamin kepuasan Anda!";
    }

    // Brand
    if (msg.includes("brand") || msg.includes("merk") || msg.includes("merek")) {
      return "🏷️ Brand yang tersedia:\n• Ray-Ban\n• Oakley\n• Tom Ford\n• Gentle Monster\n• Essilor\n• Zeiss\n• Dan brand premium lainnya\n\nKunjungi toko kami untuk melihat koleksi lengkap!";
    }

    // Booking
    if (msg.includes("booking") || msg.includes("reservasi") || msg.includes("janji")) {
      return "📅 Cara booking:\n1. Hubungi WhatsApp: 0811-2640-770\n2. Atau telepon: (0276) 3287286\n3. Atau langsung datang ke toko\n\nKami siap melayani Anda!";
    }

    // Terima kasih
    if (msg.includes("terima kasih") || msg.includes("thanks") || msg.includes("makasih")) {
      return "Sama-sama! Senang bisa membantu Anda. Jika ada pertanyaan lain, jangan ragu untuk bertanya. 😊";
    }

    // Default response
    return "Maaf, saya belum mengerti pertanyaan Anda. Anda bisa bertanya tentang:\n• Jam operasional\n• Lokasi & alamat\n• Produk & harga\n• Layanan\n• Kontak\n• Pemeriksaan mata\n\nAtau hubungi kami langsung di WhatsApp: 0811-2640-770";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 hover:scale-110 transition-transform"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <CardHeader className="bg-primary text-primary-foreground rounded-t-lg flex flex-row items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-lg">Dooz Assistant</CardTitle>
                <p className="text-xs opacity-90">Online - Siap membantu</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.sender === "bot" && (
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <p className="text-xs opacity-60 mt-1">
                    {message.timestamp.toLocaleTimeString("id-ID", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                {message.sender === "user" && (
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-accent-foreground" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 justify-start">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="bg-card border rounded-2xl px-4 py-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce delay-100" />
                    <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Input */}
          <div className="p-4 border-t bg-background">
            <div className="flex gap-2">
              <Input
                placeholder="Ketik pesan..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Tekan Enter untuk mengirim
            </p>
          </div>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
