import { StyleSheet, Text, View, StatusBar } from 'react-native';
import GetRequest from './components/_1_Get_Request';

export default function App() {
  return (
    <View style={styles.container}>
      <GetRequest/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
    paddingTop: StatusBar.currentHeight,
  },
});
