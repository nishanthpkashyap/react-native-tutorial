
import { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

export default function MultiLineTextInput() {
    const [name, setName] = useState("");
    return (
        <View style={[styles.container]}>
            <TextInput style={[styles.multiLineTextInput]} value={name} onChangeText={setName}
                placeholder="Message"
                multiline
            />
            <Text style={[styles.text]}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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