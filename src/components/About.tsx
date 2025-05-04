import React from 'react';
import { Wand2, Palette, Lightbulb, Clock } from 'lucide-react';

const features = [
  {
    icon: <Wand2 size={24} className="text-indigo-600" />,
    title: 'AI-Powered Creation',
    description: 'Our advanced AI models transform text descriptions into stunning visual designs in seconds.'
  },
  {
    icon: <Palette size={24} className="text-indigo-600" />,
    title: 'Multiple Styles',
    description: 'Choose from a variety of artistic styles to match your brand vision, from anime to realistic.'
  },
  {
    icon: <Lightbulb size={24} className="text-indigo-600" />,
    title: 'Unlimited Creativity',
    description: 'No design limitations. If you can describe it, our AI can create it with remarkable accuracy.'
  },
  {
    icon: <Clock size={24} className="text-indigo-600" />,
    title: 'Rapid Iteration',
    description: 'Generate multiple designs quickly to refine your brand concept and find the perfect match.'
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About FabricAI</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're revolutionizing clothing brand creation by combining AI technology with fashion expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At FabricAI, we believe everyone has a unique vision for their perfect clothing brand. 
              Our mission is to democratize fashion design by making it accessible to creators, 
              entrepreneurs, and fashion enthusiasts regardless of their technical design skills.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Using cutting-edge AI technology, we've built a platform that translates your 
              creative ideas into professional-quality clothing designs. Whether you're launching 
              a new brand or just exploring creative concepts, FabricAI gives you the power to 
              bring your fashion ideas to life.
            </p>
          </div>
          <div className="relative">
            <div className="bg-indigo-100 rounded-lg p-2 h-full">
              <img 
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Fashion design process" 
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-purple-100 rounded-lg hidden md:block"></div>
            <div className="absolute -top-5 -left-5 w-24 h-24 bg-indigo-100 rounded-lg hidden md:block"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;