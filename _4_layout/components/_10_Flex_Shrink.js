import { View, StyleSheet } from 'react-native';
import Box from './Box'

export default function FlexShrink(){
    return (
        <View style={[styles.container]}>
            <Box style={{backgroundColor: "cyan", flexShrink: 1}}>Box 1 Shrink</Box>
            <Box style={{backgroundColor: "violet", flexShrink: 1}}>Box 2 Shrink</Box>
            {/* <Box style={{backgroundColor: "yellow"}}>Box 3</Box>
            <Box style={{backgroundColor: "lightgreen"}}>Box 4</Box>
            <Box style={{backgroundColor: "lightblue"}}>Box 5</Box>
            <Box style={{backgroundColor: "grey"}}>Box 6</Box>
            <Box style={{backgroundColor: "pink"}}>Box 7</Box> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        flexDirection: "row",
        alignItems: "flex-start",
        borderColor: "green",
        borderWidth: 6,
    }
});