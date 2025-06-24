import { StyleSheet, View, Text } from 'react-native'

type Props = {
    title: string
    description?: string
}

export default function ListItem(props: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            { props.description && (
                <Text style={styles.description}>{props.description}</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 18,
    },
    description: {
        color: 'gray',
    }
})
