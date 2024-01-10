import { StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native';
import PokemonCard from './components/PokemonCard';
import Charmander from './assets/charmander.png';
import Pikachu from './assets/pikachu.png';
import Squirtle from './assets/squirtle.png';
import Bulbasaur from './assets/bulbasaur.png';


export default function App() {

  const charmanderData = {
    name: "Charmander",
    image: Charmander,
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer",],
    weakness: ["Water", "Rock",],
  };

  const squirtleData = {
    name: "Squirtle",
    image: Squirtle,
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weakness: ["Electric", "Grass"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: Bulbasaur,
    type: "Grass",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
    weakness: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const pikachuData = {
    name: "Pikachu",
    image: Pikachu,
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weakness: ["Ground"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard pokemonData={charmanderData}/>
        <PokemonCard pokemonData={squirtleData}/>
        <PokemonCard pokemonData={bulbasaurData}/>
        <PokemonCard pokemonData={pikachuData}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
});
