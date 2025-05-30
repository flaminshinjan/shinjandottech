import Image from 'next/image';
import Link from 'next/link';
import { Trophy } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Testimonials } from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="bg-[#E85D4C]">
        <Header />
        <section className="relative pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Left Content - Text */}
              <div className="pr-8 z-10">
                {/* Top Label */}
                <h2 className="text-[#F4C155] text-xs tracking-[0.2em] font-light mb-2">
                  SOFTWARE COOK
                </h2>

                {/* Name */}
                <div className="space-y-1">
                  <h1 className="font-['Impact'] text-white text-[7.5rem] leading-[0.85] tracking-tight">
                    SHINJAN
                  </h1>
                  <h1 className="font-['Impact'] text-white text-[7.5rem] leading-[0.85] tracking-tight">
                    PATRA
                  </h1>
                </div>

                {/* Description with Icon */}
                <div className="flex items-center gap-3 mt-3 mb-6">
                  <p className="text-white/90 text-sm font-light leading-tight">
                    Crafting digital experiences with a pinch of innovation
                  </p>
                  <div className="w-6 h-6 rounded-full border border-[#F4C155] flex items-center justify-center">
                    <Trophy className="w-3 h-3 text-[#F4C155]" />
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/about"
                  className="inline-flex items-center bg-[#F4C155] text-black px-6 py-2.5 rounded-full text-base font-medium hover:bg-white transition-colors group"
                >
                  <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-2 group-hover:bg-[#F4C155] transition-colors">
                    <span className="block w-1.5 h-1.5 bg-[#E85D4C] rounded-full" />
                  </span>
                  LEARN MORE
                </Link>
              </div>

              {/* Right Content - 3D Illustration */}
              <div className="relative lg:-mr-20 perspective-2000">
                <div 
                  className="group transition-all duration-700 ease-out transform-gpu hover:scale-105"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Image
                    src="/shinjan.png"
                    alt="Shinjan Patra 3D Illustration"
                    width={1000}
                    height={1000}
                    className="w-[125%] h-auto select-none transition-transform duration-700 ease-out group-hover:translate-y-[-2%] group-hover:translate-x-[2%] group-hover:rotate-y-5 group-hover:rotate-x-5"
                    priority
                    draggable="false"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Testimonials />
    </div>
  );
}
