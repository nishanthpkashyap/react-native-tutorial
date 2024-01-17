import { StyleSheet, View, StatusBar } from 'react-native';
import StackNavigation from './components/_1_StackNavigation';
import DrawerNavigation from './components/_2_DrawerNavigation';
import BottomTabNavigation from './components/_3_TabNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StackNavigation/> */}
      {/* <DrawerNavigation/> */}
      <BottomTabNavigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
});
