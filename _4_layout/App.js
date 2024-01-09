import { StyleSheet, View } from 'react-native';
import Flex from './components/_1_Flex';
import FlexDirection from './components/_2_Flex_Direction';
import JustifyContent from './components/_3_Justify_Content.';
import AlignItems from './components/_4_Align_Items';
import AlignSelf from './components/_5_Align_Self';
import FlexWrap from './components/_6_Flex_Wrap';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Flex/> */}
      {/* <FlexDirection/> */}
      {/* <JustifyContent/> */}
      {/* <AlignItems/> */}
      {/* <AlignSelf/> */}
      <FlexWrap/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderColor: "red",
    borderWidth: 6,
  },
});
