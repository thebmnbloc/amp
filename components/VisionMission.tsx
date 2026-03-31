export default function VisionMission() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-gradient-to-br from-amp-dark to-black border border-amp-gold/30 rounded-3xl p-12">
            <div className="text-amp-gold text-sm tracking-widest mb-4">OUR VISION</div>
            <h3 className="text-4xl font-bold leading-tight mb-8">
              To become a leading voice in African storytelling through film and media.
            </h3>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-br from-black to-amp-dark border border-amp-gold/30 rounded-3xl p-12">
            <div className="text-amp-gold text-sm tracking-widest mb-4">OUR MISSION</div>
            <h3 className="text-4xl font-bold leading-tight mb-8">
              To create meaningful content that reflects truth, culture, and faith while developing talent and building a creative community.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}