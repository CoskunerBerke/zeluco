import React from "react";
import { ArrowRight, ChefHat } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 bg-gradient-to-b from-[#F5F2EC] to-background overflow-hidden">
      {/* Decorative organic background shapes */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#EAE5DC] rounded-full blur-3xl opacity-60 -translate-x-12 pointer-events-none"></div>
      <div className="absolute bottom-1/12 right-0 w-96 h-96 bg-[#E3DDD3] rounded-full blur-3xl opacity-50 translate-x-24 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Copywriting & CTAs */}
        <div className="flex flex-col space-y-6 max-w-xl animate-fade-in">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-border-color/60 border border-border-color w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-accent animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-widest text-foreground/80 uppercase">
              Doğal Malzemeler & Butik Lezzetler
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] text-foreground">
            Toplantı ve davetlerinize <span className="font-serif italic text-primary-accent">estetik</span> dokunuşlar.
          </h1>

          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed font-light">
            Zelu Co. olarak, hiçbir katkı maddesi, krem şanti veya margarin kullanmadan; en kaliteli ve taze
            malzemelerle hazırladığımız imza tatlılarımızı ve cookielerimizi davetlerinize, toplantılarınıza
            ve işletmenize taşıyoruz.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <a
              href="#menu"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-primary-accent text-white text-sm font-semibold tracking-wide hover:bg-primary-accent-hover transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <ChefHat className="w-4 h-4" />
              <span>Menüyü İncele</span>
            </a>
            <a
              href="#iletisim"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-transparent hover:bg-sand-dark text-foreground border border-border-color text-sm font-semibold tracking-wide transition-all duration-300"
            >
              <span>Teklif Alın</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Key stats or values summary */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border-color/80 mt-4">
            <div>
              <p className="font-serif text-2xl font-bold text-foreground">100%</p>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mt-1 font-medium">Katkısız & Doğal</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-foreground">Glutensiz</p>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mt-1 font-medium">Seçenekler</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-foreground">Toptan</p>
              <p className="text-[11px] uppercase tracking-wider text-foreground/60 mt-1 font-medium">Kafe Siparişi</p>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Image Grid / Large Visual */}
        <div className="relative w-full h-[32rem] sm:h-[38rem] lg:h-[40rem] flex items-center justify-center lg:justify-end animate-fade-in-up">
          {/* Main Showcase Image Frame */}
          <div className="relative w-full sm:w-[90%] md:w-[85%] h-full rounded-[2rem] overflow-hidden border border-border-color shadow-xl bg-sand-dark">
            <img
              src="/images/post_dtbi7radpas_1.jpg"
              alt="İmza Limonlu Tiramisu"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              loading="eager"
            />
            {/* Subtle Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 glass-panel p-5 rounded-2xl flex items-center justify-between shadow-lg border border-white/20">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-foreground/60 font-bold">En Çok Tercih Edilen</p>
                <h3 className="font-serif text-lg font-bold text-foreground mt-0.5">Limonlu Tiramisu</h3>
              </div>
              <span className="text-xs font-semibold text-primary-accent bg-primary-accent/10 px-3 py-1.5 rounded-full border border-primary-accent/20">
                Zelu Co. Özel
              </span>
            </div>
          </div>

          {/* Small Floating Details Card */}
          <div className="absolute top-12 left-0 hidden md:flex items-center space-x-3 glass-panel px-5 py-3.5 rounded-2xl shadow-lg border border-white/20">
            <div className="w-10 h-10 rounded-full bg-secondary-accent/10 flex items-center justify-center text-secondary-accent">
              🍋
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">İmza Lezzet</p>
              <p className="text-[10px] text-foreground/60 mt-0.5">Limonlu Tiramisu</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
