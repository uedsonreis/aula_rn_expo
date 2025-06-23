import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from '@expo/vector-icons/Ionicons'

import MapPage from './src/pages/Map'
import PlacePage from './src/pages/Place'

const Stack = createNativeStackNavigator()

function MapStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Map' component={MapPage} options={{ headerShown: false }} />
            <Stack.Screen name='Place' component={PlacePage} options={{ title: 'Lugar Novo' }} />
        </Stack.Navigator>
    )
}

function ListStack() {
    return (
        <View></View>
    )
}

const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name='MapTab' component={MapStack}
                    options={{
                        title: 'Mapa', headerShown: false,
                        tabBarIcon: () => <Ionicons name='map' size={26} />
                    }}
                />
                <Tab.Screen
                    name='ListTab' component={ListStack}
                    options={{
                        title: 'Lista', headerShown: false,
                        tabBarIcon: () => <Ionicons name='list' size={26} />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}