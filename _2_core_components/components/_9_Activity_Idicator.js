import { View, StatusBar, ActivityIndicator } from 'react-native';

export default function ActivityIdicator_9() {
    return (
        <View>
            <ActivityIndicator 
                size={"large"} //large or small (default)
                color={"lightgreen"} 
                animating={true} // use a boolean state to control the animation
            >
                {/* You can add children here that does some process */}
            </ActivityIndicator>
        </View>
    );
}