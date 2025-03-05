import TechBackground from "./tech-background"

export default function CommunitySection() {
  return (
    <section id="community" className="bg-[#050e2d] py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <TechBackground color="#0a78ff" density={20} speed={0.15} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Community</h2>
        <p className="text-white/80 max-w-3xl mx-auto mb-8">
          At Harlfid, we believe in the power of collaboration and knowledge sharing. Whether you&apos;re a seasoned
          professional or just starting your journey, you&apos;ll find a welcoming environment to engage in discussions, seek
          advice, and showcase your expertise. Join us today and become a part of a vibrant community shaping the future
          of technology and digital innovation.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors">
          Join
        </button>
      </div>
    </section>
  )
}

