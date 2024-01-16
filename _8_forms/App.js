import { StyleSheet, Text, SafeAreaView, StatusBar,  } from 'react-native';
import Textinput from './components/_1_TextInput';
import MultiLineTextInput from './components/_2_MultiLine_TxtInput';
import CustomSwitch from './components/_3_Switch';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Textinput/> */}
      {/* <MultiLineTextInput/> */}
      <CustomSwitch/>
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
