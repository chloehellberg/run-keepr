import React, { useState, useRef, useMemo, useCallback } from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

function Map() {
  const center = {
    lat: 51.505,
    lng: -0.09,
  };

  function DraggableMarker() {
    const [draggable, setDraggable] = useState(false);
    const [position, setPosition] = useState(center);
    const markerRef = useRef(null);
    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            setPosition(marker.getLatLng());
          }
        },
      }),
      []
    );
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d);
    }, []);

    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
        icon={
          new Icon({
            iconUrl: markerIconPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })
        }
      >
        <Popup minWidth={70}>
          <span onClick={toggleDraggable}>
            {draggable
              ? "Marker is draggable"
              : "Click here to make marker draggable"}
          </span>
        </Popup>
      </Marker>
    );
  }

  return (
    <React.Fragment>
      <div className="leftContentColumn">
        <div className="clearFix">
          <a href="/new/route">
            <div className="addButton">+</div>
          </a>
          <h3 className="userHeader_Routes">ROUTES</h3>
          <div className="mainColumnPadding">
            <div className="routesNav">
              <ul className="navPills_Routes nav-stacked secondaryNav routes">
                <li className="routesList" defaultActiveKey="#first">
                  <a href="#first">
                    <span className="unitDistance">2.11 mi.</span>Tilikum to
                    Hawthorne
                  </a>
                </li>
                <li className="routesList" defaultActiveKey="#first">
                  <a href="/user/route/routeId">
                    <span className="unitDistance">3 mi.</span>Alameda Run
                  </a>
                </li>
                <li className="routesList" defaultActiveKey="#first">
                  <a href="/user/route/routeId">
                    <span className="unitDistance">5.15 mi.</span>Reed College
                  </a>
                </li>
                <li className="routesList" defaultActiveKey="#first">
                  <a href="/user/route/routeId">
                    <span className="unitDistance">4 mi.</span>Rose City Golf
                    Run
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mainContentColumn clearFix">
        <div className="columnContent">
          <h2 class="userHeader">
            <div className="deleteRouteLink microText">
              <a
                href="/new/route?updateRoute=routeId"
                className="activityEdit activityActionItem"
              >
                Edit
              </a>
              <div className="dividerWhite right"></div>
              <a
                alertMessage="Are you sure you want to delete this route? This cannot be undone..."
                className="deleteRoute activityActionItem"
                href="/route/delete/routeId"
                alertTitle="Delete Route?"
              >
                Delete
              </a>
              <div className="dividerWhite right" />
              <div className="activityActionItem">
                <div className="mainText" />
                <div
                  className="icon private"
                  data-toggle="tooltip"
                  data-container="body"
                  title="Private"
                ></div>
              </div>
            </div>
            Tilikum to Hawthorne<span className="details"> (2.11 mi)</span>
          </h2>
          <div className="mainColumnPadding">
            <p></p>
            <div className="mapArea">
              <div className="mappingTool">
                <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <DraggableMarker />
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Map;
