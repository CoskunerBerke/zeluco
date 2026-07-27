"use client";

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  category: string;
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images: GalleryImage[] = [
    {
      id: 0,
      url: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
      alt: "Közlenmiş sebzeler eşliğinde yavaş pişmiş dana yanak ve sos tabaklaması",
      category: "İmza Tabaklar",
    },
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
      alt: "Özel davet için hazırlanmış estetik kokteyl ikram masası ve aperatifler",
      category: "Catering",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop",
      alt: "Şefin mutfağında hazırlanan el yapımı taze tagliatelle makarnası",
      category: "Mutfak",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
      alt: "Taş fırından yeni çıkmış, çıtır kabuklu ekşi mayalı köy ekmeği",
      category: "Fırın",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop",
      alt: "Orman meyveleri ve çikolata ile süslenmiş butik şef tatlısı sunumu",
      category: "Tatlılar",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
      alt: "Yerel bahçelerden toplanmış taze yeşillikler ve organik salata malzemeleri",
      category: "Malzemeler",
    },
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden"; // disable background scroll
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "unset"; // restore scroll
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + images.length) % images.length);
    }
  };

  return (
    <section id="galeri" className="py-24 bg-sand-mid/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header content */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-accent">
            GÖRSEL GALERİ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground">
            Mutfağımızdan ve Davetlerden Kareler
          </h2>
          <p className="text-foreground/75 leading-relaxed font-light">
            Zelu Co. mutfağındaki hazırlık süreçlerini, tabaklarımızın göz alıcı sunumlarını ve estetik catering köşelerimizi inceleyin.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {images.map((img) => (
            <div
              key={img.id}
              onClick={() => openLightbox(img.id)}
              className="masonry-item relative group cursor-pointer overflow-hidden rounded-[1.5rem] border border-border-color bg-sand-dark shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Hover Dark Overlay & Icons */}
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <span className="p-2 rounded-full bg-white/25 backdrop-blur-sm border border-white/20 text-white">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>
                <div className="text-left text-white space-y-1">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/70">
                    {img.category}
                  </span>
                  <h4 className="font-serif text-sm font-semibold leading-snug">
                    {img.alt}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
            aria-label="Kapat"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-4 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
            aria-label="Önceki"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Large Image Frame */}
          <div className="relative max-w-4xl max-h-[80vh] px-4 flex flex-col items-center">
            <img
              src={images[lightboxIndex].url}
              alt={images[lightboxIndex].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10 select-none animate-fade-in"
              onClick={(e) => e.stopPropagation()} // stop close trigger
            />
            {/* Description under image */}
            <p className="text-white/80 text-xs sm:text-sm font-light mt-4 text-center select-none bg-black/40 px-6 py-2 rounded-full border border-white/5">
              {images[lightboxIndex].alt}
            </p>
          </div>

          {/* Right Navigation */}
          <button
            onClick={nextImage}
            className="absolute right-4 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50"
            aria-label="Sonraki"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
}
