import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-amp-gold/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-amp-gold text-2xl font-bold">Awermach Media Productions</p>
            <p className="text-white/60 text-sm mt-2">
              Driven by Light. Powered with Purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#about" className="hover:text-amp-gold">About Us</a>
              <a href="#services" className="hover:text-amp-gold">Services</a>
              <a href="#portfolio" className="hover:text-amp-gold">Portfolio</a>
              <a href="#join" className="hover:text-amp-gold">Join AMP</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <p className="text-sm">
              <a href="mailto:awermachproductions@gmail.com" className="hover:text-amp-gold">
                awermachproductions@gmail.com
              </a>
            </p>
            <p className="text-sm mt-1">
              <a href="https://wa.me/16073914057" className="hover:text-amp-gold">
                +1 (607) 391-4057
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-white/40">
          © 2026 Awermach Media Productions (AMP). All Rights Reserved.
          <br />
          Developed by{" "}
          <a
            href="#" // ← Replace # with your link when ready
            className="text-amp-gold hover:underline"
          >
            Bior Malual
          </a>
        </div>
      </div>
    </footer>
  );
}