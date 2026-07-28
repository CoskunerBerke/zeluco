import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import InteractiveSection from "@/components/InteractiveSection";
import Gallery from "@/components/Gallery";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import Contact from "@/components/Contact";
import { MessageSquareCode, Instagram } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <InteractiveSection />
        <Gallery />
        <ReviewsMarquee />
        <Contact />
      </main>

      {/* Premium minimal footer */}
      <footer className="bg-[#1D1B18] text-[#FAF8F5] py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold tracking-widest text-white">
              ZELU<span className="text-primary-accent">.</span>CO
            </h3>
            <p className="text-xs text-[#FAF8F5]/60 font-light leading-relaxed">
              Kreatif sunum estetiği ve gurme gastronomi anlayışıyla butik catering hizmetleri ve özel şef deneyimleri sunan yemek stüdyosu.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1">Sosyal Medya</p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/zelu_co/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary-accent border border-white/10 transition-all duration-300"
                aria-label="Instagram Profilimizi Ziyaret Edin"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/905067740924?text=Merhaba%2C%20zelu%20co%20catering%20ve%20men%C3%BC%20planlama%20hakk%C4%B1nda%20teklif%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary-accent border border-white/10 transition-all duration-300"
                aria-label="WhatsApp İletişim Hattı"
              >
                <MessageSquareCode className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Copyright and meta */}
          <div className="md:text-right space-y-2">
            <p className="text-xs text-[#FAF8F5]/50 font-light">
              © {new Date().getFullYear()} Zelu Co. Tüm Hakları Saklıdır.
            </p>
            <p className="text-[10px] text-[#FAF8F5]/30 uppercase tracking-widest font-semibold">
              Ankara / Türkiye
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}
