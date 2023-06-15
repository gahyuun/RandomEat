import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function MyButton(props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#693894",
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      }}
      onPress={props.onPress}
    >
      <Text style={styles.button}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#693894",
    color: "#ffffff",
    borderRadius: 20,
    fontSize: 18,
  },
});
