import React from "react";
import { Map, Marker } from "pigeon-maps";

interface UserLocation {
  country: string;
  users: number;
}

const countryCoordinates: { [key: string]: [number, number] } = {
  "United States": [37.0902, -95.7129],
  "United Kingdom": [55.3781, -3.436],
  Canada: [56.1304, -106.3468],
  Australia: [-25.2744, 133.7751],
  India: [20.5937, 78.9629],
  Brazil: [-14.235, -51.9253],
  Germany: [51.1657, 10.4515],
  France: [46.2276, 2.2137],
  Spain: [40.4637, -3.7492],
  Italy: [41.8719, 12.5674],
  Japan: [36.2048, 138.2529],
  China: [35.8617, 104.1954],
  Russia: [61.524, 105.3188],
  "South Africa": [-30.5595, 22.9375],
  Mexico: [23.6345, -102.5528],
  Argentina: [-38.4161, -63.6167],
  Egypt: [26.8206, 30.8025],
  "Saudi Arabia": [23.8859, 45.0792],
  "South Korea": [35.9078, 127.7669],
  Indonesia: [-0.7893, 113.9213],
  Turkey: [38.9637, 35.2433],
  Thailand: [15.87, 100.9925],
  Vietnam: [14.0583, 108.2772],
  Malaysia: [4.2105, 101.9758],
  Singapore: [1.3521, 103.8198],
  Netherlands: [52.1326, 5.2913],
  Belgium: [50.8503, 4.3517],
  Sweden: [60.1282, 18.6435],
  Norway: [60.472, 8.4689],
  Denmark: [56.2639, 9.5018],
};

const userLocations: UserLocation[] = [
  { country: "United States", users: 450 },
  { country: "United Kingdom", users: 270 },
  { country: "Canada", users: 180 },
  { country: "Australia", users: 150 },
  { country: "India", users: 220 },
  { country: "Brazil", users: 130 },
  { country: "Germany", users: 160 },
  { country: "France", users: 100 },
];

const WorldMap = () => {
  const [selectedMarker, setSelectedMarker] =
    React.useState<UserLocation | null>(null);

  const getMarkerSize = (users: number) => {
    return Math.max(30, Math.min(60, 30 + users / 10));
  };

  return (
    <div
      style={{ height: "400px", width: "100%", position: "relative" }}
      className=" rounded-4 border-0 shadow-sm"
    >
      <Map
        defaultCenter={[20, 0]}
        defaultZoom={2}
        minZoom={2}
        maxZoom={8}
        attribution={false}
      >
        {userLocations.map((location) => {
          const coordinates = countryCoordinates[location.country];
          if (!coordinates) return null;

          return (
            <Marker
              key={location.country}
              width={getMarkerSize(location.users)}
              anchor={coordinates}
              onClick={() => setSelectedMarker(location)}
              color="#FF6384"
            />
          );
        })}
      </Map>

      {selectedMarker && (
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            left: "20px",
            backgroundColor: "white",
            padding: "12px 16px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            zIndex: 1000,
            minWidth: "200px",
          }}
        >
          <div style={{ marginBottom: "8px" }}>
            <strong style={{ fontSize: "16px", color: "#333" }}>
              {selectedMarker.country}
            </strong>
          </div>
          <div style={{ color: "#666" }}>
            Active Users: {selectedMarker.users.toLocaleString()}
          </div>
          <button
            onClick={() => setSelectedMarker(null)}
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              border: "none",
              background: "none",
              cursor: "pointer",
              fontSize: "18px",
              color: "#999",
              padding: "4px",
              lineHeight: 1,
            }}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default WorldMap;
