import { View, StyleSheet, Text } from "react-native";

export default function BoxShadow_4(){
    return (
        <View>
            <View style={[styles.box, styles.lightBlueBg, styles.boxShadow]}> 
                <Text style={{borderRadius: 5, backgroundColor: "violet", padding: 10}}>Light Blue Box</Text> 
            </View>
            <View style={[styles.box, styles.lightGreenBg, styles.androidShadow]}>
                <Text>Light Green Box</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: 250,
        height: 250,
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
    boxShadow: {
        shadowColor: "#fff",
        shadowOffset: {
            height: 6, 
            width: 6
        },
        shadowRadius: 4,
        shadowOpacity: 0.6,
    },
    androidShadow: {
        shadowColor: "white",
        elevation: 10,
    },
});