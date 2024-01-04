import { View, Pressable, Image, Text } from 'react-native';
import logo_image from '../assets/adaptive-icon.png';

export default function Pressable_6() {
    return (
        <View>
            <Pressable onPress={()=>console.log("Image pressed")}>
                <Image source={logo_image} style={{width: 300, height: 300}}/>
            </Pressable>
            <Pressable onPress={()=>console.log("Text pressed")}>
                <Text>Please press the text</Text>
            </Pressable>
        </View>
    );
}