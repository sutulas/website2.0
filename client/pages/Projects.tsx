import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/b04670ecbecf72fcabc942477b342e5251ee312e?width=3126"
          alt="Mountain landscape with hiker"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-screen font-arvo p-4 md:p-6 lg:p-8 flex flex-col">
        {/* Header Navigation */}
        <div className="flex justify-between items-start mb-4 md:mb-6 lg:mb-8 flex-shrink-0">
          <h1 className="text-black font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Projects
          </h1>
          <Link 
            to="/"
            className="text-black font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl hover:opacity-80 transition-opacity"
          >
            Home
          </Link>
        </div>
        
        {/* Projects Grid - Scrollable container */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="max-w-4xl mx-auto pb-4 space-y-4 md:space-y-6">
            {/* SpotifHAI */}
            <div className="bg-gray-200 bg-opacity-50 rounded-lg p-3 md:p-4 lg:p-5 backdrop-blur-sm">
              <h3 className="text-black font-bold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3">
                SpotifHAI
              </h3>
              <p className="text-black text-sm md:text-base lg:text-lg leading-relaxed mb-3 md:mb-4">
                Created for a Human AI Interaction (HAI) course, SpotifHAI is an intelligent Spotify analytics and playlist assistant powered by OpenAI and Spotify APIs. Featuring a custom agent pipeline, robust backend API architecture, and an interactive and fun frontend interface, this project leverages <span className="font-bold">python, FastAPI, React, and Node.js.</span>
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/sutulas/Spotifhai" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                {/* <a 
                  href="https://www.youtube.com/watch?v=demo" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-red-600 text-white text-sm font-bold rounded hover:bg-red-700 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Demo
                </a> */}
              </div>
            </div>
            
            {/* News Source Attribution */}
            <div className="bg-gray-200 bg-opacity-50 rounded-lg p-3 md:p-4 lg:p-5 backdrop-blur-sm">
              <h3 className="text-black font-bold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3">
                News Source Attribution
              </h3>
              <p className="text-black text-sm md:text-base lg:text-lg leading-relaxed mb-3 md:mb-4">
                Created for a Natural Language Processing course, this project is a combination of NLP approaches to determine the source of news articles. Using Naive Bayes, Support Vector Machine, Logistic Regression, Convolution Neural Nets, Feed Forward Neural Nets, and BERT, as classifiers, this comprehensive project explored the best classification approaches while utilizing many NLP/ML libraries such as <span className="font-bold">scikit-learn, pandas, nltk, numpy,</span> among others, as well as a <span className="font-bold">custom data-loading pipeline.</span>
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/hunterschep/nlp-final-project" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                {/* <a 
                  href="https://www.youtube.com/watch?v=demo" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-red-600 text-white text-sm font-bold rounded hover:bg-red-700 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Demo
                </a> */}
              </div>
            </div>
            
            {/* SeamusGPT */}
            <div className="bg-gray-200 bg-opacity-50 rounded-lg p-3 md:p-4 lg:p-5 backdrop-blur-sm">
              <h3 className="text-black font-bold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3">
                SeamusGPT
              </h3>
              <p className="text-black text-sm md:text-base lg:text-lg leading-relaxed mb-3 md:mb-4">
                A personal side project focused on challenging my AI development skills, SeamusGPT is a custom tuned and trained LLM on my own personal corpus of writing (1,000,000+ words). Built on top of open source LLM frameworks, this project leverages <span className="font-bold">TensorFlow, Hugging Face, and fine-tuning expertise.</span>
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/sutulas/SeamusGPT" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                {/* <a 
                  href="https://www.youtube.com/watch?v=demo" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-red-600 text-white text-sm font-bold rounded hover:bg-red-700 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Demo
                </a> */}
              </div>
            </div>
            
            {/* Equation AI */}
            <div className="bg-gray-200 bg-opacity-50 rounded-lg p-3 md:p-4 lg:p-5 backdrop-blur-sm">
              <h3 className="text-black font-bold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3">
                Equation AI
              </h3>
              <p className="text-black text-sm md:text-base lg:text-lg leading-relaxed mb-3 md:mb-4">
                Created for a Deep Learning course, Equation AI is a custom built and trained gated Pixel CNN for generating handwritten math equations. Inspired by existing Pixel CNN architectures tuned using Generative Adversarial Networks, Residual Connections, and other state-of-the-art methods, this project leverages <span className="font-bold">TensorFlow, PyTorch, and data-pipeline expertise.</span>
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://github.com/sutulas/Equation-AI" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-black text-white text-sm font-bold rounded hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                {/* <a 
                  href="https://www.youtube.com/watch?v=demo" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-red-600 text-white text-sm font-bold rounded hover:bg-red-700 transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Demo
                </a> */}
              </div>
            </div>
            
            {/* Strava Stars */}
            <div className="bg-gray-200 bg-opacity-50 rounded-lg p-3 md:p-4 lg:p-5 backdrop-blur-sm">
              <h3 className="text-black font-bold text-lg md:text-xl lg:text-2xl mb-2 md:mb-3">
                Strava Stars
              </h3>
              <p className="text-black text-sm md:text-base lg:text-lg leading-relaxed">
                Coming Soon....<br />
                A personal side project combining my love of running with my web-development skills, this in-progress project will provide users with a fun a motivating competition based on their activity stats and trends sourced from the Strava Developer API.
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer credit */}
        <div className="absolute bottom-4 right-4 flex-shrink-0">
          <span className="text-black text-xs md:text-sm font-bold">
            Grindavik, Iceland
          </span>
        </div>
      </div>
    </div>
  );
}
