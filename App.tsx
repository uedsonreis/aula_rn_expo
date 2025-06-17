import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MapPage from './src/pages/Map'
import PlacePage from './src/pages/Place'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>

            <Stack.Navigator>
                <Stack.Screen name='Map' component={MapPage} options={{ headerShown: false }} />
                <Stack.Screen name='Place' component={PlacePage} options={{ title: 'Lugar Novo' }} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}