import { StyleSheet, View } from 'react-native';
import DynamicAPI from './components/_1_Dimension_API';
import DynamicAPIDrawback from './components/_2_DimensionAPI_Drawback';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <DynamicAPI/> */}
      <DynamicAPIDrawback/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "violet",
    marginTop: 65,
    justifyContent: "center",
    alignItems: "center",
  },
});
