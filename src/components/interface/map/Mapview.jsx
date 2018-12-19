import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoibm9jbHVlNHUiLCJhIjoiY2pvZWY2ZTA5MXdkbjN3bGVicm1hZDNvZCJ9.kIU-GIm7Cl36xhEFLaPU1w"
});

export default function Mapview(props) {
  return (
    <Map
      style={"mapbox://styles/noclue4u/cjpsfnz0m4reg2rnpz6xi6mwf"}
      center={[9.589804, 48.115494]}
      zoom={[1.5]}
      containerStyle={
        props.halve
          ? { height: "50vh", width: "105%" }
          : { height: "100vh", width: "100vw" }
      }
    >
      {" "}
      <Layer
        type="fill"
        id="countries"
        source={{
          type: "vector",
          url: "mapbox://noclue4u.cx8o7fda"
        }}
        // source={"ne_10m_admin_0_countries-c2ruer"}
        source={"ADM0_A3_IS"}
        paint={{
          "fill-color": "#52489C", //this is the color you want your tileset to have (I used a nice purple color)
          "fill-outline-color": "#F2F2F2"
        }}
      >
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
      </Layer>
    </Map>
  );
}
