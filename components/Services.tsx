export default function Services() {
  const services = [
    "Film Production", "Music Production", "Documentary", "Podcast",
    "Videography", "Photography", "Gospel Content", "Casting"
  ];

  return (
    <section id="services" className="py-24 bg-amp-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amp-gold mb-4">Our Services</h2>
          <p className="text-xl text-white/80 max-w-xl mx-auto">
            From cinematic storytelling to music production and visual media, AMP brings ideas to life through creative expression that is both meaningful and impactful.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-black border border-amp-gold/10 hover:border-amp-gold rounded-2xl p-8 transition-all hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-xl bg-amp-gold/10 flex items-center justify-center mb-6 group-hover:bg-amp-gold/20 transition-colors">
                <span className="text-3xl text-amp-gold">★</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Professional {service.toLowerCase()} crafted with purpose and excellence.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}