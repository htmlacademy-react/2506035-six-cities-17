import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map.ts';
import { Point } from '../../types.ts';
import leaflet, {layerGroup, Marker} from 'leaflet';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const.ts';
import { LocationType } from '../../api/types.ts';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13, 39],
});

type Props = {
  city: LocationType;
  points: Point[];
  activeOfferId: string | null;
  className?: string;
}

function CityMap({ activeOfferId, points, city, className }: Props) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            activeOfferId !== undefined && point.id === activeOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [activeOfferId, map, points]);

  return (
    <section className={className} ref={mapRef}></section>
  );
}

export default CityMap;
