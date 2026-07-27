"use client";

import React, { useState } from "react";
import { Utensils, Award, Clock, ArrowRight, Heart, Sparkles, Check } from "lucide-react";

interface MenuItem {
  id: number;
  title: string;
  category: string;
  description: string;
  ingredients: string[];
  pairing: string;
  prepTime: string;
  isPopular: boolean;
}

export default function InteractiveSection() {
  const [activeTab, setActiveTab] = useState<"finedining" | "cocktail">("finedining");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [inquiredStatus, setInquiredStatus] = useState<number | null>(null);

  const fineDiningMenu: MenuItem[] = [
    {
      id: 1,
      title: "Karamelize İncirli Keçi Peynirli Crostini",
      category: "Başlangıç",
      description: "Ekşi mayalı çıtır kroston ekmeği üzerinde, taze keçi peyniri kreması, fırınlanmış incir dilimleri, trüf balı ve taze biberiye dokunuşu.",
      ingredients: ["Ekşi Mayalı Ekmek", "Keçi Peyniri", "Taze İncir", "Trüf Balı", "Biberiye", "Ceviz"],
      pairing: "Köpüklü Şarap veya Beyaz Sek Şaraplar",
      prepTime: "15 Dakika",
      isPopular: true,
    },
    {
      id: 2,
      title: "12 Saat Fırınlanmış Dana Yanak",
      category: "Ana Yemek",
      description: "Kök sebzeler ve taze baharatlarla marine edilerek 12 saat boyunca kısık ateşte fırınlanmış, ipeksi patates püresi ve kendi demi-glace sosu ile servis edilen dana yanak.",
      ingredients: ["Dana Yanak", "Patates", "Kök Kereviz", "Taze Kekik", "Kırmızı Şarap İndirgemesi", "Arpacık Soğan"],
      pairing: "Gövdeli Kırmızı Şaraplar (Örn. Öküzgözü / Syrah)",
      prepTime: "12 Saat (Yavaş Pişirme)",
      isPopular: true,
    },
    {
      id: 3,
      title: "Pancar Püreli Yaban Mersinli Somon",
      category: "Ana Yemek",
      description: "Narenciye sosu eşliğinde fırınlanmış taze somon fileto, kadife dokulu pancar püresi yatağında, fırınlanmış yabani kuşkonmazlar ve ekşi orman meyveleri taneleriyle.",
      ingredients: ["Somon Fileto", "Pancar", "Kuşkonmaz", "Yaban Mersini", "Portakal Sosu", "Kişniş Tohumu"],
      pairing: "Chardonnay veya Roze Şaraplar",
      prepTime: "30 Dakika",
      isPopular: false,
    },
  ];

  const cocktailMenu: MenuItem[] = [
    {
      id: 4,
      title: "Trüflü ve Parmesanlı Çıtır Arancini",
      category: "Parmak Isırığı / Aperatif",
      description: "Dışı çıtır panko kaplı, içi trüf mantarı ezmesi ve erimiş parmesan dolgulu İtalyan pirinç topları, ev yapımı sarımsaklı ve fesleğenli aioli sos ile.",
      ingredients: ["Arborio Pirinci", "Trüf Ezmesi", "Parmesan", "Mozzarella", "Sarımsaklı Aioli", "Panko"],
      pairing: "Hafif Kokteyller veya Köpüklü Şaraplar",
      prepTime: "25 Dakika",
      isPopular: true,
    },
    {
      id: 5,
      title: "Avokado Kremalı Lime Karides Şiş",
      category: "Deniz Mahsülü Aperatif",
      description: "Misket limonu, taze kişniş ve hafif acı pul biberle marine edilerek ızgaralanmış çıtır karides şişleri, taze avokado püresi yatağında.",
      ingredients: ["Jumbo Karides", "Lime (Misket Limonu)", "Avokado", "Taze Kişniş", "Sızma Zeytinyağı", "Kırmızı Biber"],
      pairing: "Mojito veya Ekşi Aromalı Kokteyller",
      prepTime: "15 Dakika",
      isPopular: false,
    },
    {
      id: 6,
      title: "Çilekli Fesleğenli Balzamik Bruschetta",
      category: "Vejetaryen Aperatif",
      description: "Izgara edilmiş baget ekmekleri üzerinde, misket limonuyla sotelenmiş çeri domatesler, taze çilek dilimleri, fesleğen yaprakları ve yıllandırılmış balzamik glaze.",
      ingredients: ["Baget Ekmek", "Çeri Domates", "Taze Çilek", "Fesleğen", "Sarımsak", "Balzamik Sirke"],
      pairing: "Aperol Spritz veya Meyveli Mocktailler",
      prepTime: "12 Dakika",
      isPopular: true,
    },
  ];

  const activeMenu = activeTab === "finedining" ? fineDiningMenu : cocktailMenu;

  const handleInquiry = (item: MenuItem) => {
    setInquiredStatus(item.id);
    setTimeout(() => setInquiredStatus(null), 3000);

    const text = `Merhaba Zelu Co.! Davetimiz için "${item.title}" tabağını içeren özel bir catering menüsü planlamak istiyoruz. Bilgi alabilir miyiz?`;
    const url = `https://wa.me/905000000000?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="menu" className="py-24 bg-sand-mid/40 border-t border-border-color">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header content */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-accent">
            MENÜ PLANLAYICI & GURME SEÇENEKLER
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground">
            Davet Menünüzü Şekillendirin
          </h2>
          <p className="text-foreground/75 leading-relaxed font-light">
            Etkinliğinizin ruhuna en uygun tabakları seçin. Şeflerimizin imza lezzetlerini inceleyin, beğendiğiniz tabakları seçerek doğrudan teklif talebi oluşturun.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-sand-dark border border-border-color shadow-inner">
            <button
              onClick={() => {
                setActiveTab("finedining");
                setSelectedItem(null);
              }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "finedining"
                  ? "bg-foreground text-background shadow-md"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>Fine Dining Menü</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("cocktail");
                setSelectedItem(null);
              }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "cocktail"
                  ? "bg-foreground text-background shadow-md"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Kokteyl & Finger Food</span>
            </button>
          </div>
        </div>

        {/* Layout list and details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Menu Items */}
          <div className="lg:col-span-7 space-y-4">
            {activeMenu.map((item) => {
              const isSelected = selectedItem === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(isSelected ? null : item.id)}
                  className={`cursor-pointer p-6 rounded-2xl border text-left transition-all duration-300 ${
                    isSelected
                      ? "bg-card-bg border-primary-accent shadow-md scale-[1.01]"
                      : "bg-card-bg border-border-color hover:border-foreground/20 hover:shadow-sm"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center space-x-2">
                        <span className="inline-flex items-center text-xs font-medium text-primary-accent bg-primary-accent/5 px-2.5 py-0.5 rounded-full border border-primary-accent/10">
                          {item.category}
                        </span>
                        {item.isPopular && (
                          <span className="text-[9px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full uppercase tracking-wider">
                            Şefin İmzası
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-xs text-foreground/50 flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        Hazırlık Süresi: {item.prepTime}
                      </p>
                    </div>

                    <div className="w-full sm:w-auto text-right">
                      <span className="text-xs text-primary-accent font-semibold group-hover:underline flex items-center justify-end">
                        Detaylar & İçerik <ArrowRight className="w-3 h-3 ml-1" />
                      </span>
                    </div>
                  </div>

                  {/* Expandable details */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isSelected ? "max-h-80 mt-5 pt-5 border-t border-border-color" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm text-foreground/80 leading-relaxed font-light mb-4">
                      {item.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div>
                        <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-1.5">Malzemeler</p>
                        <div className="flex flex-wrap gap-2">
                          {item.ingredients.map((ing, iIdx) => (
                            <span
                              key={iIdx}
                              className="inline-flex items-center text-xs bg-sand-light border border-border-color text-foreground/75 px-3 py-1 rounded-full"
                            >
                              <Check className="w-3 h-3 text-secondary-accent mr-1" />
                              {ing}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest mb-1">Şefin Eşleştirme Önerisi</p>
                        <p className="text-xs text-secondary-accent font-medium">{item.pairing}</p>
                      </div>
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleInquiry(item);
                        }}
                        className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition-all duration-300 ${
                          inquiredStatus === item.id
                            ? "bg-green-600 text-white"
                            : "bg-foreground text-background hover:bg-primary-accent"
                        }`}
                      >
                        {inquiredStatus === item.id ? (
                          <span>Talebiniz Alındı...</span>
                        ) : (
                          <span>Menüye Ekle & Teklif Al</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Quote / Helper Panel */}
          <div className="lg:col-span-5 p-8 rounded-[2rem] bg-card-bg border border-border-color shadow-sm space-y-6">
            <h4 className="font-serif text-xl font-bold text-foreground flex items-center">
              <Award className="w-5 h-5 mr-2 text-primary-accent" />
              Menü Nasıl Planlanır?
            </h4>
            
            <ul className="space-y-4 text-sm text-foreground/80 font-light">
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-secondary-accent/10 text-secondary-accent flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">1</span>
                <span><strong>Tabaklarınızı Seçin:</strong> Davet konseptinize uygun başlangıç, ara sıcak ve ana yemekleri belirleyin.</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-secondary-accent/10 text-secondary-accent flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">2</span>
                <span><strong>Kişi Sayısı & Konsept:</strong> WhatsApp yönlendirmesiyle kişi sayısı, tarih ve ek taleplerinizi şefimize iletin.</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-secondary-accent/10 text-secondary-accent flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">3</span>
                <span><strong>Özel Teklif Alın:</strong> Şefimiz, belirlediğiniz tabaklara ve malzeme maliyetlerine göre size özel catering teklifini iletsin.</span>
              </li>
            </ul>

            <div className="p-4 rounded-xl bg-sand-light border border-border-color flex items-center space-x-3 text-xs text-foreground/60">
              <Heart className="w-5 h-5 text-primary-accent flex-shrink-0" />
              <span>Gıda intoleransları veya özel diyet gereksinimlerinizi (vejetaryen, vegan, glutensiz) şeflerimize bildirebilirsiniz.</span>
            </div>

            <div className="pt-4 border-t border-border-color text-center">
              <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-semibold mb-2">ÖZEL ETKİNLİK TALEBİ</p>
              <a
                href="https://wa.me/905000000000?text=Merhaba%2C%20b%C3%BCy%C3%BCk%20bir%20etkinlik%20%2F%20lansman%20i%C3%A7in%20kapsaml%C4%B1%20catering%20men%C3%BCs%C3%BC%20planlamak%20istiyoruz."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-semibold text-primary-accent hover:underline"
              >
                Grup veya Lansman Talebi İletin →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
