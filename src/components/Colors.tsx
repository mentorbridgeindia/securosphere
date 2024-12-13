import React from "react";

const ColorPaletteShowcase: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        backgroundColor: "#F5F7FA", // Main Background
      }}
    >
      {/* Primary Color Section */}
      <div
        style={{
          backgroundColor: "#002851", // Primary Color
          padding: "20px",
          color: "#FFFFFF", // Text on Primary Color
          borderRadius: "8px",
        }}
      >
        <h1 style={{ margin: 0 }}>Primary Color</h1>
        <p>Hex: #002851</p>
      </div>

      <br />

      {/* Secondary Color Section */}
      <div
        style={{
          backgroundColor: "#BCCED6", // Secondary Color
          padding: "20px",
          color: "#002851", // Text on Secondary Color
          borderRadius: "8px",
        }}
      >
        <h2 style={{ margin: 0 }}>Secondary Color</h2>
        <p>Hex: #BCCED6</p>
      </div>

      <br />

      {/* Buttons Section */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {/* Primary Button */}
        <div>
          <button
            style={{
              backgroundColor: "#002851", // Primary Button Background
              color: "#FFFFFF", // Primary Button Text
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Primary Button
          </button>
          <p>Hex: #002851 (Background), #FFFFFF (Text)</p>
        </div>

        {/* Secondary Button */}
        <div>
          <button
            style={{
              backgroundColor: "#BCCED6", // Secondary Button Background
              color: "#002851", // Secondary Button Text
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Secondary Button
          </button>
          <p>Hex: #BCCED6 (Background), #002851 (Text)</p>
        </div>

        {/* Cancel Button */}
        <div>
          <button
            style={{
              backgroundColor: "#D9534F", // Cancel Button Background
              color: "#FFFFFF", // Cancel Button Text
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Cancel Button
          </button>
          <p>Hex: #D9543F (Background), #FFFFFF (Text)</p>
        </div>
      </div>

      <br />

      {/* Typography Section */}
      <div>
        <p style={{ color: "#002851", margin: 0 }}>
          This is an example of Primary Text (Hex: #002851).
        </p>
        <p style={{ color: "#4A4A4A", margin: 0 }}>
          This is an example of Secondary Text (Hex: #4A4A4A).
        </p>
        <p style={{ color: "#95A7B0", margin: 0 }}>
          This is an example of Placeholder Text (Hex: #95A7B0).
        </p>
      </div>

      <br />

      {/* Error Messages */}
      <div
        style={{
          backgroundColor: "#F8D7DA", // Error Background
          color: "#D9534F", // Error Text
          padding: "20px",
          border: "1px solid #F5C6CB", // Error Border
          borderRadius: "4px",
        }}
      >
        <p>Error: Something went wrong.</p>
        <p>Hex: #F8D7DA (Background), #D9534F (Text), #F5C6CB (Border)</p>
      </div>

      <br />

      {/* Success Messages */}
      <div
        style={{
          backgroundColor: "#D4EDDA", // Success Background
          color: "#28A745", // Success Text
          padding: "20px",
          border: "1px solid #C3E6CB", // Success Border
          borderRadius: "4px",
        }}
      >
        <p>Success: Operation completed successfully!</p>
        <p>Hex: #D4EDDA (Background), #28A745 (Text), #C3E6CB (Border)</p>
      </div>
    </div>
  );
};

export default ColorPaletteShowcase;
