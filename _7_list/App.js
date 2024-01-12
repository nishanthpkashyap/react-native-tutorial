import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import ScrollViewList from './components/_1_ScrollView_List_Render';
import Flatlist from './components/_2_FlatList';
import Sectionlist from './components/_3_Section_List';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollViewList/> */}
      {/* <Flatlist/> */}
      <Sectionlist/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
});

