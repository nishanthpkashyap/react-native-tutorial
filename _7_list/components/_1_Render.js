import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import pokemonList from '../data.json';

export default function RenderList(){
    return (
        <SafeAreaView style={[styles.container]}>
            {pokemonList.map((pokemon)=>{
                return (
                    <View style={[styles.card]} key={pokemon.id}>
                        <Text style={[styles.cardText]}>{pokemon.type}</Text>
                        <Text style={[styles.cardText]}>{pokemon.name}</Text>
                    </View>
                );
            })}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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