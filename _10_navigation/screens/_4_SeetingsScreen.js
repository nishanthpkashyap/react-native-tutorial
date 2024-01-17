import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

export default function SettingsScreen({route, navigation}){

    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>Settings screen</Text>
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