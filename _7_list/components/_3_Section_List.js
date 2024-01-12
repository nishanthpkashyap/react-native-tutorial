import { View, StyleSheet, Text, FlatList, ScrollView, SectionList } from "react-native";
import pokemonList from "../grouped-data.json";

export default function Sectionlist() {
    //correct way to render a list. FlatList renders only the items (of the list) that are in the viewport
    return (
        <View style={[styles.container]}>
            <SectionList
                sections={pokemonList}
                style={[styles.flatList]}
                renderItem={({item}) => {
                    return (
                        <View style={[styles.card]}>
                            <Text style={[styles.cardText]}>{item}</Text>
                        </View>
                    );
                }}
                renderSectionHeader={({section})=>{
                    return <Text style={[styles.sectionHeader]}>{section.type}</Text>
                }}
                ItemSeparatorComponent={() => {
                    return <View style={{ height: 16 }} />;
                }}
                SectionSeparatorComponent={()=><View style={{height: 16}}/>}
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
    },
    sectionHeader: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
