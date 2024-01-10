import { Pressable, Text } from "react-native";

export default function CustomButton({ onPress, title}){
    return (
        <Pressable
            onPress={onPress}
            style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 20,
                margin: 20,
                borderRadius: 25,
                backgroundColor: "lightgreen",
            }}
        >
            <Text style={{ color: "white", fontSize: 24,}}>
                {title}
            </Text>
        </Pressable>
    )
}