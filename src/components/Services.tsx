import React from "react";
import { Palette, Flame, Layers, Sparkles } from "lucide-react";

export default function Services() {
  const items = [
    {
      icon: <Palette className="w-6 h-6 text-primary-accent" />,
      title: "Seramik Yapım Atölyeleri",
      subtitle: "Tek Seferlik & Dönemlik Kurslar",
      description:
        "Profesyonel eğitmenlerimiz eşliğinde tornada kile şekil vermeyi, el şekillendirme ve sırlama tekniklerini öğrenin. Deneyime ihtiyacınız yok, çamurun dinginliğine odaklanın.",
      features: ["Tüm malzemeler dahil", "Torna & el şekillendirme", "Fırınlama stüdyomuza ait"],
    },
    {
      icon: <Flame className="w-6 h-6 text-primary-accent" />,
      title: "Doğal Soya Mum Koleksiyonu",
      subtitle: "Tasarım Seramik Çanaklarda",
      description:
        "100% doğal soya vaksından, özel esanslar ve ahşap fitillerle hazırlanan mum koleksiyonu. Evinizde sürdürülebilir, sıcak ve büyüleyici bir atmosfer yaratın.",
      features: ["Doğal soya vaksları", "Temiz yanan ahşap fitil", "Tekrar doldurulabilir seramik kaplar"],
    },
    {
      icon: <Layers className="w-6 h-6 text-primary-accent" />,
      title: "Kurumsal & Özel Siparişler",
      subtitle: "Bespoke Restoran & Ev Seramikleri",
      description:
        "Kafe, restoran veya özel markanız için kurumsal kimliğinizi yansıtan tabaklar, kupalar, vazolar veya mumlar. Tasarımdan fırınlamaya sizinle ortak çalışıyoruz.",
      features: ["Özel renk & sır çalışması", "Logo & marka damgalama", "Toptan alımlara özel fiyatlar"],
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary-accent" />,
      title: "Açık Stüdyo & Üyelik",
      subtitle: "Serbest Çalışma Alanı",
      description:
        "Daha önce deneyimi olan seramik severler için stüdyomuzun torna, masa ve ekipmanlarını kiralıyoruz. Fırınlama hizmetlerimizden üyelere özel avantajlarla yararlanın.",
      features: ["Haftalık & aylık üyelikler", "Fırınlama önceliği", "Gelişmiş alet ve ekipman kullanımı"],
    },
  ];

  return (
    <section id="hizmetler" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header content */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-accent">
            NELER SUNUYORUZ?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground">
            Hizmetlerimiz & Tasarım Çözümlerimiz
          </h2>
          <p className="text-foreground/70 leading-relaxed font-light">
            Zelu Co. stüdyosunda kili sanata dönüştürmek, ışığı kokularla taçlandırmak ve üreterek sakinleşmek için geliştirdiğimiz tüm seçenekleri keşfedin.
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
              Size veya markanıza özel tasarımlar mı hayal ediyorsunuz?
            </h3>
            <p className="text-sm text-foreground/70 font-light">
              Fikirlerinizi çamura döküp sizin için fırınlayalım. Bizimle iletişime geçin.
            </p>
          </div>
          <a
            href="https://wa.me/905000000000?text=Merhaba%2C%20%C3%B6zel%20sipari%C5%9F%20%2F%20tasar%C4%B1m%20hakk%C4%B1nda%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-8 py-3.5 rounded-full bg-secondary-accent hover:bg-secondary-accent-hover text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md hover:shadow-lg duration-300"
          >
            Fikir Alın
          </a>
        </div>

      </div>
    </section>
  );
}
