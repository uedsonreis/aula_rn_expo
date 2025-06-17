import { useRoute } from "@react-navigation/native"
import { Alert, Button, StyleSheet, TextInput, Text, View } from "react-native"
import { LatLng } from "react-native-maps"

export default function PlacePage() {

    const route = useRoute()
    const params = route.params as LatLng

    let name = ''
    let description = ''

    function save() {
        if (!name && name.trim() === '') {
            Alert.alert('O Nome é obrigatório!')
        }
        console.log('Nome: ', name)
        console.log('Desc: ', description)
    }

    return (
        <View style={styles.container}>
            <Text>Latitude: {params.latitude}</Text>
            <Text>Longitude: {params.longitude}</Text>
            
            <Text style={styles.label}>Informe os dados do novo local:</Text>

            <TextInput
                style={styles.inputName}
                placeholder="Nome" onChangeText={value => name = value}
            />

            <TextInput
                style={styles.inputDescription} numberOfLines={10} multiline
                placeholder="Descrição" onChangeText={value => description = value}
            />

            <View style={styles.button}>
                <Button title="Salvar" onPress={save} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    label: {
        fontSize: 16,
        marginVertical: 10,
        textAlign: "center",
        marginHorizontal: 20,
    },
    inputName: {
        borderWidth: 1,
        borderRadius: 3,
        marginVertical:10,
        marginHorizontal: 20,
    },
    inputDescription: {
        borderWidth: 1,
        borderRadius: 3,
        marginVertical:10,
        marginHorizontal: 20,
        textAlign: "justify",
    },
    button: {
        marginTop: 30,
        marginHorizontal: 50,
    }
})