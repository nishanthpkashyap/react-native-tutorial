import { StyleSheet, Text, SafeAreaView, StatusBar,  } from 'react-native';
import Textinput from './components/_1_TextInput';
import MultiLineTextInput from './components/_2_MultiLine_TxtInput';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Textinput/> */}
      <MultiLineTextInput/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
});
