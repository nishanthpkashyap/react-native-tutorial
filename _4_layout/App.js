import { StyleSheet, View } from 'react-native';
import Flex from './components/_1_Flex';

export default function App() {
  return (
    <View style={styles.container}>
      <Flex/>
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
