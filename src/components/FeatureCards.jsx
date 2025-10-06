import React from 'react'

const items = [
  {
    img: '/truck.png', // replace with your actual file name
    title: 'Professional Farmers',
    desc: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.'
  },
  {
    img: '/hand.png',
    title: 'Fresh Vegetables',
    desc: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.'
  },
  {
    img: '/agri.png',
    title: 'Agriculture Products',
    desc: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.'
  },
  {
    img: '/plant.png',
    title: '100% Guaranteed',
    desc: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.'
  }
]

export default function FeatureCards() {
  return (
    <section className="bg-[#F6F7EE] py-10 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="relative bg-white rounded-2xl shadow-sm shadow-black/5 p-6 flex flex-col items-center text-center overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top icon image */}
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-200 mb-4">
                <img src={it.img} alt={it.title} className="h-8 w-8 object-contain" />
              </div>

              {/* Title + description */}
              <h3 className="text-lg font-semibold text-green-900">{it.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed px-2">{it.desc}</p>

              {/* Arrow icon */}
              <div className="absolute bottom-4 right-4 h-8 w-8 rounded-full border border-neutral-200 bg-white text-neutral-700 grid place-items-center group-hover:bg-green-900 group-hover:text-white transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>

              {/* Divider lines */}
              <div className="pointer-events-none absolute left-4 right-4 top-[72px] h-px bg-neutral-100/70" />
              <div className="pointer-events-none absolute left-4 right-4 bottom-12 h-px bg-neutral-100/70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
