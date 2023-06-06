import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import binIcon from "../assets/binIcon.svg";

export default function Item({ item, onRemove }) {
  const { id, text } = item;
  return (
    <View style={styles.container}>
      <View style={{ marginRight: 30, width: 200 }}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View>
        <TouchableOpacity>
          <WithLocalSvg asset={binIcon} onPress={() => onRemove(id)} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 278,
    height: 66,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  text: {
    fontSize: 16,
    marginLeft: 20,
  },
});
