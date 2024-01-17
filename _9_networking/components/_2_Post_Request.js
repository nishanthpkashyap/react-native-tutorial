import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View, Text, ActivityIndicator, TextInput, Button, Platform } from "react-native";


export default function PostRequest(){

    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [isPosting, setIsPosting] = useState(false);
    const [error, setError] = useState("");

    const addPost = async ()=>{
        try {
            setIsPosting(true);
            const {data} = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {title, body});
            setPosts([...posts, data]);
            setBody('');
            setTitle('');
            setIsPosting(false);
            setError('');
        } 
        catch (error) {
            console.error(error);
            setError("Failed to create post!")
            setBody('');
            setTitle('');
            setIsPosting(false);
        }
    }

    return (
        <SafeAreaView style={[styles.container]}>
            <View style={[styles.inputContainer]}>
                <TextInput style={[styles.textInput]} value={title} onChangeText={setTitle} placeholder="Enter the post title" />
                <TextInput style={[styles.textInput]} value={body} onChangeText={setBody} placeholder="Enter the post body" />
                {error &&  (
                    <View style={[styles.errorContainer, styles.centerItems]}>
                        <Text style={[styles.error]}>{error}</Text>
                    </View>
                ) }
                <Button title={isPosting ? "Adding..." : "Add Post"} onPress={addPost} disabled={isPosting}/>
            </View>
            <FlatList 
                data={posts}
                renderItem={({item})=>{
                    return (
                        <View style={[styles.card]}>
                            <Text style={[styles.titleText]}>{item.title}</Text>
                            <Text style={[styles.bodyText]}>{item.body}</Text>
                        </View>
                    );
                }}
                keyExtractor={(item, index)=>index}
                ItemSeparatorComponent={()=>{
                    return <View style={{height: 16,}}></View>
                }}
                ListHeaderComponent={()=>{
                    return <Text style={[styles.headerText]}>Posts</Text>
                }}

                ListFooterComponent={()=>{
                    return <Text style={[styles.footerText]}>End of posts</Text>
                }}

            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centerItems: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        padding: 16, 
        margin: 10,
        backgroundColor: "pink",
        borderColor: "red",
        borderWidth: 1.25,
        borderRadius: 10,
    },
    inputContainer: {
        backgroundColor: "white",
        borderRadius: 8,
        padding: 16,
        margin: 12,
        ...Platform.select({
            ios: {
              shadowOffset: { height: 2, width: 2 },
              shadowColor: "#333",
              shadowOpacity: 0.3,
              shadowRadius: 2,
            },
            android: {
              elevation: 5,
            },
        }),
    },
    card: {
        backgroundColor: "white",
        borderColor: "#f0f0f9",
        borderRadius: 16,
        borderWidth: 2,
        padding: 25,
        ...Platform.select({
          ios: {
            shadowOffset: { height: 2, width: 2 },
            shadowColor: "#333",
            shadowOpacity: 0.3,
            shadowRadius: 2,
          },
          android: {
            elevation: 5,
          },
        }),
    }, 
    textInput: {
        height: 50,
        margin: 12,
        padding: 15,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 8,
    },
    titleText: {
        fontSize: 30,
        paddingVertical: 10,
        fontWeight: 'bold',
    },
    bodyText: {
        fontSize: 24,
        color: "#666666"
    },
    headerText: {
        fontSize: 40, 
        textAlign: 'center',
        marginBottom: 12,
    },
    footerText: {
        fontSize: 40, 
        textAlign: 'center',
        marginVertical: 12,
    },
    error: {
        color: "red",
        fontSize: 24,
    }
});