import Image from 'next/image';

const testimonials = [
  {
    name: 'Rachel Adams',
    role: 'HR Manager, BrightPath Consulting',
    image: '/testimonials/rachel.jpg',
    text: 'They delivered exactly what we needed — top-quality talent through a hassle-free, streamlined process that made everything easy.',
    color: 'bg-gradient-to-br from-[#E85D4C] to-[#F4C155]',
    transform: '-rotate-6 -translate-y-4',
  },
  {
    name: 'James Robinson',
    role: 'VP of HR, Apex Dynamics',
    image: '/testimonials/james.jpg',
    text: 'The team is committed to exceeding expectations. We received candidate profiles the same day, and the selected candidate was onboarded by the end of the week',
    color: 'bg-gradient-to-br from-[#F4C155] to-[#E85D4C]',
    transform: 'rotate-3 translate-x-6',
  },
  {
    name: 'David Mitchell',
    role: 'Recruitment Head, Quantum Enterprises',
    image: '/testimonials/david.jpg',
    text: 'Our project timelines were incredibly tight, yet TechWave exceeded our expectations by not only delivering top-tier talent swiftly but also ensuring a seamless onboarding process.',
    color: 'bg-gradient-to-br from-[#E85D4C]/90 to-[#F4C155]/90',
    transform: '-rotate-3 translate-x-4 translate-y-6',
  },
  {
    name: 'Emily Carter',
    role: 'Operations Director, Stellar Solutions',
    image: '/testimonials/emily.jpg',
    text: 'Despite the challenges of a compressed schedule, TechWave not only provided exceptional professionals promptly but also facilitated an effortless integration experience.',
    color: 'bg-gradient-to-br from-[#F4C155]/80 to-[#E85D4C]/80',
    transform: 'rotate-6 -translate-x-8 translate-y-2',
  },
  {
    name: 'Mark Johnson',
    role: 'Talent Specialist, InnovateTech Solutions',
    image: '/testimonials/mark.jpg',
    text: "We got the candidate profiles on the same day, and the chosen candidate was fully integrated by the week's end.",
    color: 'bg-gradient-to-br from-orange-500 to-[#F4C155]',
    transform: '-rotate-12 translate-y-8',
  },
  {
    name: 'Michael Lee',
    role: 'CEO, Visionary Ventures',
    image: '/testimonials/michael.jpg',
    text: "The best recruitment partner we've ever worked with. They quickly understood our unique requirements and found candidates who are already making an impact on our team.",
    color: 'bg-gradient-to-br from-[#E85D4C]/70 to-amber-500',
    transform: 'rotate-9 -translate-x-4 -translate-y-2',
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#E85D4C]/10 via-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h1 className="text-7xl font-bold mb-24 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#E85D4C] via-orange-600 to-[#F4C155]">
          What they say about us
        </h1>

        {/* Testimonials Grid */}
        <div className="relative max-w-6xl mx-auto">
          <div className="group grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${testimonial.color} rounded-3xl p-6 shadow-lg transition-all duration-700 ease-out backdrop-blur-sm border border-white/20
                  group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0
                  ${testimonial.transform} hover:scale-105 hover:shadow-2xl hover:border-white/40`}
                style={{
                  transformOrigin: 'center',
                  zIndex: testimonials.length - index,
                }}
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white" className="opacity-90 drop-shadow-sm">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  </svg>
                </div>

                <p className="text-white text-lg mb-6 leading-relaxed font-medium drop-shadow-sm">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden ring-2 ring-white/30 shadow-lg">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold drop-shadow-sm">{testimonial.name}</h3>
                    <p className="text-white/80 text-sm drop-shadow-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 