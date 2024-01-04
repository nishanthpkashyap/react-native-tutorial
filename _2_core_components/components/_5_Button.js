import { View, Button } from 'react-native';

export default function Button_5() {
    return (
        <View>
            <Button title='PRESS' onPress={()=>{console.log("Button Pressed")}}
            color={'lightgreen'}
            // disabled //be default true
            />
        </View> 
    );
}