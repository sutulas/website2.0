import { Link } from "react-router-dom";

export default function Adventures() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/171784a5c22ed4c04836beb013744fceed0dcf42?width=3135"
          alt="Snowy mountain landscape with skier"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen font-arvo p-4 md:p-6 lg:p-8 flex flex-col">
        {/* Header Navigation */}
        <div className="flex justify-between items-start mb-4 md:mb-6 lg:mb-8 flex-shrink-0">
          <h1 className="text-black font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Adventures
          </h1>
          <Link 
            to="/"
            className="text-black font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl hover:opacity-80 transition-opacity"
          >
            Home
          </Link>
        </div>
        
        {/* Adventures Content - Flexible container */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-6 lg:px-8">
          <h2 className="text-black font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 md:mb-8">
            Coming Soon...
          </h2>
        </div>
        
        {/* Footer credit */}
        <div className="absolute bottom-4 right-4 flex-shrink-0">
          <span className="text-black text-xs md:text-sm font-bold">
            Mount Washington
          </span>
        </div>
      </div>
    </div>
  );
}
