import { StyleSheet, View } from 'react-native';
import Flex from './components/_1_Flex';
import FlexDirection from './components/_2_Flex_Direction';
import JustifyContent from './components/_3_Justify_Content.';
import AlignItems from './components/_4_Align_Items';
import AlignSelf from './components/_5_Align_Self';
import FlexWrap from './components/_6_Flex_Wrap';
import AlignContent from './components/_7_Align_Content';
import Gap from './components/_8_Gap';
import FlexBasis from './components/_9_Flex_Basis';
import FlexShrink from './components/_10_Flex_Shrink';
import FlexGrow from './components/_11_Flex_Grow';
import RelativeAbsolute from './components/_12_Relative_Absolute';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Flex/> */}
      {/* <FlexDirection/> */}
      {/* <JustifyContent/> */}
      {/* <AlignItems/> */}
      {/* <AlignSelf/> */}
      {/* <FlexWrap/> */}
      {/* <AlignContent/> */}
      {/* <Gap/> */}
      {/* <FlexBasis/> */}
      {/* <FlexShrink/> */}
      {/* <FlexGrow/> */}
      <RelativeAbsolute/>
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
