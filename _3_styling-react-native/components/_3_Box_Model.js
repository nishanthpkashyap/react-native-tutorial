import { View, StyleSheet, Text } from "react-native";

export default function BoxModel_3(){
    return (
        <View>
            <View style={[styles.box, styles.lightBlueBg]}>
                <Text style={{borderRadius: 5, backgroundColor: "violet", padding: 10}}>Light Blue Box</Text>
            </View>
            <View style={[styles.box, styles.lightGreenBg]}>
                <Text>Light Green Box</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: 150,
        height: 100,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginHorizontal: 20,
        marginVertical: 20,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 10,
    },
    lightGreenBg: {
        backgroundColor: "lightgreen",
    },
    lightBlueBg: {
        backgroundColor: "lightblue",
    },
});