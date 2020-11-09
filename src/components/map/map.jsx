import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {offersPropTypes} from "../../propTypes";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._initMap();
  }

  _initMap() {
    const city = [52.38333, 4.9];
    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);

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
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    offers.forEach((element) => {
      leaflet
        .marker(element.city.location, {icon})
        .addTo(map);
    });
  }

  render() {
    return (
      <section id="map" className="cities__map map">
      </section>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(offersPropTypes).isRequired
  ).isRequired,
};

export default Map;
