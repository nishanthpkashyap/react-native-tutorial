import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text } from 'react-native';
import HomeScreen from '../screens/_1_Home';
import AboutScreen from '../screens/_2_AboutScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{
            title: "Welcome Home", 
            headerStyle: {
                backgroundColor: "#6a51ae",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold", 
            },
            headerRight: ()=>{
                return <Pressable onPress={()=>alert('Menu button pressed')}>
                    <Text style={{color: "white", fontSize: 16,}}>Menu</Text>
                </Pressable>
            },
            contentStyle: {
                backgroundColor: "#e8e4f3",
            }
        }}/>
        <Stack.Screen name='About' component={AboutScreen} initialParams={{name: "Guest"}}
             //we use the below way to dynamically change the title of the 'About' screen or use useLayoutEffect() inside <About>
            // options={({route})=>{
            //     return {
            //         title: route.params.name,
            //     }
            // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});