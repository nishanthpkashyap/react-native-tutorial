import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function DynamicAPI(){
    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>Welcome!</Text>
        </View>
    )
}

const {height: windowHeight, width: windowWidth} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightblue",
        width: windowWidth > 500 ? "70%" : "90%",
        height: windowHeight > 600 ? "60%" : "90%",
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        color: "white",
        fontSize: windowWidth > 500 ? 50 : 24,
    }
  });