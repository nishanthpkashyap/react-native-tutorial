import { View, StatusBar } from 'react-native';

export default function StatusBar_8() {
    return (
        <View>
            <StatusBar 
                backgroundColor={"lightgreen"} //android only 
                barStyle={"dark-content"} //default or dark-content or light-content
                hidden //by default true
            />
        </View>
    )
}