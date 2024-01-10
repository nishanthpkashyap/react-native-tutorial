import { Alert, StyleSheet, View } from "react-native";
import DynamicAPI from "./components/_1_Dimension_API";
import DynamicAPIDrawback from "./components/_2_DimensionAPI_Drawback";
import WindowDimensionHook from "./components/_3_UseDimensions";
import SafeAreaview from "./components/_4_Safe_Area_View";
import PlatformModule from "./components/_5_Platform_Module";
import CustomButtonIOS from "./components/custom_button/CustomButton";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <DynamicAPI/> */}
      {/* <DynamicAPIDrawback/> */}
      {/* <WindowDimensionHook/> */}
      {/* <SafeAreaview /> */}
      {/* <PlatformModule/> */}
      <CustomButtonIOS title={"I am a Button"} onPress={()=>alert("Button pressed!")}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "violet",
    paddingTop: 65,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
