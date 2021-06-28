import React, { useState, useRef, useMemo, useCallback } from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { Card } from "react-bootstrap";

export default function AddMap() {
  const center = {
    lat: 51.505,
    lng: -0.09,
  };

  return (
    <Card
      className="subNavContainer"
      style={{ width: "960px", height: "735px" }}
    >
      <div className="mainContentColumn clearFix">
        <div className="columnContent">
          <div className="mainColumnPadding">
            <p></p>
            <div className="mapArea">
              <div className="mappingTool">
                <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
