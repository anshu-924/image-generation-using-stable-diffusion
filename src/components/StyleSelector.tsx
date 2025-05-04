import React from 'react';

interface Style {
  id: string;
  name: string;
  description: string;
}

interface StyleSelectorProps {
  styles: Style[];
  selectedStyle: string;
  onSelectStyle: (styleId: string) => void;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ 
  styles, 
  selectedStyle, 
  onSelectStyle 
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {styles.map((style) => (
        <div
          key={style.id}
          className={`
            border rounded-lg p-3 cursor-pointer transition-all duration-200
            ${selectedStyle === style.id 
              ? 'border-indigo-600 bg-indigo-50 ring-2 ring-indigo-200' 
              : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50'
            }
          `}
          onClick={() => onSelectStyle(style.id)}
        >
          <div className="text-center">
            <div className="font-medium text-gray-800">{style.name}</div>
            <div className="text-xs text-gray-500 mt-1">{style.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StyleSelector;