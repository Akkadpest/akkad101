import { useMapsLibrary } from '@vis.gl/react-google-maps';
import { useRef, useEffect } from 'react';
import { useAppDispatch } from '../hooks';
import { setLocation } from '../store/cart';

const PlacesAutocomplete = ({ onPlaceSelected }) => {
    const inputRef = useRef(null),
        autocompleteRef = useRef(null),
        onPlaceSelectedRef = useRef(onPlaceSelected),
        dispatch = useAppDispatch(),
        placesLib = useMapsLibrary('places');

    onPlaceSelectedRef.current = onPlaceSelected;

    useEffect(() => {
        if (!placesLib || !inputRef.current || autocompleteRef.current) return;

        const dubaiBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(24.79, 54.89),
            new google.maps.LatLng(25.36, 55.55)
        );

        const autocomplete = new placesLib.Autocomplete(inputRef.current, {
            fields: ['name', 'formatted_address', 'geometry'],
            componentRestrictions: { country: 'ae' },
            bounds: dubaiBounds,
            strictBounds: true
        });

        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            if (place) {
                const parts = [];
                if (place.name) {
                    parts.push(place.name);
                }
                if (place.formatted_address) {
                    parts.push(place.formatted_address);
                }
                const address = parts.join(' - ');
                if (onPlaceSelectedRef.current) {
                    onPlaceSelectedRef.current(address);
                }
                if (place.geometry?.location) {
                    dispatch(setLocation({
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng()
                    }));
                }
            }
        });

        autocompleteRef.current = autocomplete;
    }, [placesLib, dispatch]);

    return (
        <input
            className="akdbw-w-full akdbw-border akdbw-border-border_gray akdbw-py-2 akdbw-px-4"
            ref={inputRef}
            placeholder="Search area in Dubai..."
        />
    );
};

export default PlacesAutocomplete;
