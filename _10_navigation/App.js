import { StyleSheet, View, StatusBar } from 'react-native';
import StackNavigation from './components/_1_StackNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <StackNavigation/>
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
