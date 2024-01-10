import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

export default function WindowDimensionHook(){

    const {width: windowWidth, height: windowHeight} = useWindowDimensions();
    console.log(`Height: ${windowHeight}, Width: ${windowWidth}`);

    return (
        <View style={[
                styles.container, 
                {
                    width: windowWidth > 500 ? "90%" : "90%",
                    height: windowHeight > 600 ? "60%" : "90%",
                }
        ]}>
            <Text style={{
                    fontSize: windowWidth > 500 ? 50 : 24,
                    color: windowWidth > 500 ? "red" : "white",
                }
            }>Welcome!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightblue",
        justifyContent: "center",
        alignItems: "center",
    },
  });