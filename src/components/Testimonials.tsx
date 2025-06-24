import Image from 'next/image';

const testimonials = [
  {
    name: 'Arjun Mahajan',
    role: 'CEO, Indus Limited',
    image: '/testimonials/arjun.jpg',
    text: 'Shinjan is an exceptional founding engineer who brings both technical excellence and strategic thinking. His work on our FinTech platform has been instrumental in our success.',
    color: 'bg-gradient-to-br from-blue-500 to-purple-600',
    transform: '-rotate-6 -translate-y-4',
  },
  {
    name: 'Sarah Kim',
    role: 'Engineering Manager, museLIVE Inc.',
    image: '/testimonials/sarah.jpg',
    text: 'Shinjan delivered high-quality backend solutions that scaled to 100K+ users. His Go expertise and system design skills are top-notch.',
    color: 'bg-gradient-to-br from-green-500 to-teal-600',
    transform: 'rotate-3 translate-x-6',
  },
  {
    name: 'Rahul Patel',
    role: 'CTO, Ionio',
    image: '/testimonials/rahul.jpg',
    text: 'Working with Shinjan for over a year was fantastic. He improved our app performance by 30% and seamlessly integrated complex payment systems. A true problem solver.',
    color: 'bg-gradient-to-br from-orange-500 to-red-500',
    transform: '-rotate-3 translate-x-4 translate-y-6',
  },
  {
    name: 'Maya Sharma',
    role: 'Product Manager, Swift Money',
    image: '/testimonials/maya.jpg',
    text: 'Shinjan\'s mobile development skills are exceptional. He delivered our finance advisor app ahead of schedule with a beautiful, intuitive interface.',
    color: 'bg-gradient-to-br from-pink-500 to-rose-600',
    transform: 'rotate-6 -translate-x-8 translate-y-2',
  },
  {
    name: 'Alex Thompson',
    role: 'Lead Developer, TechRange',
    image: '/testimonials/alex.jpg',
    text: 'Shinjan quickly mastered our iOS testing framework and significantly improved our app reliability. His attention to detail is remarkable.',
    color: 'bg-gradient-to-br from-indigo-500 to-blue-600',
    transform: '-rotate-12 translate-y-8',
  },
  {
    name: 'Jennifer Walsh',
    role: 'Senior Engineer, Meta (Former Colleague)',
    image: '/testimonials/jennifer.jpg',
    text: 'Shinjan is one of the most dedicated engineers I\'ve worked with. His full-stack capabilities and passion for clean code make him invaluable to any team.',
    color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    transform: 'rotate-9 -translate-x-4 -translate-y-2',
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-gradient-to-b from-blue-50/30 via-purple-50/20 to-indigo-50/30">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h1 className="text-7xl font-bold mb-24 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          What clients say about me
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