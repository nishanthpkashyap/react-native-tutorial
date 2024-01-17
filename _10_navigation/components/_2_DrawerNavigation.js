import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "../screens/_3_DashboardScreen";
import SettingsScreen from "../screens/_4_SeetingsScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Dashboard" component={DashboardScreen} options={{
                title: "My Dashboard",
                drawerLabel: "Dashboard label",
                drawerActiveBackgroundColor: "lightgreen",
                drawerActiveTintColor: "#fff",
                drawerContentStyle: {
                    backgroundColor: "#c6cbef"
                }
            }}/>
            <Drawer.Screen name="Settings" component={SettingsScreen}/>
        </Drawer.Navigator>
    </NavigationContainer>
  )
}