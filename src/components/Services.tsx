import React from "react";
import { UtensilsCrossed, Flame, Briefcase, Award } from "lucide-react";

export default function Services() {
  const items = [
    {
      icon: <UtensilsCrossed className="w-6 h-6 text-primary-accent" />,
      title: "Butik Catering & Davetler",
      subtitle: "Özel Günleriniz İçin Gurme Çözümler",
      description:
        "Düğün, nişan, doğum günü veya özel lansmanlarınız için mekana ve konsepte uygun kreatif sunumlar, soğuk/sıcak ikramlar ve estetik büfe tasarımları hazırlıyoruz.",
      features: ["Kişiselleştirilmiş menü seçimi", "Profesyonel garson & servis kadrosu", "Tabaklı veya kokteyl sunumlar"],
    },
    {
      icon: <Flame className="w-6 h-6 text-primary-accent" />,
      title: "Kişiye Özel Şef Deneyimi",
      subtitle: "Evinizde Beş Yıldızlı Gastronomi",
      description:
        "Mutfağınızı şeflerimize teslim edin. Malzeme tedarikinden tabaklamaya, hatta yemek sonrasındaki temizliğe kadar şeflerimizin ilgilendiği 5 veya 7 aşamalı gurme tadım menüleri.",
      features: ["Dünya mutfağından seçmeler", "Şefe özel tadım menüsü", "Mutfak temizliği dahil"],
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary-accent" />,
      title: "Kurumsal Yemek Çözümleri",
      subtitle: "Şirket Lansmanları & Günlük Gurme Paketler",
      description:
        "İş toplantılarınız, kurumsal etkinlikleriniz ve yönetici ekipleriniz için lezzetli, taze ve sağlıklı günlük gurme menüler hazırlayarak ofisinize ulaştırıyoruz.",
      features: ["Sıcak teslimat güvencesi", "Beslenme uzmanı onaylı içerik", "Farklı diyet türlerine uygun seçenekler"],
    },
    {
      icon: <Award className="w-6 h-6 text-primary-accent" />,
      title: "Gurme Yemek Atölyeleri",
      subtitle: "Şeflerimizle Birlikte Pişirin",
      description:
        "Kendi mutfağınızın şefi olun. El yapımı makarnalar, sos hazırlama teknikleri, suşi yapımı veya artisan ekmek pişirme gibi popüler konularda uygulamalı yemek eğitimleri.",
      features: ["Uygulamalı & birebir eğitim", "Kendi tabağını tasarlama imkanı", "Atölye sonu tadım & sertifika"],
    },
  ];

  return (
    <section id="hizmetler" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header content */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-accent">
            HİZMETLERİMİZ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground">
            Gurme Gastronomi & Catering Çözümleri
          </h2>
          <p className="text-foreground/70 leading-relaxed font-light">
            Zelu Co. mutfağında hazırlanan, her damak tadına hitap eden gurme lezzetlerimizi ve profesyonel hizmet seçeneklerimizi keşfedin.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between p-8 sm:p-10 rounded-[2rem] bg-sand-light border border-border-color hover:border-primary-accent/30 hover:bg-card-bg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Subtle hover circle background accent */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-accent/5 rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>

              <div className="space-y-6 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white border border-border-color flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/50">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/75 leading-relaxed font-light pt-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Features bullet list */}
              <div className="mt-8 pt-6 border-t border-border-color/60 relative z-10 flex flex-wrap gap-x-6 gap-y-2">
                {item.features.map((feat, fIdx) => (
                  <span
                    key={fIdx}
                    className="inline-flex items-center text-[11px] font-semibold text-foreground/70"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-accent mr-2"></span>
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner inside services */}
        <div className="mt-16 glass-panel rounded-[2rem] p-8 sm:p-12 border border-border-color flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
              Davetiniz için özel bir menü tasarlamak ister misiniz?
            </h3>
            <p className="text-sm text-foreground/70 font-light">
              Şeflerimizle birlikte davetinizin konseptine en uygun gurme tabakları planlayın.
            </p>
          </div>
          <a
            href="https://wa.me/905000000000?text=Merhaba%2C%20etkinli%C4%9Fimiz%20i%C3%A7in%20%C3%B6zel%20men%C3%BC%20ve%20catering%20teklifi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-8 py-3.5 rounded-full bg-secondary-accent hover:bg-secondary-accent-hover text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md hover:shadow-lg duration-300"
          >
            Teklif İsteyin
          </a>
        </div>

      </div>
    </section>
  );
}
