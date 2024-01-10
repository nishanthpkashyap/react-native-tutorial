import { SafeAreaView, Text, StyleSheet, Platform } from 'react-native';

export default function PlatformModule(){
    return (
        <SafeAreaView style={[styles.container]}>
            <Text style={[styles.text]}>Welcome!</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? 50 : 0,
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        ...Platform.select({
            ios: {
                color: "white",
                fontSize: 28,
                fontWeight: "bold",
            },
            android: {
                color: "blue",
                fontSize: 24,
                fontStyle: "italic",
            }
        }),
    }
});