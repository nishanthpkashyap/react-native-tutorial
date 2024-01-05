import { View, StyleSheet } from 'react-native';
import StyleSheetAPI_1 from './components/_1_StyleSheet_API';
import MultipleStyles_2 from './components/_2_Multiple_Styles';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StyleSheetAPI_1/> */}
      <MultipleStyles_2/>
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
