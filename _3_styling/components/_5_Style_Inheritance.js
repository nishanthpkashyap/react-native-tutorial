import { View, StyleSheet, Text } from "react-native";

export default function StyleInheritance_5(){
    return (
        <View>
            <View style={[styles.darkMode]}>
                <Text style={[styles.darkModeText]}>
                    Style Inheritance
                    <Text style={[styles.boldText]}> in bold</Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    darkMode: {
        backgroundColor: "black",
    },
    darkModeText: {
        color: "white",
    },
    boldText: {
        fontWeight: "800"
    },
});