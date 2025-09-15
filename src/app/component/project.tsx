export default function ProjectSection() {
  return (
    <section className="w-full bg-[#f5f2ef] py-28 px-4 flex justify-center items-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0">
        {/* Left: Headings */}
        <div className="md:w-1/2 flex flex-col justify-center items-start">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-black">Our Projects</h3>
          <hr className="w-full text-black border-1 mb-5" />
          <ul className="list-disc pl-6 space-y-2 text-2xl md:text-2xl font-semibold text-gray-800">
            <div>Active Missile Decoys</div>
            <hr/>
            <div>AI based FOD Detection</div>
            <hr/>
            <div>Anti-Jam CRPA GPS/GNSS</div>
            <hr/>
            <div>GNSS Denied Navigation</div>
            <hr/>
            <div>UAV Swarm Architecture</div>
            <hr/>
          </ul>
        </div>
        {/* Right: Description and CTA */}
        <div className="md:w-1/2 flex flex-col justify-center items-start md:pl-16">
          <p className="text-lg md:text-xl text-black mb-8">
            We have partnered with the Ministry of Defence, India under the iDEX initiative to develop cutting-edge electronic warfare and AI enabled software solution for the Indian Navy.<br /><br />
            Apart from direct R&D projects with Indian MoD, we also supply critical Electronic Warfare and AI Based Software solutions to the Indian defense and Aerospace industry.  
          </p>
          <hr className="w-full text-black border-1 mt-16" />
        </div>
      </div>
    </section>
  );
}
