import React from 'react'
import MapView from 'react-native-maps'
import * as Location from 'expo-location'
import { StyleSheet, View } from 'react-native'

export default function MapPage() {

    const [location, setLocation] = React.useState<Location.LocationObject>();

    async function getGeoLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status === 'granted') {
            setLocation(await Location.getCurrentPositionAsync())
        }
    }

    React.useEffect(() => {
        getGeoLocation()
    }, [])

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                showsUserLocation={true}
                initialCamera={location && {
                    center: {
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                    },
                    heading: 0,
                    pitch: 0,
                    zoom: 15
                }}
            >

            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    }
})