import { View, StyleSheet, Text, FlatList, ScrollView } from "react-native";
import pokemonList from "../data.json";

export default function Flatlist() {
    //correct way to render a list. FlatList renders only the items (of the list) that are in the viewport
    return (
        <View style={[styles.container]}>
            <FlatList
                data={pokemonList}
                style={[styles.flatList]}
                renderItem={({ item, index }) => {
                    {
                        console.log(item.id);
                    } //logs only id's of the pokemon that are in the viewport
                    return (
                        <View style={[styles.card]}>
                            <Text style={[styles.cardText]}>{item.type}</Text>
                            <Text style={[styles.cardText]}>{item.name}</Text>
                        </View>
                    );
                }}
                keyExtractor={(item, index) => item.id}
                ItemSeparatorComponent={() => {
                    return <View style={{ height: 16 }} />;
                }}
                ListEmptyComponent={() => {
                    return (
                        <View
                            style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text style={{ fontSize: 30, flex: 1 }}>No items available</Text>
                        </View>
                    );
                }}
                ListHeaderComponent={() => {return (
                    <Text style={[styles.headerText]}>Pokemon List</Text>
                )}}

                ListFooterComponent={() => {return (
                    <Text style={[styles.footerText]}>End of List</Text>
                    
                )}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatList: {
        flex: 1,
        paddingHorizontal: 16,
    },
    card: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 10,
        // marginBottom: 16,
    },
    cardText: {
        fontSize: 30,
    },
    headerText: {
        fontSize: 35, 
        textAlign: 'center',
        marginBottom: 12,
    },
    footerText: {
        fontSize: 35, 
        textAlign: 'center',
        marginVertical: 12,
    }
});
