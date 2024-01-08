import { StyleSheet, View } from 'react-native';
import Flex from './components/_1_Flex';
import FlexDirection from './components/_2_Flex_Direction';
import JustifyContent from './components/_3_Justify_Content.';
import AlignItems from './components/_4_Align_Items';
import AlignSelf from './components/_5_Align_Self';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Flex/> */}
      {/* <FlexDirection/> */}
      {/* <JustifyContent/> */}
      {/* <AlignItems/> */}
      <AlignSelf/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    borderColor: "red",
    borderWidth: 6,
  },
});
