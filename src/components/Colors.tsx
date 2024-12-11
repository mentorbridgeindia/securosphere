import React from "react";

const ColorPaletteShowcase: React.FC = () => {
  const handleMouseOver = (e: React.MouseEvent<HTMLButtonElement>) => {
    (e.target as HTMLButtonElement).style.backgroundColor = "#0D1F33";
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLButtonElement>) => {
    (e.target as HTMLButtonElement).style.backgroundColor = "#0D1F33";
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        backgroundColor: "#F9FAFB",
      }}
    >
      {/* Primary Color Section */}
      <div
        style={{
          backgroundColor: "#0D1F33",
          padding: "20px",
          color: "#FFFFFF",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ margin: 0 }}>Primary Color</h1>
        <p>Hex: #0D1F33</p>
      </div>

      <br />

      {/* Secondary Color Section */}
      <div
        style={{
          backgroundColor: "#BCC5D3",
          padding: "20px",
          color: "#0D1F33",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ margin: 0 }}>Secondary Color</h2>
        <p>Hex: #BCC5D3</p>
      </div>

      <br />

      {/* Buttons Section */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          style={{
            backgroundColor: "#0D1F33",
            color: "#FFFFFF",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Primary Button
        </button>

        
      </div>

      <br />
      

      {/* Text Section */}
      <div>
        <p style={{ color: "#0D1F33", margin: 0 }}>
          This is an example of Secondary Text (Hex: #0D1F33).
        </p>
        <p style={{ color: "#778a9b", margin: 0 }}>
          This is an example of Primary Text on a light background (Hex:
          #778a9b).
        </p>
      </div>
    </div>
  );
};

export default ColorPaletteShowcase;
