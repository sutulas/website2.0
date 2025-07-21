import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Index() {
  const [shakingButton, setShakingButton] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastMouseMoveRef = useRef<number>(Date.now());

  const buttons = ['projects', 'experience', 'about', 'adventures'];

  useEffect(() => {
    const handleMouseMove = () => {
      lastMouseMoveRef.current = Date.now();
      setShakingButton(null);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        const randomButton = buttons[Math.floor(Math.random() * buttons.length)];
        setShakingButton(randomButton);
        
        // Stop shaking after 0.5 seconds
        setTimeout(() => {
          setShakingButton(null);
        }, 500);
      }, 5000);
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    // Start the initial timeout
    timeoutRef.current = setTimeout(() => {
      const randomButton = buttons[Math.floor(Math.random() * buttons.length)];
      setShakingButton(randomButton);
      
      // Stop shaking after 0.5 seconds
      setTimeout(() => {
        setShakingButton(null);
      }, 500);
    }, 5000);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [buttons]);
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/DSC_0267.JPG"
          // src="https://api.builder.io/api/v1/image/assets/TEMP/aa52f5eb5dd3c2a8bb27077d0322e1b85a8b529a?width=3072"
          alt="Mountain landscape with person lying in field"
          className="w-full h-full object-cover object-bottom"
        />
        {/* 
        Image positioning options:
        
        Object-fit options:
        - object-cover (current) - scales to cover, may crop
        - object-contain - scales to fit entirely, may show background
        - object-fill - stretches to fill exactly
        - object-none - no scaling, may overflow
        
        Object-position options:
        - object-center (current) - centers the image
        - object-top - shows top of image
        - object-bottom - shows bottom of image
        - object-left - shows left side
        - object-right - shows right side
        - object-top-left - shows top-left corner
        - object-top-right - shows top-right corner
        - object-bottom-left - shows bottom-left corner
        - object-bottom-right - shows bottom-right corner
        
        Examples:
        className="w-full h-full object-cover object-top" // Shows top of image
        className="w-full h-full object-cover object-bottom" // Shows bottom of image
        className="w-full h-full object-contain object-center" // Fits entire image
        className="w-full h-full object-cover object-left" // Shows left side
        */}
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-25"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-screen font-arvo">
        {/* Header/Title */}
        <div className="pt-8 md:pt-16 lg:pt-20 px-4 md:px-8 lg:px-16">
          <h1 className="text-brand-yellow font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            Seamus Sutula (.com)
          </h1>
        </div>
        
        {/* Navigation Links */}
        <div className="flex-1 px-4 md:px-8 lg:px-16 relative">
          {/* Projects
          <Link 
            to="/projects"
            className={`absolute text-brand-yellow font-bold text-2xl sm:text-3xl md:text-4xl hover:opacity-90 transition-all duration-300 hover:drop-shadow-lg ${
              shakingButton === 'projects' ? 'animate-shake' : ''
            }`}
            style={{ 
              left: '5%',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%)';
            }} */}
            {/* projects */}
          <Link 
            to="/projects"
            className={`absolute text-brand-yellow font-bold text-2xl sm:text-3xl md:text-4xl hover:opacity-90 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg drop-shadow-lg ${
              shakingButton === 'projects' ? 'animate-grow-shrink' : ''
            }`}
            style={{ 
              left: '5%',
              bottom: '50%'
            }}
          >
            projects
          </Link>
          
          {/* Experience */}
          <Link 
            to="/experience"
            className={`absolute text-brand-yellow font-bold text-2xl sm:text-3xl md:text-4xl hover:opacity-90 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg drop-shadow-lg ${
              shakingButton === 'experience' ? 'animate-grow-shrink' : ''
            }`}
            style={{ 
              left: '9%',
              bottom: '15%'
            }}
          >
            experience
          </Link>
          
          {/* About */}
          <Link 
            to="/about"
            className={`absolute text-brand-yellow font-bold text-2xl sm:text-3xl md:text-4xl hover:opacity-90 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg drop-shadow-lg ${
              shakingButton === 'about' ? 'animate-grow-shrink' : ''
            }`}
            style={{ 
              right: '8%',
              top: '45%'
            }}
          >
            about
          </Link>
          
          {/* Adventures */}
          <Link 
            to="/adventures"
            className={`absolute text-brand-yellow font-bold text-2xl sm:text-3xl md:text-4xl hover:opacity-90 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg drop-shadow-lg ${
              shakingButton === 'adventures' ? 'animate-grow-shrink' : ''
            }`}
            style={{ 
              right: '15%',
              bottom: '25%'
            }}
          >
            adventures
          </Link>
        </div>
        
        {/* Footer credit */}
        <div className="pb-4 pr-4 flex justify-end">
          <span className="text-brand-yellow text-xs md:text-sm font-bold">
            Tour du Mont Blanc
          </span>
        </div>
      </div>
    </div>
  );
}
