import { StyleSheet, Text, View, StatusBar } from 'react-native';
import GetRequest from './components/_1_Get_Request';
import PostRequest from './components/_2_Post_Request';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <GetRequest/> */}
      <PostRequest/>
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
