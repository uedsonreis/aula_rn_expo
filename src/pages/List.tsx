import React from 'react'
import { FlatList, View, Text } from "react-native"

import { Place } from '../models/place'
import { placeRepo } from '../services/place.repo'
import { useFocusEffect } from '@react-navigation/native'
import ListItem from '../components/ListItem'

export default function ListPage() {

    const [places, setPlaces] = React.useState<Place[]>([])

    useFocusEffect(() => {
        placeRepo.getPlaces().then(list => setPlaces(list))
    })

    return (
        <View style={{ marginTop: 40 }}>
            <FlatList
                data={places}
                keyExtractor={place => `${place.latitude}-${place.longitude}`}
                renderItem={({ item }) => <ListItem title={item.name!} description={item.description} />}
            />
        </View>
    )
}