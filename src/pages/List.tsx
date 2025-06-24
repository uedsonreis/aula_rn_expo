import React from 'react'
import { FlatList, View } from "react-native"
import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native'

import { Place } from '../models/place'
import ListItem from '../components/ListItem'
import { placeRepo } from '../services/place.repo'

export default function ListPage() {

    const navigation = useNavigation<NavigationProp<any>>()
    const [places, setPlaces] = React.useState<Place[]>([])

    useFocusEffect(() => {
        placeRepo.getPlaces().then(list => setPlaces(list))
    })

    function goToEditPlace(place: Place) {
        navigation.navigate('Place', place)
    }

    return (
        <View>
            <FlatList
                data={places}
                keyExtractor={place => `${place.latitude}-${place.longitude}`}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.name!}
                        description={item.description}
                        onPress={() => goToEditPlace(item)}
                    />
                )}
            />
        </View>
    )
}