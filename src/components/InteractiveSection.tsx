"use client";

import React, { useState } from "react";
import { Calendar, Clock, Users, Flame, Palette, CheckCircle } from "lucide-react";

interface Workshop {
  id: number;
  title: string;
  date: string;
  time: string;
  duration: string;
  capacity: number;
  reserved: number;
  price: string;
  description: string;
}

export default function InteractiveSection() {
  const [activeTab, setActiveTab] = useState<"ceramics" | "candles">("ceramics");
  const [selectedWorkshop, setSelectedWorkshop] = useState<number | null>(null);
  const [bookedStatus, setBookedStatus] = useState<number | null>(null);

  const ceramicsWorkshops: Workshop[] = [
    {
      id: 1,
      title: "Tornada İlk Tanışma Atölyesi",
      date: "1 Ağustos Cuma",
      time: "14:00 - 17:00",
      duration: "3 Saat",
      capacity: 6,
      reserved: 4,
      price: "₺1.850",
      description: "Çömlekçi tornasında çamur merkezlemeyi ve ilk bardağınızı şekillendirmeyi deneyimleyin. Eğitmenimiz birebir eşlik edecektir.",
    },
    {
      id: 2,
      title: "El Şekillendirme & Pinch Pot Vazo",
      date: "3 Ağustos Pazar",
      time: "11:00 - 14:00",
      duration: "3 Saat",
      capacity: 8,
      reserved: 7,
      price: "₺1.500",
      description: "Hiçbir alet kullanmadan sadece el teknikleriyle organik formlu küçük bir vazo ve tütsülük tasarlayın. En doğal çamur bağı.",
    },
    {
      id: 3,
      title: "Sırlama ve Boyama Eğitimi",
      date: "9 Ağustos Cumartesi",
      time: "15:00 - 17:30",
      duration: "2.5 Saat",
      capacity: 10,
      reserved: 5,
      price: "₺1.300",
      description: "Fırından çıkmış ilk bisküvilerinizi sıvı sırlar ve renkli oksitlerle boyayarak sırlama fırınımıza hazır hale getirin.",
    },
  ];

  const candlesWorkshops: Workshop[] = [
    {
      id: 4,
      title: "Kendi Soya Mumunu Tasarla",
      date: "2 Ağustos Cumartesi",
      time: "13:00 - 15:30",
      duration: "2.5 Saat",
      capacity: 8,
      reserved: 4,
      price: "₺1.400",
      description: "Bitkisel esansiyel yağları harmanlayın, ahşap fitili seçin ve stüdyomuz yapımı beton kaplara kendi soya mumunuzu dökün.",
    },
    {
      id: 5,
      title: "Aromaterapi & Meditasyon Mum Atölyesi",
      date: "8 Ağustos Cuma",
      time: "18:30 - 20:30",
      duration: "2 Saat",
      capacity: 8,
      reserved: 6,
      price: "₺1.600",
      description: "Dinginleştirici lavanta, adaçayı ve günlük kokularını harmanlayarak meditasyon seanslarınız için doğal terapötik mum tasarlayın.",
    },
  ];

  const currentWorkshops = activeTab === "ceramics" ? ceramicsWorkshops : candlesWorkshops;

  const handleBook = (workshop: Workshop) => {
    // Show a temporary success state
    setBookedStatus(workshop.id);
    setTimeout(() => setBookedStatus(null), 3000);

    // Format WhatsApp text redirect
    const formattedText = `Merhaba, Zelu Co.! ${workshop.date} tarihindeki "${workshop.title}" atölyesi için rezervasyon yaptırmak istiyorum. Kontenjan durumunu öğrenebilir miyim?`;
    const whatsappUrl = `https://wa.me/905000000000?text=${encodeURIComponent(formattedText)}`;
    
    // Open in new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="takvim" className="py-24 bg-sand-mid/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Content */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary-accent">
            RESERVASYON & TAKVİM
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground">
            Yaklaşan Atölye Programı
          </h2>
          <p className="text-foreground/75 leading-relaxed font-light">
            Sınırlı kontenjan ile butik tarzda gerçekleştirdiğimiz atölyelerimizde kendinize vakit ayırın. Seçtiğiniz programa tıklayarak kolayca WhatsApp üzerinden yerinizi ayırtın.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-sand-dark border border-border-color shadow-inner">
            <button
              onClick={() => {
                setActiveTab("ceramics");
                setSelectedWorkshop(null);
              }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "ceramics"
                  ? "bg-foreground text-background shadow-md"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Seramik Atölyeleri</span>
            </button>
            <button
              onClick={() => {
                setActiveTab("candles");
                setSelectedWorkshop(null);
              }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "candles"
                  ? "bg-foreground text-background shadow-md"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>Soya Mumu Atölyeleri</span>
            </button>
          </div>
        </div>

        {/* Workshop Cards List & Details Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Workshop List */}
          <div className="lg:col-span-7 space-y-4">
            {currentWorkshops.map((ws) => {
              const remaining = ws.capacity - ws.reserved;
              const isFull = remaining <= 0;
              const isSelected = selectedWorkshop === ws.id;

              return (
                <div
                  key={ws.id}
                  onClick={() => setSelectedWorkshop(isSelected ? null : ws.id)}
                  className={`cursor-pointer p-6 rounded-2xl border text-left transition-all duration-300 ${
                    isSelected
                      ? "bg-card-bg border-primary-accent shadow-md scale-[1.01]"
                      : "bg-card-bg border-border-color hover:border-foreground/20 hover:shadow-sm"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="inline-flex items-center text-xs font-medium text-primary-accent bg-primary-accent/5 px-2 py-0.5 rounded-full border border-primary-accent/10">
                          {ws.price}
                        </span>
                        {remaining === 1 && (
                          <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full animate-pulse">
                            Son 1 Kontenjan!
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground">
                        {ws.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-foreground/60">
                        <span className="flex items-center">
                          <Calendar className="w-3.5 h-3.5 mr-1" />
                          {ws.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3.5 h-3.5 mr-1" />
                          {ws.time}
                        </span>
                      </div>
                    </div>

                    <div className="w-full sm:w-auto flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2">
                      <span className="text-xs text-foreground/60">
                        Kontenjan: {ws.reserved}/{ws.capacity} Dolu
                      </span>
                      <div className="w-24 bg-sand-dark h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${isFull ? "bg-red-500" : "bg-secondary-accent"}`}
                          style={{ width: `${(ws.reserved / ws.capacity) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable info block */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isSelected ? "max-h-60 mt-5 pt-5 border-t border-border-color" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm text-foreground/80 leading-relaxed font-light mb-4">
                      {ws.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-foreground/50">Süre: {ws.duration}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBook(ws);
                        }}
                        disabled={isFull}
                        className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center space-x-2 transition-all duration-300 ${
                          isFull
                            ? "bg-sand-dark text-foreground/40 cursor-not-allowed"
                            : bookedStatus === ws.id
                            ? "bg-green-600 text-white"
                            : "bg-foreground text-background hover:bg-primary-accent"
                        }`}
                      >
                        {bookedStatus === ws.id ? (
                          <>
                            <CheckCircle className="w-3.5 h-3.5" />
                            <span>Yönlendiriliyor...</span>
                          </>
                        ) : isFull ? (
                          <span>Dolu</span>
                        ) : (
                          <span>WhatsApp ile Rezerve Et</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Mini Info Card & Guarantee */}
          <div className="lg:col-span-5 p-8 rounded-[2rem] bg-card-bg border border-border-color shadow-sm space-y-6">
            <h4 className="font-serif text-xl font-bold text-foreground">Rezervasyon Bilgilendirmesi</h4>
            
            <ul className="space-y-4 text-sm text-foreground/80 font-light">
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-secondary-accent/10 text-secondary-accent flex items-center justify-center mr-3 mt-0.5 text-xs">✓</span>
                <span><strong>Ön Ödemesiz Kayıt:</strong> Kurs gününe kadar yerinizi WhatsApp üzerinden kesinleştiriyoruz.</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-secondary-accent/10 text-secondary-accent flex items-center justify-center mr-3 mt-0.5 text-xs">✓</span>
                <span><strong>Özel Etkinlikler:</strong> Doğum günü, kurumsal ekip etkinlikleri veya arkadaş grupları için stüdyoyu kapatabiliyoruz.</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-secondary-accent/10 text-secondary-accent flex items-center justify-center mr-3 mt-0.5 text-xs">✓</span>
                <span><strong>Fırınlama Süreci:</strong> Ürettiğiniz ürünler fırınlandıktan sonra (yaklaşık 10-15 gün sonra) stüdyodan teslim alınır.</span>
              </li>
            </ul>

            <div className="p-4 rounded-xl bg-sand-light border border-border-color flex items-center space-x-3 text-xs text-foreground/60">
              <Users className="w-5 h-5 text-primary-accent flex-shrink-0" />
              <span>Sınıflarımız verimlilik açısından 6-8 kişi ile sınırlandırılmıştır.</span>
            </div>

            <div className="pt-4 border-t border-border-color text-center">
              <p className="text-[10px] text-foreground/40 uppercase tracking-widest font-semibold mb-2">ÖZEL ETKİNLİK TALEBİ</p>
              <a
                href="https://wa.me/905000000000?text=Merhaba%2C%20grup%20etkinli%C4%9Fi%20veya%20st%C3%BCdyo%20kiralama%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-semibold text-primary-accent hover:underline"
              >
                Grup rezervasyonu için hemen görüşün →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
