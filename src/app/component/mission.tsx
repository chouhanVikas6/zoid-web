
export default function MissionSection() {
  return (
    <section className="w-full bg-[#f5f2ef] py-28 px-4 flex justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0">
        {/* Left: Headings */}
        <div className="md:w-1/2 flex flex-col justify-center items-start space-y-3">
       
          <h3 className="group flex items-center text-5xl md:text-5xl font-semibold  text-black hover:text-gray-800 transition-colors">Our Mission 
            {/* <span className="ml-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white group-hover:bg-gray-800 transition-colors">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="currentColor" />
                <path d="M12 16h8m0 0-3-3m3 3-3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span> */}
          </h3>
           <hr className="w-full text-black border-1 mt-10" />
          <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight mb-0">
            Empowering Indian<br className="hidden md:block" />
            Defense and Aerospace industry<br className="hidden md:block" />
            With home-grown solutions.
          </h2>
        </div>
        {/* Right: Description and CTA */}
        <div className="md:w-1/2 flex flex-col justify-center items-start md:pl-16">
          <p className="text-lg md:text-xl text-black mb-8">
            We Design, Develop, & Deploy Deep-Tech solutions for military applications; with domain expertise in Electronic Warfare and AI-Enabled Software Solutions for unmanned systems.
          </p>
          <p className="text-lg md:text-xl text-black mb-8">
            We work shoulder-to-shoulder with the end-user and military-analysts to deliver systems that are shaped by real-world missions and insight learned from recent modern conflicts. This connection with operational requirements drives our R&D process, allowing us to think far beyond theoretical requirements. 
          </p>
          {/* <a href="#mission" className="group flex items-center text-2xl md:text-3xl font-medium underline underline-offset-4 text-black hover:text-gray-800 transition-colors">
            Learn more about our mission
            <span className="ml-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white group-hover:bg-gray-800 transition-colors">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="currentColor" />
                <path d="M12 16h8m0 0-3-3m3 3-3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a> */}
          <hr className="w-full text-black border-1 mt-10" />
        </div>
      </div>
    </section>
  );
}
