import { Pressable, Text } from "react-native";

export default function CustomButton({ onPress, title}){
    return (
        <Pressable
            onPress={onPress}
            style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                margin: 20,
                borderRadius: 10,
                backgroundColor: "lightblue",
            }}
        >
            <Text style={{ color: "white", fontSize: 24,}}>
                {title}
            </Text>
        </Pressable>
    )
}