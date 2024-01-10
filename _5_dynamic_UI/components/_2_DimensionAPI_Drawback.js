import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function DynamicAPIDrawback(){

    const [dimensions, setDimensions] = useState(Dimensions.get("window"));

    useEffect(() => {
        const subsriptions = Dimensions.addEventListener("change", (window) => {
            setDimensions(window);
        });
        return ()=>subsriptions?.remove();
    }, []);

    const {width: windowWidth, height: windowHeight} = dimensions;
    console.log(`Height: ${windowHeight}, Width: ${windowWidth}`);

    return (
        <View style={[
                styles.container, 
                {
                    width: windowWidth > 500 ? "90%" : "90%",
                    height: windowHeight > 600 ? "60%" : "90%",
                }
        ]}>
            <Text style={[
                styles.text,
                {
                    fontSize: windowWidth > 500 ? 50 : 24,
                }
            ]}>Welcome!</Text>
        </View>
    )
}

const {height: windowHeight, width: windowWidth} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightblue",
        // width: windowWidth > 500 ? "70%" : "90%",
        // height: windowHeight > 600 ? "60%" : "90%",
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        color: "white",
        // fontSize: windowWidth > 500 ? 50 : 24,
    }
  });