import Image from "next/image";

export default function Team() {
  const team = [
    {
      name: "Majok Thiong Alier",
      role: "Founder, CEO & Creative Director",
      location: "USA",
      description: "Leads vision, editing, storytelling direction, and music integration.",
      image: "/images/team/majok.png",
    },
    {
      name: "Chol Anyang Deng (Chologo)",
      role: "Music Producer & Head of Sound",
      location: "AMP Records",
      description: "Leads AMP Records and original sound productions.",
      image: "/images/team/chologo.png",
    },
    {
      name: "Ajak Thiong Alier",
      role: "Co-founder & Head of Production",
      location: "Juba, South Sudan",
      description: "Leads all on-ground filming and production.",
      image: "/images/team/ajak.png",
    },
    {
      name: "Ariik Ajak Ariik (Aramköu)",
      role: "Podcast Lead & Talent Coordinator",
      location: "Kampala, Uganda",
      description: "Manages talent, interviews, and podcast-style content.",
      image: "/images/team/aramkou.png",
    },
    {
      name: "Mach Majɔk Nyiel (Moto)",
      role: "Content Strategist & Digital Lead",
      location: "Nairobi, Kenya",
      description: "Handles social media, engagement, and content strategy.",
      image: "/images/team/moto.png",
    },
    {
      name: "Yom Matiop Ayuen",
      role: "Lead Actress & Storytelling Face",
      location: "Turkey",
      description: "Drives visual storytelling through performance and creative expression.",
      image: "/images/team/yom.png",
    },
    {
      name: "Gar Daniel Majok",
      role: "Visual Designer & Brand Advisor",
      location: "Nimule, South Sudan",
      description: "Designs graphics and shapes visual identity.",
      image: "/images/team/gar.png",
    },
    {
      name: "Chol Ajak Thiong",
      role: "Events & Competitions Coordinator",
      location: "Bor, South Sudan",
      description: "Leads AMP event-based activities like chess, quiz, and debate.",
      image: "/images/team/chol.png",
    },
    {
      name: "Bior Malual Nyok (Bloc)",
      role: "Head of Technology",
      location: "",
      description: "Builds and maintains AMP's systems and infrastructure.",
      image: "/images/team/bloc.png",
    },
  ];

  {/* 
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };
  */}

  return (
    <section id="team" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-amp-gold mb-4">Core Team</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A collective of storytellers, creators, and strategists building Awermach Media across borders.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-amp-dark border border-amp-gold/10 hover:border-amp-gold rounded-2xl p-6 transition-all hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-24 h-24 rounded-full bg-amp-gold/10 border-2 border-amp-gold/30 flex items-center justify-center mb-5 overflow-hidden group-hover:border-amp-gold transition-colors">
                  {/* Replace the span below with an <img> tag when images are ready */}
                  {/* 
                  <span className="text-2xl font-bold text-amp-gold">
                    {getInitials(member.name)}
                  </span>
                  */}
                   
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                  
                </div>

                {/* Info */}
                <h3 className="text-xl font-semibold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-amp-gold text-sm font-medium mb-2">
                  {member.role}
                </p>
                {member.location && (
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-4">
                    {member.location}
                  </p>
                )}
                <p className="text-white/70 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}