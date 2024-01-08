import { View, Text, StyleSheet } from 'react-native';

export default function StyleSheetAPI_1(){
    return (
        <View>
            <Text style={styles.title}>StyleSheet API</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
      color: "white",
      fontSize: 20,
    }
  })