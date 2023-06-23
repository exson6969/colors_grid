import React, { useState } from 'react';
import './ColorPalette.css';

const ColorPalette = ({ colors, onColorSelect }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    if (selectedColor === color) {
      setSelectedColor(null);
      onColorSelect(null);
    } else {
      setSelectedColor(color);
      onColorSelect(color);
    }
  };

  return (
    <div className="color-palette">
      {colors.map((color) => (
        <div
          key={color}
          className={`color-box ${selectedColor === color ? 'selected' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => handleColorClick(color)}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
