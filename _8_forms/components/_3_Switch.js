
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Switch } from "react-native";

export default function CustomSwitch() {

    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(()=>{
        console.log("Dark Mode: " + isDarkMode);
    }, [isDarkMode])
    
    //<Switch /> component is used for providing toggle functionality
    return (
        <View style={[styles.container]}>
            <View style={[styles.switchContainer]}>
                <Text style={[styles.text]}>Dark Mode</Text>

                <Switch value={isDarkMode} onValueChange={setDarkMode}
                    trackColor = {{false: "red", true: "green", }}
                    thumbColor = "pink"
                />
            </View>
            <Text style={[styles.text]}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    switchContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    text: {
        padding: 10,
        fontSize: 30,
    }
});