import React, { useState } from 'react';

const examples = [
  {
    id: 1,
    title: "Urban Street Brand",
    description: "Modern streetwear with edgy graphics and bold typography",
    image: "generated-design(3).png",
    style: "urban"
  },
  {
    id: 2,
    title: "Minimalist Collection",
    description: "Clean, simple designs with muted colors and elegant shapes",
    image: "generated-design.png",
    style: "minimalist"
  },
  {
    id: 3,
    title: "Retro Sportswear",
    description: "Vintage-inspired athletic wear with bold colors and retro logos",
    image: "generated-design(2).png",
    style: "retro"
  },
  {
    id: 4,
    title: "Futuristic Tech-Wear",
    description: "Forward-looking designs with technical fabrics and innovative cuts",
    image: "generated-design(1).png",
    style: "futuristic"
  },
  {
    id: 5,
    title: "Anime-Inspired Graphics",
    description: "Vibrant designs influenced by Japanese animation aesthetics",
    image: "https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    style: "anime"
  },
  {
    id: 6,
    title: "Classic B&W Elegance",
    description: "Timeless monochromatic designs with sophisticated styling",
    image: "https://images.pexels.com/photos/4427816/pexels-photo-4427816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    style: "bw"
  }
];

const Examples: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredExamples = activeFilter
    ? examples.filter(example => example.style === activeFilter)
    : examples;

  return (
    <section id="examples" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Example Designs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our gallery of AI-generated brand designs to get inspired.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-8">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === null
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveFilter(null)}
          >
            All
          </button>
          {Array.from(new Set(examples.map(ex => ex.style))).map(style => (
            <button
              key={style}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === style
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveFilter(style)}
            >
              {style.charAt(0).toUpperCase() + style.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExamples.map(example => (
            <div
              key={example.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={example.image}
                  alt={example.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
                <p className="text-gray-600">{example.description}</p>
                <span className="inline-block mt-3 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                  {example.style.charAt(0).toUpperCase() + example.style.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Examples;