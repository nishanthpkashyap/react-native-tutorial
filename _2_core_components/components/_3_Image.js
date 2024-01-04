import { View, Image, ImageBackground, Text } from 'react-native';

const logo_image = require("../assets/adaptive-icon.png");



export default function Image_3() {
  return (
    <View style={{flex: 1}}>
        {/* <Image source={logo_image} style={{width: 300, height: 300}}/>
        <Image src={'https://picsum.photos/300'} style={{width: 300, height: 300}}/> */}
        <ImageBackground source={logo_image} style={{ flex: 1 }}>
            <Text>Image Text</Text>
        </ImageBackground>
    </View>
  )
}
