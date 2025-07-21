import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/94ce5bc83e73df3e6d5eaba8826e2a22f362d2f2?width=3134"
          alt="Mountain landscape background"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-screen font-arvo flex flex-col">
        {/* Header Navigation */}
        <div className="flex justify-between items-start p-4 md:p-6 lg:p-8 flex-shrink-0">
          <h1 className="text-black font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            About
          </h1>
          <Link 
            to="/"
            className="text-black font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl hover:opacity-80 transition-opacity"
          >
            Home
          </Link>
        </div>
        
        {/* Main Content - Scrollable container */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col items-center px-4 md:px-6 lg:px-8 xl:px-16 pb-4">
            {/* Profile Photo */}
            <div className="mb-4 md:mb-6 mt-2 md:mt-4">
              <div className="w-20 h-20 md:w-28 lg:w-36 xl:w-44 md:h-28 lg:h-36 xl:h-44 rounded-full border-4 md:border-5 border-black overflow-hidden bg-gray-400">
                <img 
                  src="/DSC_0202.JPG" 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                  style={{ 
                    transform: 'scale(1.9)',
                    objectPosition: '42% center'
                  }}
                />
                <div className="w-full h-full bg-gray-400"></div>
              </div>
            </div>
            
            {/* Bio Text */}
            <div className="max-w-4xl text-center space-y-3 md:space-y-4">
              {/* Descriptors */}
              <p className="text-black font-bold text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed">
                Problem Solver | Developer | Runner | Hiker | Occasional Trivia Winner
              </p>
              
              {/* Main Bio */}
              <div className="text-black font-bold text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed space-y-2 md:space-y-3">
                <p>
                  Boston College Computer Science (and philosophy) graduate.
                  Interested in creative solutions to hard problems and working on passionate teams.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="pt-4 md:pt-6 space-y-3 md:space-y-4">
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
                  {/* Strava */}
                  <a 
                    href="https://www.strava.com/athletes/31849701" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:opacity-80 transition-all duration-300 hover:scale-110"
                    style={{ WebkitTextStroke: '1.5px white' }}
                  >
                    <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/>
                    </svg>
                  </a>
                  
                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/seamus-sutula/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:opacity-80 transition-all duration-300 hover:scale-110"
                    style={{ WebkitTextStroke: '1.5px white' }}
                  >
                    <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                  {/* GitHub */}
                  <a 
                    href="https://github.com/sutulas" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:opacity-80 transition-all duration-300 hover:scale-110"
                    style={{ WebkitTextStroke: '1.5px white' }}
                  >
                    <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  
                  {/* Email */}
                  <a 
                    href="mailto:sutulaseamus@gmail.com" 
                    className="text-black hover:opacity-80 transition-all duration-300 hover:scale-110"
                    style={{ WebkitTextStroke: '1.5px white' }}
                  >
                    <svg className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
                    </svg>
                  </a>
                </div>
                
                {/* Resume Button */}
                <div className="flex justify-center">
                  <a 
                    href="/Seamus_Sutula_Resume.pdf" 
                    download="Seamus_Sutula_Resume.pdf"
                    className="inline-flex items-center px-6 py-3 bg-black text-white font-bold text-lg md:text-xl rounded-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                    </svg>
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer credit */}
        <div className="absolute bottom-4 right-4 flex-shrink-0">
          <span className="text-black text-xs md:text-sm font-bold">
            Zermatt, Switzerland
          </span>
        </div>
      </div>
    </div>
  );
}
