import * as d3 from "d3";
import MapboxGl from "mapbox-gl/dist/mapbox-gl.js";
import { setActiveCountry } from "../store/reducers/data/DataActions";
const svg = d3
  .select(".mapboxgl-canvas-container")
  .append("svg")
  .attr("class", "datapoints")
  .append("g");

export function generateInformationTips(d, map) {
  console.log(svg.selectAll("circle"));

  svg
    .selectAll("circle")
    .data(d)
    .enter()
    .append("circle")
    .on("click", d => {
      activeCurrentCountry(d);
    })
    .transition()
    .duration(0)
    .attr("cx", d => project([+d.long, +d.lat], map).x)
    .attr("cy", d => project([+d.long, +d.lat], map).y);

  const update = () => {
    svg
      .selectAll("circle")
      .attr("cx", d => project([+d.long, +d.lat], map).x)
      .attr("cy", d => project([+d.long, +d.lat]), map.y)
      .transition()
      .duration(750)
      .attr("r", 10);
  };

  update();

  map
    .on("viewreset", () => update())
    .on("move", () => update())
    .on("moveend", () => update())
    .on("zoom", () => update());
}
function project(coords, map) {
  console.log(coords, map);
  return map.project(new MapboxGl.LngLat(+coords[0], +coords[1]));
}

function activeCurrentCountry(country) {
  setActiveCountry(country);
}
