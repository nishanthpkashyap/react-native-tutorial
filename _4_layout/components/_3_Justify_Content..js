import { View, StyleSheet } from 'react-native';
import Box from './Box'

export default function JustifyContent(){
    return (
        <View style={[styles.container]}>
            <Box style={{backgroundColor: "cyan"}}>Box 1</Box>
            <Box style={{backgroundColor: "violet"}}>Box 2</Box>
            <Box style={{backgroundColor: "yellow"}}>Box 3</Box>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center", //flex-start(default), flex-end, center, justify-between, justify-evenly, justify-around
    }
});