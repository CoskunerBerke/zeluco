import React from "react";
import { Sparkles, Leaf, Heart } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Sparkles className="w-5 h-5 text-primary-accent" />,
      title: "Özgün Tasarım",
      description:
        "Tasarım stüdyomuzdan çıkan her parça el yapımıdır. Torna tezgahında şekillenen killer ve dökülen soya mumları, tıpkı sizin gibi kendine özgü ve biriciktir.",
    },
    {
      icon: <Leaf className="w-5 h-5 text-primary-accent" />,
      title: "Sürdürülebilirlik",
      description:
        "Doğaya saygılıyız. Mumlarımızda 100% bitkisel soya vaksları ve ahşap fitiller kullanırken, seramik çanaklarımızı tekrar doldurulabilir veya kullanılabilir tasarlıyoruz.",
    },
    {
      icon: <Heart className="w-5 h-5 text-primary-accent" />,
      title: "Zihinsel Dinginlik",
      description:
        "Kile dokunmak ve şekil vermek zihni sakinleştiren terapötik bir süreçtir. Atölyelerimizde üretimin huzurunu paylaşmayı ve topluluk bilinci oluşturmayı amaçlıyoruz.",
    },
  ];

  return (
    <section id="hakkimizda" className="py-24 bg-sand-mid/50 border-y border-border-color/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Text and values list */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary-accent">
                HİKAYEMİZ & DEĞERLERİMİZ
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground">
                Zelu Co. – Hayal Gücünün ve Toprağın Buluştuğu Yer
              </h2>
              <p className="text-foreground/80 leading-relaxed font-light text-base sm:text-lg">
                Zelu Co., elleri çamura bulayıp üretmenin, mum ışığının sakinliğini hissetmenin ve 
                günün koşturmacasından uzaklaşmanın bir sonucu olarak doğdu. Amacımız, evlerinizde 
                kendinize ait samimi köşeler yaratmanıza yardımcı olmak ve atölyelerimizde kille 
                kurulan derin, sessiz bağı hep birlikte deneyimlemek.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 pt-4">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4 p-5 rounded-2xl bg-card-bg border border-border-color/50 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="p-2.5 rounded-xl bg-background flex items-center justify-center">
                    {value.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed font-light">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Image and experience highlights */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-border-color shadow-xl bg-sand-dark">
              <img
                src="https://images.unsplash.com/photo-1576016770956-debb63d900ef?q=80&w=800&auto=format&fit=crop"
                alt="Pottery Wheel Crafting Hands"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"></div>
              
              {/* Overlay Stat Card */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-serif text-3xl font-bold">2.500+</p>
                <p className="text-xs uppercase tracking-widest text-white/80 font-medium mt-1">
                  Özgün El Yapımı Ürün Tasarımı
                </p>
              </div>
            </div>

            {/* Behind the scenes aesthetic label */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center space-x-2 bg-foreground text-background px-6 py-4 rounded-2xl shadow-lg">
              <span className="text-2xl font-serif italic text-primary-accent">Atölye</span>
              <span className="text-xs uppercase tracking-widest font-bold">Havası</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
