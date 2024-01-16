
import { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

export default function Textinput() {
    const [name, setName] = useState("");
    return (
        <View style={[styles.container]}>
            <TextInput style={[styles.textInput]} value={name} onChangeText={setName}
                placeholder="Name"
                keyboardType="default"
                // secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Text style={[styles.text]}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        height: 40,
        margin: 12,
        padding: 10,
        borderWidth: 1,
    },
    text: {
        padding: 10,
        fontSize: 30,
    }
});