import { View } from 'react-native';
import View_1 from './components/_1_View';
import Text_2 from './components/_2_Text';
import Image_3 from './components/_3_Image';
import ScrollView_4 from './components/_4_ScrollView';
import Button_5 from './components/_5_Button';
import Pressable_6 from './components/_6_Pressable';
import Modal_7 from './components/_7_Modal';
import StatusBar_8 from './components/_8_Statusbar';
import ActivityIdicator_9 from './components/_9_Activity_Idicator';

export default function App(){
  return(
    <View style={{flex: 1, backgroundColor: "white", padding: 60}}>
      {/* <View_1/> */}
      {/* <Text_2/> */}
      {/* <Image_3/> */}
      {/* <ScrollView_4/> */}
      {/* <Button_5/> */}
      {/* <Pressable_6/> */}
      {/* <Modal_7/> */}
      {/* <StatusBar_8/> */}
      <ActivityIdicator_9/>
    </View>
  );
}
