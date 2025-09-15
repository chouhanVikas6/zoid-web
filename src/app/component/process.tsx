export default function ProcesSection(){
    return (
      <section className="flex flex-col min-h-[600px] py-10 sm:py-16 bg-gradient-to-b from-gray-900 to-gray-800 relative">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center text-white drop-shadow-lg">Our Process</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-12 text-center max-w-2xl mx-auto">
            We follow a rigorous process to ensure the highest quality in our solutions.
          </p>
          <div className="flex gap-4 sm:gap-8 px-2 sm:px-4 md:px-0 snap-x snap-mandatory overflow-x-auto md:overflow-x-visible justify-start md:justify-center scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
            {/* Step 1 */}
            <div className="min-w-[260px] sm:min-w-[320px] max-w-xs bg-white/90 rounded-2xl shadow-xl p-5 sm:p-8 flex flex-col items-center snap-center border border-gray-200 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gray-900 text-white text-3xl font-bold shadow-lg">1</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">Listen First</h3>
              <p className="text-gray-700 text-base text-center mb-2">We engage directly with military-personnel, warfighters, & analysts working on the field in modern conflicts to understand their pain-points and operational needs.</p>
              <svg className="w-10 h-10 text-gray-900 mt-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l-2 2m0 0l2-2m-2 2h12" /></svg>
            </div>
            {/* Step 2 */}
            <div className="min-w-[260px] sm:min-w-[320px] max-w-xs bg-white/90 rounded-2xl shadow-xl p-5 sm:p-8 flex flex-col items-center snap-center border border-gray-200 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gray-900 text-white text-3xl font-bold shadow-lg">2</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">Build Fast</h3>
              <p className="text-gray-700 text-base text-center mb-2">We identify problems, and act quickly. We privately fund our R&D before the end-user even formalizes their requirements; allowing us to deploy our solutions in months, not years.</p>
              <svg className="w-10 h-10 text-gray-900 mt-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            </div>
            {/* Step 3 */}
            <div className="min-w-[260px] sm:min-w-[320px] max-w-xs bg-white/90 rounded-2xl shadow-xl p-5 sm:p-8 flex flex-col items-center snap-center border border-gray-200 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gray-900 text-white text-3xl font-bold shadow-lg">3</div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">Deliver Success</h3>
              <p className="text-gray-700 text-base text-center mb-2">We don’t build to merely “check the boxes”, We build for the fight. We go beyond user-requirements, to deliver real-outcomes in high-stakes deployments.</p>
              <svg className="w-10 h-10 text-gray-900 mt-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
          </div>
        </div>
      </section>
    );
}