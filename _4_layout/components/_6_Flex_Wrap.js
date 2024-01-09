import { View, StyleSheet } from 'react-native';
import Box from './Box'

export default function FlexWrap(){
    return (
        <View style={[styles.container]}>
            <Box style={{backgroundColor: "cyan",}}>Box 1</Box>
            <Box style={{backgroundColor: "violet"}}>Box 2</Box>
            <Box style={{backgroundColor: "yellow"}}>Box 3</Box>
            <Box style={{backgroundColor: "lightgreen"}}>Box 4</Box>
            <Box style={{backgroundColor: "lightblue",}}>Box 5</Box>
            <Box style={{backgroundColor: "grey"}}>Box 6</Box>
            <Box style={{backgroundColor: "pink"}}>Box 7</Box>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 600,
        flexWrap: "wrap-reverse",
    }
});