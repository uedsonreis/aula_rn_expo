import AsyncStorage from '@react-native-async-storage/async-storage'

import { Place } from '../models/place'

class PlaceRepository {

    private static readonly KEY = 'APP_PLACE@place_document'

    private async persist(list: Place[]) {
        await AsyncStorage.setItem(PlaceRepository.KEY, JSON.stringify(list))
    }

    public async getPlaces() {
        const json = await AsyncStorage.getItem(PlaceRepository.KEY)
        if (json) return JSON.parse(json) as Place[]
        return []
    }

    public async save(place: Place) {
        const list = await this.getPlaces()
        list.push(place)
        this.persist(list)
    }

}

export const placeRepo = new PlaceRepository()