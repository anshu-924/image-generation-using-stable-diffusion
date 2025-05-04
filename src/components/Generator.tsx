import React, { useState } from 'react';
import StyleSelector from './StyleSelector';
import { Wand2 } from 'lucide-react';

const styles = [
  { id: 'anime', name: 'Anime', description: 'Japanese animation style with vibrant colors' },
  { id: 'realistic', name: 'Realistic', description: 'Photo-realistic designs with fine details' },
  { id: 'ai', name: 'AI Art', description: 'Modern AI-generated artistic style' },
  { id: 'movie', name: 'Movie', description: 'Cinematic style inspired by films' },
  { id: 'bw', name: 'B&W', description: 'Classic black and white designs' },
  { id: 'retro', name: 'Retro', description: '70s-90s vintage aesthetic' },
  { id: 'minimalist', name: 'Minimalist', description: 'Clean, simple designs with few elements' },
  { id: 'futuristic', name: 'Futuristic', description: 'Forward-looking designs with tech elements' },
];

const Generator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('realistic');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState('');
  const [error, setError] = useState('');
  const [aiPower, setAiPower] = useState(50);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setError('');
    try {
      const response = await fetch('http://localhost:8000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          style: selectedStyle,
          num_inference_steps: aiPower
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      setGeneratedImage(data.image);
    } catch (err) {
      setError('Failed to generate image. Please try again.');
      console.error('Generation error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="generator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Generate Your Design</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Describe your perfect clothing brand or design and select a style. Our AI will create something unique just for you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="mb-6">
            <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
              Describe your design
            </label>
            <textarea
              id="prompt"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
              placeholder="E.g., A streetwear brand with urban aesthetic featuring dragons and Japanese characters"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>
          </div>

          <div className="mb-6">
            <label htmlFor="aiPower" className="block text-sm font-medium text-gray-700 mb-2">
              AI Power (Generation Quality) - {aiPower} steps
            </label>
            <input
              type="range"
              id="aiPower"
              min="20"
              max="100"
              value={aiPower}
              onChange={(e) => setAiPower(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Faster</span>
              <span>Better Quality</span>
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Choose a style
            </label>
            <StyleSelector 
              styles={styles} 
              selectedStyle={selectedStyle} 
              onSelectStyle={setSelectedStyle} 
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className={`flex items-center justify-center px-8 py-3 rounded-full font-medium text-white transition-all duration-300 ${
                !prompt.trim() || isGenerating
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg transform hover:scale-105'
              }`}
            >
              <Wand2 size={18} className="mr-2" />
              {isGenerating ? 'Generating...' : 'Generate Design'}
            </button>
          </div>

          {isGenerating && (
            <div className="mt-8 flex justify-center">
              <div className="w-12 h-12 border-4 border-t-indigo-600 border-indigo-200 rounded-full animate-spin"></div>
            </div>
          )}

          {error && (
            <div className="mt-4 text-red-600 text-center">
              {error}
            </div>
          )}

          {generatedImage && !isGenerating && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-center">Your Generated Design</h3>
              <div className="relative overflow-hidden rounded-xl shadow-md">
                <img
                  src={generatedImage}
                  alt="Generated design"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-4 flex justify-center space-x-4">
                <button 
                  onClick={handleGenerate}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-indigo-600 hover:text-indigo-600 transition-colors duration-200"
                >
                  Regenerate
                </button>
                <a 
                  href={generatedImage}
                  download="generated-design.png"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                  Download
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Generator;