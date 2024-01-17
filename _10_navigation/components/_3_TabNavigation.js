import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from "../screens/_3_DashboardScreen";
import SettingsScreen from "../screens/_4_SeetingsScreen";
import CourseListScreen from "../screens/_6_CourseListScreen";
import ProfileScreen from "../screens/_5_ProfileScreen";
import Ionicons from "@expo/vector-icons/Ionicons"

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarLabelPosition: "below-icon", // below-icon is the default and we also have beside-icon
                tabBarShowLabel: true, // true is default
                tabBarActiveTintColor: "purple",
                // tabBarInactiveTintColor: "orange"
            }}>
                <Tab.Screen name="Course List" component={CourseListScreen}/>
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel: "My Profile",
                    tabBarIcon: ({color})=>{
                        return <Ionicons name="person" size={20} color={color}/>
                    },
                    tabBarBadge: 3,
                }}/>
                <Tab.Screen name="Settings" component={SettingsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}