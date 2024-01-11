import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import RenderList from './components/_1_Render';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={[styles.safeAreaView]}>
        <RenderList/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  safeAreaView: {
    paddingHorizontal: 16,
  }
});
