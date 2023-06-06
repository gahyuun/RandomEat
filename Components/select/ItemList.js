import Item from "./Item";
import { View } from "react-native";

export default function ItemList({ items, onRemove }) {
  return (
    <View>
      {items.map((item) => (
        <Item item={item} key={item.id} onRemove={onRemove} />
      ))}
    </View>
  );
}
