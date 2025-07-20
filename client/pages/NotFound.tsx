import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/aa52f5eb5dd3c2a8bb27077d0322e1b85a8b529a?width=3072"
          alt="Mountain landscape background"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-25"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen font-arvo flex flex-col">
        {/* Header Navigation */}
        <div className="flex justify-between items-start p-4 md:p-6 lg:p-8 flex-shrink-0">
          <h1 className="text-brand-yellow font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            404
          </h1>
          <Link 
            to="/"
            className="text-brand-yellow font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl hover:opacity-80 transition-opacity"
          >
            Home
          </Link>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-6 lg:px-8">
          <h2 className="text-brand-yellow font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 md:mb-8">
            Page Not Found
          </h2>
          <p className="text-brand-yellow text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-4xl leading-relaxed mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link 
            to="/"
            className="text-brand-yellow font-bold text-xl md:text-2xl lg:text-3xl hover:opacity-80 transition-opacity underline"
          >
            Return to Home
          </Link>
        </div>
        
        {/* Footer credit */}
        <div className="absolute bottom-4 right-4 flex-shrink-0">
          <span className="text-brand-yellow text-xs md:text-sm font-bold">
            Tour du Mont Blanc
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
