import { View, StyleSheet, Text } from "react-native";

export default function BoxModel_3(){
    /*
        border radius doesn't work directly for <Text> elements in iOS. 
        So, we have to wrap the <Text> element with <View> instead and apply the border radius to the <View>.
    */
    return (
        <View>
            <View style={[styles.box, styles.lightBlueBg]}>
                <Text style={{borderRadius: 5, backgroundColor: "violet", padding: 10}}>Box Radius - Android Only</Text> 
            </View>
            <View style={[styles.box, styles.lightGreenBg]}>
                <View style={{borderRadius: 5, backgroundColor: "violet", padding: 5}}>
                    <Text>Box Radius - iOS & Android</Text>
                </View>
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