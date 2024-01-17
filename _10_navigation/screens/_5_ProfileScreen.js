import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen({route, navigation}){

    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>Profile screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});