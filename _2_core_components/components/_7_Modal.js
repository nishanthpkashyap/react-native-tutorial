import { View, Modal, Text, Button } from 'react-native';
import { useState } from 'react';

export default function Modal_7() {
    const [isModalOpen, toggleIsModalOpen] = useState(false);
    return (
        <View>
            <Button title='Open Modal' onPress={()=>toggleIsModalOpen(true)}/>
            <Modal 
                visible={isModalOpen}
                onRequestClose={()=>toggleIsModalOpen(false)}
                animationType='slide'  //none by default or fade or slide
                presentationStyle='pageSheet' //iOS only => pageSheet or fullScreen or overFullScreen or formSheet
            >
                <View style={{ backgroundColor: "lightgreen", padding: 60}}>
                    <Text>Welcome to the Modal component!!</Text>
                    <Button title='Close' onPress={()=>toggleIsModalOpen(false)}/>
                </View>
            </Modal>
        </View>
    );
}