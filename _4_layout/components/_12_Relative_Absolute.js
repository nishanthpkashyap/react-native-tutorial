import { View, StyleSheet } from 'react-native';
import Box from './Box'

export default function RelativeAbsolute(){
    return (
        <View style={[styles.container]}>
            <Box style={{backgroundColor: "cyan", width: 100, height: 100, top: 75, left: 75}}>Box 1</Box>
            <Box style={{backgroundColor: "violet", width: 100, height: 100 }}>Box 2</Box>
            <Box style={{backgroundColor: "yellow", width: 100, height: 100}}>Box 3</Box>
            <Box style={{backgroundColor: "lightgreen", width: 100, height: 100, position: 'absolute', top: 175, left: 75}}>Box 4</Box>
            <Box style={{backgroundColor: "lightblue", width: 100, height: 100}}>Box 5</Box>
            <Box style={{backgroundColor: "grey", width: 100, height: 100}}>Box 6</Box>
            <Box style={{backgroundColor: "pink", width: 100, height: 100}}>Box 7</Box>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});