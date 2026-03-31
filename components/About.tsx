export default function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amp-gold mb-4">About Us</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Awermach Media Productions (AMP) is a creative media company focused on telling meaningful stories through film, music, and visual media.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-semibold mb-6 text-amp-gold">Our Story</h3>
            <p className="text-lg leading-relaxed text-white/90 mb-8">
              We exist to reflect truth, culture, and faith in a way that connects deeply with people and communities. 
              Founded in the United States and operating across South Sudan, Uganda, and Kenya.
            </p>
            <div className="space-y-4 text-white/80">
              <p><strong>Where Founded:</strong> United States</p>
              <p><strong>Where Operating:</strong> South Sudan, Uganda, and Kenya</p>
              <p><strong>Core Belief:</strong> Stories have the power to heal, to challenge, and to inspire—and we are committed to telling them with honesty and purpose.</p>
            </div>
          </div>

          <div className="bg-amp-dark border border-amp-gold/20 rounded-3xl p-10">
            <h4 className="text-amp-gold text-2xl mb-6">Our Mission</h4>
            <ul className="space-y-6 text-lg">
              <li className="flex gap-4">
                <span className="text-amp-gold text-2xl">✦</span>
                <span>To create meaningful content that reflects truth, culture, and faith while developing talent and building a creative community.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}