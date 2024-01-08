import { View, StyleSheet } from 'react-native';
import Box from './Box'

export default function AlignSelf(){
    return (
        <View style={[styles.container]}>
            <Box style={{backgroundColor: "cyan", alignSelf: "flex-start",}}>Box 1</Box>
            <Box style={{backgroundColor: "violet", alignSelf: "flex-end",}}>Box 2</Box>
            <Box style={{backgroundColor: "yellow", alignSelf: "stretch",}}>Box 3</Box>
            <Box style={{backgroundColor: "lightgreen", alignSelf: "center",}}>Box 4</Box>
            <Box style={{backgroundColor: "lightblue", alignSelf: "baseline",}}>Box 5</Box>
            <Box style={{backgroundColor: "grey", alignSelf: "auto"}}>Box 6</Box>
            <Box style={{backgroundColor: "pink"}}>Box 7</Box>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    }
});