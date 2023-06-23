import React from 'react';
import ColorPalette from './components/ColorPalette/ColorPalette';

const App = () => {
  const handleColorSelect = (color) => {
    console.log('Selected color:', color);
  };

  const colors = [
    '#FF0000', '#FFA500', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF', '#800080',
    '#FFC0CB', '#FF69B4', '#FF1493', '#C71585', '#DB7093', '#FF4500', '#FF8C00',
    '#ADFF2F', '#7CFC00', '#00FF7F', '#40E0D0', '#00BFFF', '#1E90FF', '#00008B', '#8A2BE2',
    '#B22222', '#CD5C5C', '#DC143C', '#FF6347', '#FF7F50', '#FFA07A', '#FFD700', '#DAA520',
    '#BDB76B', '#808000', '#556B2F', '#006400', '#32CD32', '#8FBC8F', '#90EE90', '#00FA9A',
    '#20B2AA', '#008B8B', '#008080', '#4682B4', '#4169E1'
  ];

  return (
    <div>
      <h1>Color Palette</h1>
      <ColorPalette colors={colors} onColorSelect={handleColorSelect} />
    </div>
  );
};

export default App;
