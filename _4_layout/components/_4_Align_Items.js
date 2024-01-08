import { View, StyleSheet } from 'react-native';
import Box from './Box'

export default function AlignItems(){
    return (
        <View style={[styles.container]}>
            <Box style={{backgroundColor: "cyan",
            //  paddingVertical: 100 /*used for demonstration of alignItems - baseline value*/
        }}>Box 1</Box>
            <Box style={{backgroundColor: "violet"}}>Box 2</Box>
            <Box style={{backgroundColor: "yellow"}}>Box 3</Box>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "baseline", //stretch(default), flex-start, flex-end, center, baseline
    }
});