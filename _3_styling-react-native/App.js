import { View, StyleSheet } from 'react-native';
import StyleSheetAPI_1 from './components/_1_StyleSheet_API';
import MultipleStyles_2 from './components/_2_Multiple_Styles';
import BoxModel_3 from './components/_3_Box_Model';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StyleSheetAPI_1/> */}
      {/* <MultipleStyles_2/> */}
      <BoxModel_3/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60,
  },
  title: {

  }
})
