import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {offersPropTypes} from "../../propTypes";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

const MAP_ZOOM = 12;
const AMSTERDAM = [52.38333, 4.9];
const PIN = {
  SRC: `img/pin.svg`,
  SRC_ACTIVE: `img/pin-active.svg`,
  SIZE: [30, 30]
};

class Map extends PureComponent {
  constructor(props) {
    super(props);

    this._map = {};
    this._markersLayer = {};
    this._markers = {};
  }

  componentDidMount() {
    this._initMap();
  }

  componentDidUpdate() {
    this._handleMarkersRemove();
    this._addPoint(this.map);
  }

  _initMap() {
    const city = AMSTERDAM;
    this._map = leaflet.map(`map`, {
      center: city,
      zoom: MAP_ZOOM,
      zoomControl: false,
      marker: true
    });

    this._map.setView(city, MAP_ZOOM);

    this._markersLayer = leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    this._addPoint();
  }

  _addPoint() {
    const {offers, activeOffer} = this.props;

    const icon = leaflet.icon({
      iconUrl: PIN.SRC,
      iconSize: PIN.SIZE
    });

    let markers = [];
    offers.forEach((elem) => {
      const marker = leaflet.marker(elem.city.location, {icon});
      if (elem.id === activeOffer) {
        marker.setIcon(leaflet.icon({
          iconUrl: PIN.SRC_ACTIVE,
          iconSize: PIN.SIZE
        }));
      }
      this._markers[elem.id] = marker;
      markers.push(marker);

      this._markersLayer = leaflet.layerGroup(markers);
      this._markersLayer.addTo(this._map);
    });
  }

  _handleMarkersRemove() {
    if (this._markersLayer !== null) {
      this._markersLayer.clearLayers();
      this._markersLayer = null;
      this._markers = {};
    }
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
  className: PropTypes.string.isRequired,
  activeOffer: PropTypes.number.isRequired
};

export default Map;
