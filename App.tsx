import { View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MapPage from './src/pages/Map'
import ListPage from './src/pages/List'
import PlacePage from './src/pages/Place'

const Stack = createNativeStackNavigator()

function MapStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Map' component={MapPage} options={{ headerShown: false, title: 'Mapa' }} />
            <Stack.Screen name='Place' component={PlacePage} options={{ title: 'Lugar Novo' }} />
        </Stack.Navigator>
    )
}

function ListStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='List' component={ListPage} options={{ title: 'Lista' }} />
            <Stack.Screen name='Place' component={PlacePage} options={{ title: 'Lugar Novo' }} />
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={ ({ route }) => ({
                    tabBarIcon: ({color, size}) => {
                        let iconName: 'map' | 'list'
                        
                        if (route.name === 'MapTab') iconName = 'map'
                        else iconName = 'list'

                        return <Ionicons name={iconName} size={size} color={color} />
                    }
                })}
            >
                <Tab.Screen
                    name='MapTab' component={MapStack}
                    options={{ title: 'Mapa', headerShown: false }}
                />
                <Tab.Screen
                    name='ListTab' component={ListStack}
                    options={{ title: 'Lista', headerShown: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}