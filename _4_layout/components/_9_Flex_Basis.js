import { View, StyleSheet } from 'react-native';
import Box from './Box'

export default function FlexBasis(){
    /* box 2 height is more than box 3 */
    return (
        <View style={[styles.container]}>
            <Box style={{backgroundColor: "cyan"}}>Box 1</Box>
            <Box style={{backgroundColor: "violet", flexBasis: 140, flex: 1}}>Box 2</Box>
            <Box style={{backgroundColor: "yellow", height: 140, flex: 1}}>Box 3</Box>
            <Box style={{backgroundColor: "lightgreen"}}>Box 4</Box>
            <Box style={{backgroundColor: "lightblue"}}>Box 5</Box>
            <Box style={{backgroundColor: "grey"}}>Box 6</Box>
            <Box style={{backgroundColor: "pink"}}>Box 7</Box>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});