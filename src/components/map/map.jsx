import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {offersPropTypes} from "../../propTypes";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

const MAP_ZOOM = 12;
const AMSTERDAM = [52.38333, 4.9];
const PIN = {
  SRC: `img/pin.svg`,
  SIZE: [30, 30]
};

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._initMap();
  }

  _initMap() {
    const city = AMSTERDAM;
    const map = leaflet.map(`map`, {
      center: city,
      zoom: MAP_ZOOM,
      zoomControl: false,
      marker: true
    });

    map.setView(city, MAP_ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    this._addPoint(map);
  }

  _addPoint(map) {
    const {offers} = this.props;

    const icon = leaflet.icon({
      iconUrl: PIN.SRC,
      iconSize: PIN.SIZE
    });

    offers.forEach((element) => {
      leaflet
        .marker(element.city.location, {icon})
        .addTo(map);
    });
  }

  render() {
    const {className} = this.props;

    return (
      <section id="map" className={`${className}__map map`}>
      </section>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(offersPropTypes).isRequired
  ).isRequired,
  className: PropTypes.string.isRequired
};

export default Map;
