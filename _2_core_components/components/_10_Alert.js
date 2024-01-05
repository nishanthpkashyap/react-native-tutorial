import { View, Alert, Button } from 'react-native';

export default function Alert_10() {
    return (
        <View>
            <Button title='Alert' onPress={()=> Alert.alert("Alert!")}/>
            <Button title='Greet' onPress={()=> Alert.alert("Greetings!", "Have a nice day!")}/>
            <Button title='Wish' onPress={()=> Alert.alert("Hello!", "I wish you a nice day!", [
                {
                    text: "Cancel",
                    onPress: ()=>console.log("Cancel clicked")
                },
                {
                    text: "OK",
                    onPress: ()=>console.log("OK clicked")
                }, //android displays only 3 buttons while iOS has no such restriction
            ])}/>
        </View>
    );
}