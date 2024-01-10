import { View, Text, StyleSheet, Platform, Image } from "react-native";

const getTypeDetails = (type)=>{
    switch (type.toLowerCase()) {
        case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️" };
    case "water":
      return { borderColor: "#6493EA", emoji: "💧" };
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "grass":
      return { borderColor: "#66CC66", emoji: "🌿" };
    default:
      return { borderColor: "#A0A0A0", emoji: "❓" };
    }
}

export default function PokemonCard({
  pokemonData: { name, image, weakness, type, moves, hp },
}) {
    const {borderColor, emoji} = getTypeDetails(type);
  return (
    <View style={[styles.card]}>
      <View style={[styles.nameContainer]}>
        <Text style={[styles.name]}>{name}</Text>
        <Text style={[styles.hp]}>
        ❤️ {hp}
        </Text>
      </View>

      <Image
        style={[styles.image]}
        source={image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode="contain" //or you can use the objectFit: "contain" style instead
      />

      <View style={[styles.typeContainer]}>
        <View style={[styles.typeBadge, {borderColor}]}>
            <Text style={[styles.typeEmoji]}>{emoji}</Text>
            <Text style={[styles.type]}>{type}</Text>
        </View>
      </View>

      <View>
        <Text>Moves: {moves.join(", ")}</Text>
      </View>
      <View>
        <Text>Weakness: {weakness.join(", ")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderColor: "#f0f0f9",
    borderRadius: 16,
    borderWidth: 2,
    padding: 25,
    margin: 16,
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
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 22,
  },
  image: {
    height: 200,
    width: "100%",
    marginBottom: 16,
    // objectFit: "contain" //or you can use ResizeMode props of <Image/> instead
  },
});
