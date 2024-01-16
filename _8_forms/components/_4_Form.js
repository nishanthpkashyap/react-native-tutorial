import { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, KeyboardAvoidingView, Image, Platform, } from "react-native";
import LoginImage from "../assets/adaptive-icon.png"

export default function CustomForm() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {}
        if(!username) 
            errors ={...errors, username: 'Username is required'}
        if(!password) 
            errors ={...errors, password: 'Password is required'}

        setErrors(errors);
        return Object.keys(errors).length === 0; //return TRUE if there are 0 errors or else FALSE
    }

    const handleFormSubmit = ()=>{
        if(validateForm()){
            console.log("Login successful!", username, password);
            setErrors({});
            setPassword("");
            setUsername("");
        }
    }

    return (
        <KeyboardAvoidingView 
            behavior="padding" 
            keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : -200} 
            style={[styles.container]}
        >
            <View style={[styles.formContainer]}>
                <Image source={LoginImage} style={[styles.image]}/>
                <Text style={[styles.text]}>Username</Text>
                <TextInput 
                    style={[styles.textInput]} 
                    value={username} 
                    onChangeText={setUsername}
                    placeholder="Enter your username"

                />
                {
                    errors.username && <Text style={[styles.errorText]}>{errors.username}</Text>
                }
                <Text style={[styles.text]}>Password</Text>
                <TextInput 
                    style={[styles.textInput]} 
                    value={password} 
                    onChangeText={setPassword}
                    placeholder="Enter your password"
                    secureTextEntry
                />
                {
                    errors.password && <Text style={[styles.errorText]}>{errors.password}</Text>
                }
                <View style={styles.submitButton}>
                    <Button title="Login" onPress={()=>{
                        handleFormSubmit();
                    }}/>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: "#f5f5f5f5"
    },
    formContainer: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
    },
    image: {
        height: 200,
        width: 200,
        alignSelf: "center",
        marginBottom: 20,
        paddingTop: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 25,
    },
    textInput: {
        height: 50,
        marginTop: 12,
        borderColor: "#ddd",
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
    },
    errorText: {
        color: "red",
        marginVertical: 12,
    },
    submitButton: {
        marginVertical: 15,
    }
});