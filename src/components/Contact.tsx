import React from "react";
import { MapPin, Phone, Mail, Clock, MessageSquareCode } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-primary-accent" />,
      title: "Stüdyo & Mutfak Adresi",
      details: "Kemankeş Karamustafa Paşa Mh., Mumhane Cd. No:42, Karaköy, Beyoğlu / İstanbul",
    },
    {
      icon: <Phone className="w-5 h-5 text-primary-accent" />,
      title: "Telefon Numarası",
      details: "+90 (212) 243 00 00",
    },
    {
      icon: <Mail className="w-5 h-5 text-primary-accent" />,
      title: "E-Posta Adresi",
      details: "hello@zelu.co",
    },
    {
      icon: <Clock className="w-5 h-5 text-primary-accent" />,
      title: "Mutfak Çalışma Saatleri",
      details: "Salı - Pazar: 10:00 - 22:00 (Pazartesi günleri kapalıyız)",
    },
  ];

  return (
    <section id="iletisim" className="py-24 bg-sand-mid/30 border-t border-border-color">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Column: Contact info and hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-accent">
                İLETİŞİM & LOKASYON
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground">
                Kahveye & Menü Planlamaya Bekliyoruz
              </h2>
              <p className="text-foreground/75 leading-relaxed font-light">
                Özel davetleriniz için menü tadımı yapmak, catering alternatiflerini görüşmek veya 
                şeflerimizle tanışmak isterseniz bize ulaşabilirsiniz. Karaköy Mumhane caddesindeki 
                atölye mutfağımız haftanın 6 günü ziyarete açıktır.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-xl bg-card-bg border border-border-color shadow-sm mt-0.5">
                    {info.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/50">
                      {info.title}
                    </h4>
                    <p className="text-sm font-medium text-foreground/80 leading-relaxed">
                      {info.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-6 border-t border-border-color/80">
              <a
                href="https://wa.me/905000000000?text=Merhaba%2C%20catering%20ve%20men%C3%BC%20planlama%20hakk%C4%B1nda%20teklif%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-primary-accent text-white text-xs font-semibold uppercase tracking-wider hover:bg-primary-accent-hover transition-colors shadow-md hover:shadow-lg duration-300"
              >
                <MessageSquareCode className="w-4 h-4" />
                <span>WhatsApp ile İletişime Geç</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Iframe */}
          <div className="lg:col-span-7 h-96 lg:h-auto min-h-[350px] rounded-[2rem] overflow-hidden border border-border-color shadow-xl bg-sand-dark relative">
            <iframe
              title="Zelu Co. Mutfak Haritası"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.1265882650383!2d28.980315376594247!3d41.02241517134907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9bf079a0b1b%3A0xe54d3bbd31dfc95!2sKemanke%C5%9F%20Karamustafa%20Pa%C5%9Fa%2C%20Mumhane%20Cd.%2C%2034425%20Beyo%C4%9Flu%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-125 opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
