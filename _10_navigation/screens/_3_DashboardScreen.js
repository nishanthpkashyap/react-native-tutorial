import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

export default function DashboardScreen({route, navigation}){

    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>Dashboard screen</Text>
            <Button title="Toggle Drawer Menu" onPress={()=>{navigation.toggleDrawer()}}/>
            <Button title="Go to Settings" onPress={()=>{navigation.jumpTo("Settings")}}/>

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