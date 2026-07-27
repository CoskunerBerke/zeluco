"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, MessageSquareCode } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hakkımızda", href: "#hakkimizda" },
    { name: "Hizmetler", href: "#hizmetler" },
    { name: "Atölye Takvimi", href: "#takvim" },
    { name: "Galeri", href: "#galeri" },
    { name: "Yorumlar", href: "#yorumlar" },
    { name: "İletişim", href: "#iletisim" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass-panel py-4 shadow-sm border-b border-border-color"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <span className="font-serif text-2xl font-bold tracking-widest text-foreground hover:opacity-80 transition-opacity">
            ZELU<span className="text-primary-accent">.</span>CO
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-primary-accent transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* WhatsApp CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/905000000000?text=Merhaba%2C%20at%C3%B6lye%20rezervasyonu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-primary-accent text-white text-xs font-semibold uppercase tracking-wider hover:bg-primary-accent-hover transition-colors shadow-md hover:shadow-lg duration-300"
          >
            <MessageSquareCode className="w-4 h-4" />
            <span>WhatsApp Randevu</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground/80 hover:text-primary-accent transition-colors focus:outline-none"
          aria-label="Menüyü Aç"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 z-40 w-72 max-w-full glass-panel shadow-2xl border-l border-border-color transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "0", height: "100vh" }}
      >
        <div className="flex flex-col h-full p-8 justify-between">
          <div>
            <div className="flex justify-between items-center mb-8">
              <span className="font-serif text-xl font-bold tracking-widest">
                ZELU<span className="text-primary-accent">.</span>CO
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-foreground/80 hover:text-primary-accent transition-colors"
                aria-label="Menüyü Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium tracking-wide text-foreground/90 hover:text-primary-accent transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <a
              href="https://wa.me/905000000000?text=Merhaba%2C%20at%C3%B6lye%20rezervasyonu%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full py-3.5 rounded-full bg-primary-accent text-white text-xs font-semibold uppercase tracking-wider hover:bg-primary-accent-hover transition-colors shadow-md duration-300"
            >
              <MessageSquareCode className="w-4 h-4" />
              <span>WhatsApp Randevu</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
