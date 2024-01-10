import { StyleSheet, View } from "react-native";
import DynamicAPI from "./components/_1_Dimension_API";
import DynamicAPIDrawback from "./components/_2_DimensionAPI_Drawback";
import WindowDimensionHook from "./components/_3_UseDimensions";
import SafeAreaview from "./components/_4_Safe_Area_View";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <DynamicAPI/> */}
      {/* <DynamicAPIDrawback/> */}
      {/* <WindowDimensionHook/> */}
      <SafeAreaview />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "violet",
    // marginTop: 65,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
