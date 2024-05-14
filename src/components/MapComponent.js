import React, { useEffect, useState, useRef } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";

const MapComponent = () => {
    const [position, setPosition] = useState([9.080023380085251, 45.820119656293954]);

    return (
        <MapWithPosition position={position} />
    );
};

const MapWithPosition = ({ position }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [zoom] = useState(13);
    maptilersdk.config.apiKey = '2vC0gE4hxstxFe8JrmCy';

    useEffect(() => {
        if (!map.current) {
            map.current = new maptilersdk.Map({
                container: mapContainer.current,
                style: "bd0898e0-e9be-44e7-a499-482e18f54b16",
                center: position,
                zoom: zoom,
                navigationControl: false,
                enableHighAccuracy: true,
                interactive: false
            });

            // Rimuovi elementi HTML che non servono
            const elementsToRemove = document.querySelectorAll('.maplibregl-control-container');
            elementsToRemove.forEach(element => {
                element.remove();
            });
        } else {
            // Se la mappa è già stata inizializzata, aggiorna solo la posizione del centro
            map.current.setCenter(position);
        }

        // Aggiungi il marker alla posizione specificata
        const marker = new maptilersdk.Marker({ color: "#1aa3a3" })
            .setLngLat(position)
            .addTo(map.current);

    }, [position, zoom]);

    return (
        <div id="map" className="map" ref={mapContainer}></div>
    );
};

export default MapComponent;
