import { View, Text, StyleSheet } from 'react-native';

export default function MultipleStyles_2(){
    return (
        <View>
            <Text style={[styles.box, styles.lightBlueBg]} >Light Blue Box</Text>
            <Text style={[styles.box, styles.lightGreenBg]} >Light Green Box</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        width: 100,
        height: 100,
        padding: 10,
    },
    lightGreenBg: {
        backgroundColor: "lightgreen",
    },
    lightBlueBg: {
        backgroundColor: "lightblue",
    },
    
});