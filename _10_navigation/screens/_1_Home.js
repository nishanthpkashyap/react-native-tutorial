import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

export default function HomeScreen({route, navigation}){

    console.log(route)
    // const navigation = useNavigation(); //we can use useNavigation() hook or 'navigation' prop 

    return (
        <View style={[styles.container]}>
            <Text style={[styles.text]}>Home screen</Text>
            <Text style={[styles.text]}>{route.params?.result}</Text>
            <Button title="Go to About" onPress={()=>{navigation.navigate("About", 
                {name: "React"}
            )}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});