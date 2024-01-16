import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View, Text, ActivityIndicator } from "react-native";


export default function GetRequest(){

    const [posts, setPosts] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const fetchData = async (limit=10)=>{
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
        setPosts(data);
        setLoading(false);
    }

    const handleRefresh = ()=>{
        setRefreshing(true);
        fetchData(20);
        setRefreshing(false); 
    }

    useEffect(() => {
        fetchData();
    }, []);

    if(isLoading){
        return (
            <SafeAreaView style={[styles.loadingContainer]}>
                <ActivityIndicator size={"large"} color={"lightblue"} />
                <Text>Loading...</Text>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={[styles.container]}>
            <FlatList 
                data={posts}
                refreshing={refreshing}
                onRefresh={handleRefresh}
                renderItem={({item})=>{
                    return (
                        <View style={[styles.card]}>
                            <Text style={[styles.titleText]}>{item.id}. {item.title}</Text>
                            <Text style={[styles.bodyText]}>{item.body}</Text>
                        </View>
                    );
                }}
                keyExtractor={(item, index)=>item.id}
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
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#f3f5f4",
    },
});