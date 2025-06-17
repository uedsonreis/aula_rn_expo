import React from 'react'
import * as Location from 'expo-location'
import { StyleSheet, View } from 'react-native'
import MapView, { LongPressEvent } from 'react-native-maps'
import { NavigationProp, useNavigation } from '@react-navigation/native'

export default function MapPage() {

    const navigation = useNavigation<NavigationProp<any>>()
    const [location, setLocation] = React.useState<Location.LocationObject>()

    async function getGeoLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status === 'granted') {
            setLocation(await Location.getCurrentPositionAsync())
        }
    }

    React.useEffect(() => {
        getGeoLocation()
    }, [])

    function goToPlace(event: LongPressEvent) {
        navigation.navigate('Place', event.nativeEvent.coordinate)
    }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                showsUserLocation={true}
                onLongPress={goToPlace}
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