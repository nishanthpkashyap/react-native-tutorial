import { View, StyleSheet } from 'react-native';
import StyleSheetAPI_1 from './components/_1_StyleSheet_API';

export default function App() {
  return (
    <View style={styles.container}>
      <StyleSheetAPI_1/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    padding: 60,
  },
  title: {

  }
})
