import { useEffect, useState, MutableRefObject, useRef } from 'react';
import {Map, TileLayer} from 'leaflet';
import { LocationType } from '../api/types';
import { MAP_ATTRIBUTION, MAP_URL_TEMPLATE } from '../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: LocationType,
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude
        },
        zoom: city.zoom
      });

      const layer = new TileLayer(MAP_URL_TEMPLATE, { attribution: MAP_ATTRIBUTION});

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [city.latitude, city.longitude, city.zoom, mapRef]);

  useEffect(() => {
    if (map) {
      const mapCenter = map.getCenter();
      if (mapCenter.lat !== city.latitude || mapCenter.lng !== city.longitude) {
        map.flyTo({
          lat: city.latitude,
          lng: city.longitude
        }, city.zoom, {
          duration: 1.5
        });
      }
    }
  }, [city, map]);

  return map;
}

export default useMap;
