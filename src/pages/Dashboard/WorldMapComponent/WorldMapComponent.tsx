import React from "react";
import { Card } from "react-bootstrap";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import worldMapData from "world-atlas/countries-110m.json";
import "./WorldMapComponent.scss";

interface UserLocation {
  coordinates: [number, number];
}

interface WorldMapComponentProps {
  users: UserLocation[];
}

const WorldMapComponent = ({ users }: WorldMapComponentProps) => {
  return (
    <Card
      className="world-map-card border-0 shadow-sm"
      style={{ backgroundColor: "#eef3ff" }}
    >
      <Card.Body>
        <div className="d-flex align-items-center mb-2">
          <h5 className="card-title mt-2">User Locations</h5>
        </div>
        <div className="map-container">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              scale: window.innerWidth < 768 ? 80 : 120,
              center: [0, 20],
            }}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "500px",
            }}
          >
            <Geographies geography={worldMapData}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies>
            {users.map((user, index) => (
              <Marker key={index} coordinates={user.coordinates}>
                <circle r={window.innerWidth < 768 ? 3 : 5} fill="#FF5533" />
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </Card.Body>
    </Card>
  );
};

export default WorldMapComponent;
