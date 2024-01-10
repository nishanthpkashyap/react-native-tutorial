import { SafeAreaView, Text, StyleSheet } from 'react-native';

export default function SafeAreaview(){
    return (
        <SafeAreaView style={[styles.container]}>
            <Text style={[styles.text]}>Welcome!</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        fontSize: 24,
    }
});