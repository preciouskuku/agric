<footer
  className="mt-16 bg-cover bg-center bg-no-repeat relative min-h-[500px]" // adjust 500px as needed
  style={{ backgroundImage: "url('/footer-bg.jpg')" }}
>
  {/* Overlay to make text readable */}
  <div className="absolute inset-0 bg-black/20"></div>

  <div className="relative z-10">
    {/* category + contact strip */}
    <div className="bg-amber-200 bg-opacity-80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-5 text-green-900 text-sm font-semibold">
          <span>FARMERS</span>
          <span>•</span>
          <span>ORGANIC</span>
          <span>•</span>
          <span>FOODS</span>
          <span>•</span>
          <span>PRODUCT</span>
        </div>
        <div className="flex items-center gap-6 text-green-900">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white"><FiPhone /></span>
            <span className="text-sm font-semibold">+1 (212) 255-511</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white"><FiMail /></span>
            <span className="text-sm font-semibold">noreply@pbminfotech.com</span>
          </div>
        </div>
      </div>
    </div>

    {/* Main content */}
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
      {/* ...rest of your footer content stays exactly the same */}
    </div>
  </div>
</footer>
