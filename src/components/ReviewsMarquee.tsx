import React from "react";
import { Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  date: string;
  text: string;
  rating: number;
}

export default function ReviewsMarquee() {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Buse Kara",
      date: "2 hafta önce",
      text: "Tornada ilk tanışma atölyesine katıldım. Kile dokunmak gerçekten müthiş bir terapiymiş. Stüdyonun sakinliği, eğitmenlerin sabrı ve ilgisi çok tatlıydı.",
      rating: 5,
    },
    {
      id: 2,
      name: "Murat Yılmaz",
      date: "1 ay önce",
      text: "Zelu Co.'nun soya mumlarına bayılıyorum. Beton kapları evimin minimal dekoruna çok yakıştı. Kokusu bittikten sonra da kasesini saksı olarak kullanıyorum.",
      rating: 5,
    },
    {
      id: 3,
      name: "Elif Şen",
      date: "3 hafta önce",
      text: "Kurumsal etkinlik için şirketçe stüdyoyu kapattık. Harika bir ekip çalışması oldu. Herkes kendi bardağını tasarladı, sabırsızlıkla fırından çıkmasını bekliyoruz.",
      rating: 5,
    },
    {
      id: 4,
      name: "Deniz Aksoy",
      date: "2 ay önce",
      text: "Japandi tarzını evime yansıtmak istiyordum, aradığım vazoyu burada buldum. Sır detayları, toprak rengi tonları ve mat dokusu kelimenin tam anlamıyla mükemmel.",
      rating: 5,
    },
    {
      id: 5,
      name: "Aylin Kaya",
      date: "1 hafta önce",
      text: "Soya mumu yapım atölyesine katıldım. Hangi yağları karıştıracağımızı ve esans notalarını detaylıca anlattılar. Kendi yaptığım meditasyon mumunu keyifle yakıyorum.",
      rating: 5,
    },
    {
      id: 6,
      name: "Kaan Çelik",
      date: "3 ay önce",
      text: "Son derece profesyonel ve sıcak bir ortam. Tornada çamur merkezleme işini nihayet kıvırabildim. Hafta sonunu değerlendirmek için harika bir atölye.",
      rating: 5,
    },
  ];

  // Duplicate reviews to create a seamless loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section id="yorumlar" className="py-20 bg-background border-t border-border-color overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-accent">
            MÜŞTERİ YORUMLARI
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground">
            Stüdyomuz Hakkında Ne Dediler?
          </h2>
        </div>
        <div className="flex items-center justify-center md:justify-end space-x-2 bg-sand-mid px-4 py-2.5 rounded-full border border-border-color">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-xs font-semibold text-foreground">
            Google Haritalar'da 4.9/5 Puan (120+ Yorum)
          </span>
        </div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden py-4 mask-gradient">
        {/* Absolute Gradients for Fade effect at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track */}
        <div className="marquee-track space-x-6">
          {duplicatedReviews.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="flex-shrink-0 w-80 sm:w-96 p-6 rounded-2xl bg-card-bg border border-border-color shadow-sm hover:shadow-md hover:border-primary-accent/20 transition-all duration-300 select-none"
            >
              {/* Card Header */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h4 className="font-serif text-sm font-bold text-foreground">{review.name}</h4>
                  <p className="text-[10px] text-foreground/50">{review.date}</p>
                </div>
                {/* 5 Stars */}
                <div className="flex text-amber-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed font-light italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
