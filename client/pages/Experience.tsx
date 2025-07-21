import { Link } from "react-router-dom";

export default function Experience() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/f9b52d7994083f6709665c30223387076fcf0dc2?width=3116"
          alt="Rocky coastline landscape"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-screen font-arvo p-4 md:p-6 lg:p-8 flex flex-col">
        {/* Header Navigation */}
        <div className="flex justify-between items-start mb-4 md:mb-6 lg:mb-8 flex-shrink-0">
          <h1 className="text-black font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Experience
          </h1>
          <Link 
            to="/"
            className="text-black font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl hover:opacity-80 transition-opacity"
          >
            Home
          </Link>
        </div>
        
        {/* Experience Grid - Scrollable container */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="max-w-4xl mx-auto pb-4 space-y-4 md:space-y-6">
            {/* Terra Dotta */}
            <div className="bg-gray-200 bg-opacity-75 rounded-lg p-4 md:p-6 backdrop-blur-sm">
              <h3 className="text-black font-bold text-base md:text-lg lg:text-xl xl:text-2xl mb-2">
                Junior Software Engineer @ Terra Dotta
              </h3>
              <p className="text-black text-sm md:text-base lg:text-lg mb-3 md:mb-4">
                July 2025 - Present
              </p>
              <div className="text-black text-sm md:text-base lg:text-lg leading-relaxed space-y-2">
                <p>• Rapidly prototyped and deployed AI solutions across a suite of SaaS products, focusing on enhancing search functionality and overall user experience.</p>
                <p>• Designed and implemented RAG pipelines, agentic workflows, and semantic search systems using LangGraph, AWS Bedrock, Elasticsearch, and Python.</p>
                <p>• Delivered full-stack features with Angular, Java, and TypeScript, integrating AI systems seamlessly into production environments.</p>
              </div>
            </div>
            {/* Longbeard */}
            <div className="bg-gray-200 bg-opacity-75 rounded-lg p-4 md:p-6 backdrop-blur-sm">
              <h3 className="text-black font-bold text-base md:text-lg lg:text-xl xl:text-2xl mb-2">
                Software Engineering Intern @ Longbeard
              </h3>
              <p className="text-black text-sm md:text-base lg:text-lg mb-3 md:mb-4">
                May 2025 - June 2025
              </p>
              <div className="text-black text-sm md:text-base lg:text-lg leading-relaxed space-y-2">
                <p>• Enhanced the RAG pipeline for a state-of-the-art consumer AI chatbot by implementing a hybrid search system combining keyword and semantic (natural language) search.</p>
                <p>• Built and deployed search improvements in TypeScript using Supabase for both vector similarity and full-text indexing.</p>
              </div>
            </div>
            {/* Decodables */}
            <div className="bg-gray-200 bg-opacity-75 rounded-lg p-4 md:p-6 backdrop-blur-sm">
              <h3 className="text-black font-bold text-base md:text-lg lg:text-xl xl:text-2xl mb-2">
                Founding Engineer @ Decodables
              </h3>
              <p className="text-black text-sm md:text-base lg:text-lg mb-3 md:mb-4">
                October 2024 - June 2025
              </p>
              <div className="text-black text-sm md:text-base lg:text-lg leading-relaxed space-y-2">
                <p>• Collaborated with university peers and alumni to develop a scalable, user-friendly website offering personalized reading experiences for young, low-level readers.</p>
                <p>• Spearheaded the creation of a custom prompt-engineering pipeline for integration with multiple large language models.</p>
                <p>• Designed and implemented an interactive front-end interface and a robust back-end API architecture using FastAPI, React, Node.js, and Google Firebase.</p>
              </div>
            </div>
            {/* AI */}
            <div className="bg-gray-200 bg-opacity-75 rounded-lg p-4 md:p-6 backdrop-blur-sm">
              <h3 className="text-black font-bold text-base md:text-lg lg:text-xl xl:text-2xl mb-2">
                President/Founder @ Boston College AI Safety Society
              </h3>
              <p className="text-black text-sm md:text-base lg:text-lg mb-3 md:mb-4">
                August 2024 - May 2025
              </p>
              <div className="text-black text-sm md:text-base lg:text-lg leading-relaxed space-y-2">
                <p>• Established and led a new student organization dedicated to exploring AI alignment through comprehensive discussions and research on AI development, policy, and regulation.</p>
                <p>• Designed and implemented a custom curriculum for weekly seminars, covering topics ranging from high-level AI overviews to in-depth analysis of AI models, in collaboration with parallel organizations at Harvard and MIT.</p>
              </div>
            </div>
            {/* ZoomInfo */}
            <div className="bg-gray-200 bg-opacity-75 rounded-lg p-4 md:p-6 backdrop-blur-sm">
              <h3 className="text-black font-bold text-base md:text-lg lg:text-xl xl:text-2xl mb-2">
                Software Engineering Intern @ ZoomInfo
              </h3>
              <p className="text-black text-sm md:text-base lg:text-lg mb-3 md:mb-4">
                June 2024 - August 2024
              </p>
              <div className="text-black text-sm md:text-base lg:text-lg leading-relaxed space-y-2">
                <p>• Optimized count estimation processes through in-depth Solr query data analysis and advanced data estimation techniques, leveraging Python, Solr, Snowflake, and Apache DataSketches frameworks.</p>
                <p>• Developed and recommended an innovative solution that reduced query latency by up to 70%, slated for production implementation.</p>
              </div>
            </div>
            {/* GBCS Group */}
            <div className="bg-gray-200 bg-opacity-75 rounded-lg p-4 md:p-6 backdrop-blur-sm">
              <h3 className="text-black font-bold text-base md:text-lg lg:text-xl xl:text-2xl mb-2">
                Backend Developer Intern @ The GBCS Group
              </h3>
              <p className="text-black text-sm md:text-base lg:text-lg mb-3 md:mb-4">
                May 2023 - August 2023
              </p>
              <div className="text-black text-sm md:text-base lg:text-lg leading-relaxed space-y-2">
                <p>• Demonstrated proficiency in rapidly acquiring and applying software development tools, including JavaScript, Node.js, and Firebase</p>
                <p>• Built and implemented an API framework to facilitated efficient data retrieval from backend systems</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer credit */}
        <div className="absolute bottom-4 right-4 flex-shrink-0">
          <span className="text-black text-xs md:text-sm font-bold">
            Reykjavik, Iceland
          </span>
        </div>
      </div>
    </div>
  );
}
