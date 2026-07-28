import React from "react";
import { MapPin, Mail, Clock, MessageSquareCode, Instagram } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-primary-accent" />,
      title: "Hizmet Bölgesi",
      details: "Ankara, Türkiye (Tüm Ankara genelinde kurumsal ve bireysel catering/sipariş hizmeti)",
    },
    {
      icon: <Mail className="w-5 h-5 text-primary-accent" />,
      title: "E-Posta Adresi",
      details: "hello@zelu.co",
    },
    {
      icon: <Clock className="w-5 h-5 text-primary-accent" />,
      title: "Çalışma & İletişim Saatleri",
      details: "Salı - Pazar: 10:00 - 22:00 (Pazartesi günleri kapalıyız)",
    },
  ];

  return (
    <section id="iletisim" className="py-24 bg-sand-mid/30 border-t border-border-color">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Header content */}
        <div className="space-y-6 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-accent">
            İLETİŞİM & SİPARİŞ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground">
            Özel Davet ve Toptan Sipariş Talepleri
          </h2>
          <p className="text-foreground/75 leading-relaxed font-light max-w-2xl mx-auto">
            Özel davetleriniz için catering alternatiflerini görüşmek, kafeleriniz için toplu
            sipariş detaylarını planlamak veya şeflerimizle iletişime geçmek için
            WhatsApp veya Instagram DM üzerinden bize doğrudan ulaşabilirsiniz.
          </p>
        </div>

        {/* Info Cards (Centered column) */}
        <div className="max-w-xl mx-auto bg-card-bg border border-border-color p-8 rounded-[2rem] shadow-sm space-y-8 text-left mb-10">
          {contactInfo.map((info, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <div className="p-2.5 rounded-xl bg-background border border-border-color shadow-sm mt-0.5">
                {info.icon}
              </div>
              <div className="space-y-1">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-foreground/45">
                  {info.title}
                </h4>
                <p className="text-sm font-medium text-foreground/80 leading-relaxed">
                  {info.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action buttons (Centered) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/905067740924?text=Merhaba%2C%20zelu%20co%20catering%20ve%20men%C3%BC%20planlama%20hakk%C4%B1nda%20teklif%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-primary-accent text-white text-xs font-semibold uppercase tracking-wider hover:bg-primary-accent-hover transition-colors shadow-md hover:shadow-lg duration-300"
          >
            <MessageSquareCode className="w-4 h-4" />
            <span>WhatsApp ile Sipariş Ver</span>
          </a>
          <a
            href="https://www.instagram.com/zelu_co/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-transparent hover:bg-sand-dark text-foreground border border-border-color text-xs font-semibold uppercase tracking-wider transition-all duration-300"
          >
            <Instagram className="w-4 h-4 text-primary-accent" />
            <span>Instagram'dan Ulaşın</span>
          </a>
        </div>

      </div>
    </section>
  );
}
