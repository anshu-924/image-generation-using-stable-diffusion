import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Create Your{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Custom Brand
              </span>{' '}
              With AI
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your ideas into stunning clothing designs. Simply describe your vision, 
              choose a style, and watch as our AI brings your custom brand to life.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#generator" 
                className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 group"
              >
                <span>Get Started</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="#examples" 
                className="flex items-center justify-center bg-white border border-gray-300 hover:border-indigo-600 text-gray-700 hover:text-indigo-600 px-8 py-3 rounded-full font-medium transition-all duration-300"
              >
                View Examples
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Fashion designs" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-lg font-medium">Your imagination is the only limit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;