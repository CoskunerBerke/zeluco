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
  image: string;
}

export default function InteractiveSection() {
  const [activeTab, setActiveTab] = useState<"cakes" | "cookies">("cakes");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [inquiredStatus, setInquiredStatus] = useState<number | null>(null);

  const cakesMenu: MenuItem[] = [
    {
      id: 1,
      title: "İmza Limonlu Tiramisu",
      category: "İmza Lezzet / Pasta",
      description: "Özenle, hijyenik koşullarda özel olarak hazırlanan, şimdiye kadar yediğiniz tüm tiramisuları sorgulatacak bir lezzet. Hafif dokusu, ferah limon aroması ve enfes tadıyla her kaşıkta farkını hissettirir. Davetlere ve kişisel siparişlere uygundur.",
      ingredients: ["Özel Tiramisu Kreması", "Kedi Dili bisküvi", "Ferah Limon Aroması", "Limon Suyu & Kabuğu", "Doğal Yumurta & Süt"],
      pairing: "Taze Filtre Kahve veya Soğuk Brew",
      prepTime: "Günlük / Taze",
      isPopular: true,
      image: "/images/post_dtbi7radpas_1.jpg",
    },
    {
      id: 2,
      title: "Mini San Sebastian",
      category: "Aperatif / Davet Tatlısı",
      description: "Klasik San Sebastian lezzetini, sunum kolaylığı sağlayan Mini formuna dönüştürdük. Dışı tam kıvamında karamelize yanık, içi ise bulut gibi yumuşak. Tabak ve çatal karmaşasına son veren şık, pratik ve zahmetsiz sunum.",
      ingredients: ["Premium Labne Peyniri", "Taze Süt Ürünleri", "Doğal Krema", "Şeker", "Yumurta"],
      pairing: "Espresso veya Americano",
      prepTime: "Günlük / Taze",
      isPopular: true,
      image: "/images/post_dswjwmcdic8_1.jpg",
    },
    {
      id: 3,
      title: "Bol Çikolatalı Islak Brownie",
      category: "Klasik / Yoğun Çikolata",
      description: "Hiçbir katkı maddesi içermeyen, bol çikolatalı ıslak brownie. En taze malzemelerle hazırladığımız, içinin nemli ve yoğun çikolata dolgulu kıvamıyla çay ve kahve molalarınızın vazgeçilmezi. İşletme, bireysel, kutlama ve toplantı ikramlarına son derece uygundur.",
      ingredients: ["Belçika Çikolatası", "Gerçek Tereyağı", "Kakao", "Yumurta", "Elenmiş Un"],
      pairing: "Sıcak Süt veya Taze Demlenmiş Sade Kahve",
      prepTime: "Günlük / Taze",
      isPopular: false,
      image: "/images/post_dsuhd6bjpna_1.jpg",
    },
  ];

  const cookiesMenu: MenuItem[] = [
    {
      id: 4,
      title: "Bardakta Lokmalık Cookie",
      category: "Taşınabilir Atıştırmalık",
      description: "Mutluluğu bardağa sığdırdık! Gününün her anında yanında taşıyabileceğin, tek lokmalık lezzet bombaları. İster ofiste, ister yürüyüşte, istersen kahve molanda enerjini tazeleyin. Krem şanti ve margarin kullanılmamaktadır. Glütensiz seçeneği mevcuttur.",
      ingredients: ["Çikolata Parçacıkları", "Özel Kurabiye Hamuru", "Tereyağı", "Esmer Şeker", "Glutensiz Un Seçeneği"],
      pairing: "Latte veya Flat White",
      prepTime: "Günlük / Taze",
      isPopular: true,
      image: "/images/post_dsll5bydeuf_1.jpg",
    },
    {
      id: 5,
      title: "Limon Dolgulu Orman Meyveli Cookie",
      category: "Sağlıklı / Meyveli Kurabiye",
      description: "Doğal limon dolgulu, orman meyveli çikolata parçacıklı sağlıklı cookie. İçerisindeki orman meyvesi ekşiliği ile limon dolgusunun muhteşem uyumu. Krem şanti, margarin veya hiçbir katkı maddesi kullanılmamaktadır. Glutensiz versiyonu mevcuttur.",
      ingredients: ["Doğal Limon Dolgusu", "Yaban Mersini & Ahududu", "Çikolata Parçacıkları", "Margarin & Katkı İçermez", "Glutensiz Un Seçeneği"],
      pairing: "Bitki Çayları veya Limonata",
      prepTime: "Günlük / Taze",
      isPopular: true,
      image: "/images/post_dr5ixrwjojt_1.jpg",
    },
    {
      id: 6,
      title: "Orman Meyveli Çikolata Parçacıklı Cookie",
      category: "Sağlıklı / Meyveli Kurabiye",
      description: "Orman meyveli ve bol çikolata parçacıklı sağlıklı cookie. En taze malzemelerle, sıfır katkı maddesiyle ve krem şantisiz/margarinsiz üretilir. Masanızdaki farkı oluşturan detaylar için tasarlandı. Glutensiz versiyonu mevcuttur.",
      ingredients: ["Kurutulmuş Orman Meyveleri", "Bitter Çikolata Parçaları", "Doğal Yulaf/Un Tabanı", "Doğal Bal/Pekmez Tatlandırıcı Seçeneği"],
      pairing: "Melisa veya Papatya Çayı",
      prepTime: "Günlük / Taze",
      isPopular: false,
      image: "/images/post_drzr4khda4c_1.jpg",
    },
  ];

  const activeMenu = activeTab === "cakes" ? cakesMenu : cookiesMenu;

  const handleInquiry = (item: MenuItem) => {
    setInquiredStatus(item.id);
    setTimeout(() => setInquiredStatus(null), 3000);

    const text = `Merhaba Zelu Co.! Davetimiz / işletmemiz için "${item.title}" siparişi vermek ve fiyat/toptan satış teklifi almak istiyoruz. Bilgi alabilir miyiz?`;
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
            Menümüzü Keşfedin
          </h2>
          <p className="text-foreground/75 leading-relaxed font-light">
            Zelu Co.'nun imza lezzetlerini inceleyin. Her biri en kaliteli, taze malzemelerle hazırlanan katkısız lezzetlerimizden dilediğinizi seçip WhatsApp üzerinden teklif alın.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-sand-dark border border-border-color shadow-inner">
            <button
              onClick={() => {
                setActiveTab("cakes");
                setSelectedItem(null);
              }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "cakes"
                  ? "bg-foreground text-background shadow-md"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>Pastalar & Brownieler</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("cookies");
                setSelectedItem(null);
              }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "cookies"
                  ? "bg-foreground text-background shadow-md"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Sağlıklı Cookieler</span>
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
                    <div className="flex items-start space-x-4">
                      {/* Thumbnail Image */}
                      <div className="w-16 h-16 rounded-xl overflow-hidden border border-border-color flex-shrink-0 bg-sand-dark">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center space-x-2">
                          <span className="inline-flex items-center text-[10px] font-medium text-primary-accent bg-primary-accent/5 px-2 py-0.5 rounded-full border border-primary-accent/10">
                            {item.category}
                          </span>
                          {item.isPopular && (
                            <span className="text-[9px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full uppercase tracking-wider">
                              İmza
                            </span>
                          )}
                        </div>
                        <h3 className="font-serif text-base sm:text-lg font-bold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-[10px] text-foreground/50 flex items-center">
                          <Clock className="w-3.5 h-3.5 mr-1" />
                          Hazırlık: {item.prepTime}
                        </p>
                      </div>
                    </div>

                    <div className="w-full sm:w-auto text-right self-center">
                      <span className="text-xs font-semibold text-primary-accent hover:underline flex items-center justify-end">
                        Detaylar & İçerik <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </span>
                    </div>
                  </div>

                  {/* Expandable details */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isSelected ? "max-h-[30rem] mt-5 pt-5 border-t border-border-color" : "max-h-0"
                    }`}
                  >
                    {/* Large image for detail */}
                    <div className="w-full h-48 rounded-xl overflow-hidden mb-4 border border-border-color bg-sand-dark">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>

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
              Neden Zelu Co.?
            </h4>
            
            <ul className="space-y-4 text-sm text-foreground/80 font-light">
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-secondary-accent/10 text-secondary-accent flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">✓</span>
                <span><strong>Sıfır Margarin Politikası:</strong> Tariflerimizde margarin veya bitkisel susuz yağlar kullanılmaz, tamamen taze tereyağı kullanılır.</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-secondary-accent/10 text-secondary-accent flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">✓</span>
                <span><strong>Katkısız & Koruyucusuz:</strong> Ürünlerimizin raf ömrünü uzatan hiçbir kimyasal veya yapay koruyucu içermez.</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-secondary-accent/10 text-secondary-accent flex items-center justify-center mr-3 mt-0.5 text-xs font-bold">✓</span>
                <span><strong>Toptan & Butik Tedarik:</strong> Cafe ve restoranlar için haftalık/günlük taze teslimat planlamaları yapıyoruz.</span>
              </li>
            </ul>

            <div className="p-4 rounded-xl bg-sand-light border border-border-color flex items-center space-x-3 text-xs text-foreground/60">
              <Heart className="w-5 h-5 text-primary-accent flex-shrink-0" />
              <span>Gıda intoleransları veya özel diyet gereksinimlerinizi (vejetaryen, vegan, glutensiz) şeflerimize bildirebilirsiniz.</span>
            </div>

            <div className="pt-4 border-t border-border-color text-center">
              <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-semibold mb-2">TOPLU / TOPTAN SİPARİŞ</p>
              <a
                href="https://wa.me/905000000000?text=Merhaba%2C%20cafemiz%20i%C3%A7in%20mini%20san%20sebastian%20ve%20tiramisu%20toptan%20sat%C4%B1%C5%9F%20ko%C5%9Fullar%C4%B1%20hakk%C4%B1nda%20g%C3%B6r%C3%BC%C5%9Fmek%20istiyoruz."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-semibold text-primary-accent hover:underline"
              >
                İşletmeniz için toptan teklif isteyin →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
