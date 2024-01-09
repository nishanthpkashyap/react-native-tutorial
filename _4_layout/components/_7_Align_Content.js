import { View, StyleSheet } from 'react-native';
import Box from './Box'

export default function AlignContent(){
    /* when alignSelf = auto, the value of the parent's alignItems will be inherited */
    return (
        <View style={[styles.container]}>
            <Box style={{backgroundColor: "cyan"}}>Box 1</Box>
            <Box style={{backgroundColor: "violet"}}>Box 2</Box>
            <Box style={{backgroundColor: "yellow"}}>Box 3</Box>
            <Box style={{backgroundColor: "lightgreen"}}>Box 4</Box>
            <Box style={{backgroundColor: "lightblue"}}>Box 5</Box>
            <Box style={{backgroundColor: "grey"}}>Box 6</Box>
            <Box style={{backgroundColor: "pink"}}>Box 7</Box>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        flexWrap: "wrap",
        alignContent: "space-between", //flex-start (default), flex-end, center, stretch, space-between, space-around, space-evenly
    }
});