"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/intro-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Awermach Media Productions"
            width={420}
            height={140}
            className="drop-shadow-2xl"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-amp-gold">
          Driven by Light.<br />Powered with Purpose.
        </h1>

        <p className="max-w-2xl mx-auto text-xl text-white/90 mb-10">
          We are a creative media company that tells real and powerful stories through film, music, and visual content, rooted in culture, faith, and purpose.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-amp-gold hover:bg-amber-400 text-black font-semibold rounded-xl transition-all text-lg"
          >
            Work with Us
          </a>
          <a
            href="#join"
            className="px-8 py-4 border-2 border-amp-gold hover:bg-amp-gold hover:text-black font-semibold rounded-xl transition-all text-lg"
          >
            Join AMP Productions
          </a>
        </div>

        <p className="mt-8 text-sm text-white/60">Scroll to explore ↓</p>
      </div>
    </section>
  );
}