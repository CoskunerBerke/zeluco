import React from "react";
import { Sparkles, Leaf, Heart } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Leaf className="w-5 h-5 text-primary-accent" />,
      title: "Mevsimsel & Taze",
      description:
        "Yerel üreticilerimizden günlük olarak tedarik ettiğimiz taze, mevsimsel malzemeleri kullanıyoruz. Dondurulmuş veya hazır gıdalar mutfağımıza kesinlikle giremez.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-primary-accent" />,
      title: "Kreatif Sunum Estetiği",
      description:
        "Yemeğin lezzeti kadar sunumunun da bir hikaye anlatması gerektiğine inanıyoruz. Her tabağı, renklerin ve dokuların mükemmel uyumuyla tasarlıyoruz.",
    },
    {
      icon: <Heart className="w-5 h-5 text-primary-accent" />,
      title: "Sürdürülebilir Mutfak",
      description:
        "Sıfır atık (zero-waste) prensibiyle çalışıyor, mutfak atıklarımızı kompost gübre olarak geri kazandırıyoruz. Servislerimizde tamamen doğa dostu ambalajlar tercih ediyoruz.",
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
                MUTFAK FELSEFEMİZ
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-foreground">
                Zelu Co. – Lezzetin ve Estetiğin Buluştuğu Butik Mutfak
              </h2>
              <p className="text-foreground/80 leading-relaxed font-light text-base sm:text-lg">
                Zelu Co., malzemelerin en doğal haline duyulan saygının ve tabak tasarlama tutkusunun bir
                sonucu olarak doğdu. Misafirlerimize sıradan bir yemek değil, her bir ısırığında özenle
                seçilmiş tatların ve aromaların mükemmel dengesini hissedecekleri özel bir gastronomi
                deneyimi sunmayı amaçlıyoruz.
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
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=800&auto=format&fit=crop"
                alt="Chef preparing fresh ingredients"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"></div>
              
              {/* Overlay Stat Card */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-serif text-3xl font-bold">15+</p>
                <p className="text-xs uppercase tracking-widest text-white/80 font-medium mt-1">
                  Mutfak Yıllık Sektör Deneyimi
                </p>
              </div>
            </div>

            {/* Behind the scenes aesthetic label */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center space-x-2 bg-foreground text-background px-6 py-4 rounded-2xl shadow-lg">
              <span className="text-2xl font-serif italic text-primary-accent">Şefin</span>
              <span className="text-xs uppercase tracking-widest font-bold">Mutfağı</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
