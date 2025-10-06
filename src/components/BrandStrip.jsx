import React from 'react'

const logos = [
  '/only rice.png',
  '/farm.png',
  '/farm fresh.png',
  '/food.png',
  '/eco product.png',
  '/tractor.png',
]

export default function BrandStrip() {
  return (
    <section className="bg-[#F6F7EE] py-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Scrollable track */}
        <div className="flex gap-x-32 gap-y-8 whitespace-nowrap animate-scroll">
          {/* Repeat logos twice for seamless loop */}
          {[...logos, ...logos].map((src, index) => (
            <img
              key={index}
              src={src}
              alt="brand logo"
              className="h-[80px] w-[80px] object-contain opacity-70 hover:opacity-100 transition-opacity inline-block"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          display: flex;
          gap: 8rem; /* maintains the spacing like gap-x-32 */
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
