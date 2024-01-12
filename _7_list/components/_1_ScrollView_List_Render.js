import { View, StyleSheet, Text, ScrollView } from 'react-native';
import pokemonList from '../data.json';

export default function ScrollViewList(){
    //wrong way to render a list. ScrollView always renders all the items (of the list) even though some items are not in the viewport
    return (
        <ScrollView style={[styles.container]}>
            {pokemonList.map((pokemon)=>{
                {console.log(pokemon.id)} //logs all 100 id's 
                return (
                    <View style={[styles.card]} key={pokemon.id}>
                        <Text style={[styles.cardText]}>{pokemon.type}</Text>
                        <Text style={[styles.cardText]}>{pokemon.name}</Text>
                    </View>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeAreaView: {
        paddingHorizontal: 16,
    },
    card: {
        backgroundColor: "white",
        padding: 16,
        borderRadius: 10,
        marginBottom: 16,
    },
    cardText: {
        fontSize: 30,
    }
});