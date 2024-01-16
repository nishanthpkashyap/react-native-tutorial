
import { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Text, Switch } from "react-native";

export default function CustomSwitch() {

    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(()=>{
        console.log("Dark Mode: " + isDarkMode);
    }, [isDarkMode])
  
    const [name, setName] = useState("");
    return (
        <View style={[styles.container]}>
            {/* <TextInput style={[styles.multiLineTextInput]} value={name} onChangeText={setName}
                placeholder="Message"
                multiline
            /> */}
            <View style={[styles.switchContainer]}>
                <Text style={[styles.text]}>Dark Mode</Text>
                <Switch value={isDarkMode} onValueChange={setDarkMode}
                    trackColor={{false: "red", true: "green", }}
                    thumbColor={{false: "red", true: "green"}}
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
    multiLineTextInput: {
        margin: 12,
        textAlignVertical: "top",
        padding: 10,
        borderWidth: 1,
        minHeight: 100,
    },
    text: {
        padding: 10,
        fontSize: 30,
    }
});