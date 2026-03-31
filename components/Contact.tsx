export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-amp-dark">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-amp-gold mb-6">Get In Touch</h2>
        <p className="text-xl text-white/80 mb-12">Ready to create something powerful together?</p>

        <div className="bg-black rounded-3xl p-16 border border-amp-gold/10">
          <div className="space-y-8 text-left max-w-md mx-auto">
            <div>
              <p className="text-sm text-white/60 mb-1">EMAIL</p>
              <a href="mailto:awermachproductions@gmail.com" className="text-xl hover:text-amp-gold transition-colors">
                awermachproductions@gmail.com
              </a>
            </div>

            <div>
              <p className="text-sm text-white/60 mb-1">PHONE / WHATSAPP</p>
              <a href="https://wa.me/16073914057" className="text-xl hover:text-amp-gold transition-colors">
                +1 (607) 391-4057
              </a>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 text-sm text-white/50">
            Operating in South Sudan, Uganda, and Kenya
          </div>
        </div>
      </div>
    </section>
  );
}