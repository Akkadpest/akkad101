import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import CheckoutProgress from '../shared/CheckoutProgress';
import ActionButton from '../shared/ActionButton';
import Heading from '../shared/Heading';
import PlacesAutocomplete from '../shared/PlacesAutocomplete';
import { useAppDispatch, useAppSelector } from '../hooks';
import { selectLocation, selectLocationName, selectPhone, selectEmail, setEmail, setLocation, setLocationName, setPhone } from '../store/cart';
import { useGetProfileQuery } from '../store/bookings';
import { useEffect, useState, useCallback } from 'react';

const API_KEY = 'AIzaSyAPLWXYkp2625RATSkcHqTiAPJrI7JrvTw';

const DUBAI_BOUNDS = {
    north: 25.36,
    south: 24.79,
    east: 55.55,
    west: 54.89
};

const DUBAI_CENTER = { lat: 25.2048, lng: 55.2708 };

const LocationStep = ({ goToStep }) => {
    const dispatch = useAppDispatch(),
        location = useAppSelector(selectLocation),
        locationName = useAppSelector(selectLocationName),
        phone = useAppSelector(selectPhone),
        email = useAppSelector(selectEmail),
        { data } = useGetProfileQuery();

    const [area, setArea] = useState('');
    const [building, setBuilding] = useState('');
    const [flat, setFlat] = useState('');
    const [baseAddress, setBaseAddress] = useState('');

    useEffect(() => {
        if (data === undefined) {
            return;
        }
        if (data.user !== null) {
            dispatch( setPhone(data.user.phone) );
            dispatch( setEmail(data.user.email) );
        }
    }, [data, dispatch]);

    // Parse existing locationName on mount to populate fields
    useEffect(() => {
        if (locationName && !baseAddress) {
            setBaseAddress(locationName);
        }
    }, []);

    const buildLocationName = useCallback((base, areaVal, buildingVal, flatVal) => {
        const parts = [base, areaVal, buildingVal, flatVal].filter(p => p.trim() !== '');
        return parts.join(', ');
    }, []);

    // Update locationName whenever address parts change
    useEffect(() => {
        const combined = buildLocationName(baseAddress, area, building, flat);
        if (combined !== '') {
            dispatch(setLocationName(combined));
        }
    }, [baseAddress, area, building, flat, buildLocationName, dispatch]);

    const saveLocation = (ev) => {
        const lat = ev.latLng?.lat(),
            lng = ev.latLng?.lng();
        if (lat === undefined || lng === undefined) {
            return;
        }

        // Check if within Dubai bounds
        if (lat < DUBAI_BOUNDS.south || lat > DUBAI_BOUNDS.north ||
            lng < DUBAI_BOUNDS.west || lng > DUBAI_BOUNDS.east) {
            alert('Please select a location within Dubai');
            return;
        }

        dispatch(
            setLocation({ lat, lng })
        );
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            location: ev.latLng
        }).then((response) => {
            if (response.results.length > 0) {
                const addressComponents = response.results[0].address_components;
                const emirateComponent = addressComponents.find((component) =>
                    component.types.includes('administrative_area_level_1')
                );

                let isDubai = true;
                if (emirateComponent) {
                    isDubai = emirateComponent.long_name.toLowerCase().includes('dubai');
                }

                if (isDubai) {
                    setBaseAddress(response.results[0].formatted_address);

                    // Auto-populate address fields from geocoding
                    const getComponent = (...types) => {
                        const comp = addressComponents.find(c => types.some(t => c.types.includes(t)));
                        return comp ? comp.long_name : '';
                    };

                    const areaValue = getComponent('sublocality_level_1', 'sublocality', 'neighborhood');
                    const buildingValue = getComponent('premise', 'establishment', 'point_of_interest');
                    const flatValue = getComponent('subpremise');

                    if (areaValue) setArea(areaValue);
                    if (buildingValue) setBuilding(buildingValue);
                    if (flatValue) setFlat(flatValue);
                } else {
                    setBaseAddress('');
                    dispatch( setLocationName('') );
                    alert('Please select a location within Dubai');
                }
            }
        });
    };

    const stepInvalid = phone === '' || email === '' || locationName === '' || area === '' || building === '' || flat === '';

    const inputClass = "akdbw-w-full akdbw-border akdbw-border-border_gray akdbw-py-2 akdbw-px-4 akdbw-rounded-md";

    return (
        <div>
            <CheckoutProgress step={ 3 } />
            <div className="akdbw-grid akdbw-grid-cols-1 akdbw-pt-5 akdbw-gap-5 akdbw-pb-5">
                <div className="akdbw-col-span-1">
                    <div className="akdbw-shadow-md akdbw-rounded-md akdbw-p-5">
                        <APIProvider apiKey={ API_KEY } libraries={['places']}>
                            <div className="akdbw-pb-3">
                                <PlacesAutocomplete onPlaceSelected={ (address) => setBaseAddress(address) } />
                            </div>
                            <div className="akdbw-h-[300px] akdbw-mt-1">
                                <Map
                                    zoom={ 11 }
                                    center={ location.lat !== 25.090235 ? { lat: location.lat, lng: location.lng } : DUBAI_CENTER }
                                    restriction={{
                                        latLngBounds: DUBAI_BOUNDS,
                                        strictBounds: true
                                    }}
                                >
                                    <Marker
                                        position={ { lat: location.lat, lng: location.lng } }
                                        draggable={ true }
                                        onDragEnd={ saveLocation }
                                    />
                                </Map>
                            </div>
                        </APIProvider>

                        <div className="akdbw-mt-5 akdbw-space-y-3">
                            <div className="akdbw-flex akdbw-flex-col md:akdbw-flex-row akdbw-gap-3">
                                <div className="akdbw-flex-1">
                                    <label className="akdbw-font-bold akdbw-block akdbw-mb-1 akdbw-text-sm">Area *</label>
                                    <input
                                        type="text"
                                        className={ inputClass }
                                        placeholder="e.g. Marina, JBR, Downtown"
                                        value={ area }
                                        onChange={ ev => setArea(ev.target.value) }
                                    />
                                </div>
                                <div className="akdbw-flex-1">
                                    <label className="akdbw-font-bold akdbw-block akdbw-mb-1 akdbw-text-sm">Building Name *</label>
                                    <input
                                        type="text"
                                        className={ inputClass }
                                        placeholder="Building name"
                                        value={ building }
                                        onChange={ ev => setBuilding(ev.target.value) }
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="akdbw-font-bold akdbw-block akdbw-mb-1 akdbw-text-sm">Flat / Office Number *</label>
                                <input
                                    type="text"
                                    className={ inputClass }
                                    placeholder="Flat or office number"
                                    value={ flat }
                                    onChange={ ev => setFlat(ev.target.value) }
                                />
                            </div>
                        </div>

                        <div className="akdbw-mt-5 akdbw-space-y-3">
                            <div className="akdbw-flex akdbw-flex-col md:akdbw-flex-row akdbw-gap-3">
                                <div className="akdbw-flex-1">
                                    <label className="akdbw-font-bold akdbw-block akdbw-mb-1 akdbw-text-sm">Phone Number *</label>
                                    <input
                                        type="text"
                                        className={ inputClass }
                                        name="phone"
                                        placeholder="Phone number"
                                        value={ phone }
                                        onChange={ ev => dispatch( setPhone(ev.target.value) ) }
                                    />
                                </div>
                                <div className="akdbw-flex-1">
                                    <label className="akdbw-font-bold akdbw-block akdbw-mb-1 akdbw-text-sm">Email *</label>
                                    <input
                                        type="email"
                                        className={ inputClass }
                                        name="email"
                                        placeholder="your@email.com"
                                        value={ email }
                                        onChange={ ev => dispatch( setEmail(ev.target.value) ) }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="akdbw-flex akdbw-items-center akdbw-py-2 akdbw-px-10 md:akdbw-pt-10 akdbw-justify-between akdbw-bg-white">
                <ActionButton uppercase={ true } onClick={ () => goToStep('date_time') } inverse={ true }>Prev</ActionButton>
                <ActionButton uppercase={ true } disabled={ stepInvalid } onClick={ () => goToStep('payment') }>Next</ActionButton>
            </div>
        </div>
    );
};

export default LocationStep;
