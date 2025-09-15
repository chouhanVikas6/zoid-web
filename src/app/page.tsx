"use client";
import MissionSection from "./component/mission";
import ProjectSection from "./component/project";
import ProcesSection from "./component/process";
import ContactSection from "./component/contact";



export default function Home() {

  return (
    <>
      {/* Notice and Sticky Header Wrapper */}
      <div className="w-full">
        {/* Notification Marquee */}
        <div className="w-full bg-[#232323] text-white py-1 overflow-hidden relative z-50">
          <div className="whitespace-nowrap animate-marquee font-medium text-center px-4">
            Notice: You’re viewing a preview version of our site. The full platform will launch after our team concludes time-sensitive R&amp;D supporting high-stakes projects.
          </div>
        </div>
        <div className="relative w-full h-screen overflow-hidden font-sans">
          {/* Background Video */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="/swarm.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Overlayed Headline Text */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] flex flex-col items-center justify-center z-10 pointer-events-none select-none">
            <div className="  rounded-2xl px-8 py-8 md:px-16 md:py-12 flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-2xl tracking-tight" style={{ textShadow: '0 4px 24px rgba(0,0,0,0.7)' }}>DEEP TECH SOLUTIONS FOR <br /> DEFENSE AND AEROSPACE INDUSTRY</h1>
            </div>
          </div>
          {/* Navigation overlays video and is sticky below notice */}
          <nav className="sticky top-0 left-0 w-full z-30">
            <div className="flex text-white items-center justify-between px-6 py-5 bg-gray-900/90 backdrop-blur-sm border-b border-[#e5e1dc] ">
              {/* Left: Logo placeholder */}
              <div className="flex items-center gap-2">
                {/* Logo will be added here */}
                <span className="text-white  font-bold text-3xl tracking-widest">ZOID</span>
              </div>
              {/* Center: Product names placeholder */}
              <div className="md:flex gap-8 text-white  font-medium">
                <span className="cursor-pointer">Missile Decoys</span>
                <span className="cursor-pointer">FOD Detection</span>
                <a className="no-underline text-inherit" href="/crpa.pdf" target="_blank" rel="noopener noreferrer">
                  Anti-Jam CRPA GPS/GNSS
                </a>
                <span className="cursor-pointer">UAV Softwares</span>
              </div>
              {/* Right: We're Hiring and Hamburger */}
              <div className="flex text-white  items-center gap-6">
                <span className="hidden md:inline  font-medium">We&apos;re Hiring</span>
           
              </div>
            </div>
          </nav>
        </div>
      </div>
      <MissionSection />

      <div className="bg-gray-900 text-white min-h-screen">

        {/* Our Process Carousel */}
        <ProcesSection />

        {/* About Section */}
        <ProjectSection />

        {/* Contact Section */}
        <ContactSection />
        {/* Footer */}
        <footer className="w-full  text-white py-6 px-3 mt-4">

          <div className="max-w-7xl text-lg mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Contact Details */}
            <div>

              <div className="mb-2">
                <span className="block font-semibold">Contact Details</span>
                <hr className="my-2 border-gray-700" />
                <span className="block">+91-9871617142</span>
                <span className="block">sales@zoidtech.co.in</span>
                <span className="block">www.zoidtech.co.in</span>
              </div>
            </div>
            {/* Registered Office */}
            <div>
              <span className="block font-semibold mb-1">Registered Office</span>
              <hr className="my-2 border-gray-700" />
              <span className="block">D-167, Block-D, Vivek Vihar,</span>
              <span className="block">Phase-1, East Delhi, Delhi,</span>
              <span className="block">110095, India</span>
            </div>
            {/* Corporate Office */}
            <div>
              <span className="block font-semibold mb-1">Corporate Office</span>
              <hr className="my-2 border-gray-700" />
              <span className="block">First Floor, B-13A, Block-B,</span>
              <span className="block">Sector 132, Noida, UP-201304,</span>
              <span className="block">India</span>
            </div>
            {/* Company Details */}
            <div>
              <span className="block font-semibold mb-1">Company Details</span>
              <hr className="my-2 border-gray-700" />
              <h3 className="font-medium text-xs text-gray-400 text-center mb-1 tracking-wide">
                All rights reserved to
              </h3>
              <div className="text-sm text-gray-300 text-center font-semibold tracking-wide">
                © 2025 Zoid Technologies Private Limited
              </div>

            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
