import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function AboutScreen({ route, navigation }){

    const {name} = route.params;

    useLayoutEffect(()=>{
        navigation.setOptions({
            title: name,
        })
    }, [navigation, name])

    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>About {name}</Text>
            <Button title="Update Name" onPress={()=>{navigation.setParams({name: "Devlopment"})}}/>
            <Button title="Go back with data" onPress={()=>{navigation.navigate("Home", {result: "Data from about"})}}/>
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