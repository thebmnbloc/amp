export default function Portfolio() {
  const projects = [
    "Daily Sacred Keys (Gospel piano and vocal series)",
    "Short-form video content",
    "Cultural and faith-based media",
    "Early-stage film and storytelling projects"
  ];

  return (
    <section id="portfolio" className="py-24 bg-amp-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amp-gold mb-4">Our Portfolio</h2>
          <p className="text-white/80 text-lg">Featured Projects</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="bg-black rounded-3xl p-10 border border-amp-gold/10 hover:border-amp-gold transition-all">
              <div className="h-2 w-16 bg-amp-gold rounded mb-6"></div>
              <p className="text-2xl leading-tight text-white/90">{project}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-white/60 mb-4">Watch more of our work</p>
          <div className="flex flex-wrap justify-center gap-6 text-amp-gold">
            <a href="https://youtube.com/@awermachmediaproductions" target="_blank" className="hover:underline">YouTube</a>
            <a href="https://www.tiktok.com/@awermach.media.pro" target="_blank" className="hover:underline">TikTok</a>
            <a href="https://www.facebook.com/share/1H8VA1JWuU" target="_blank" className="hover:underline">Facebook</a>
          </div>
        </div>
      </div>
    </section>
  );
}