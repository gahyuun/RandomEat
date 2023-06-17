import { useRecoilState } from 'recoil';
import Item from './Item';
import { View } from 'react-native';
import { itemState } from '../../state';

export default function ItemList() {
  const [items, setItems] = useRecoilState(itemState);
  const onRemove = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <View>
      {items.map((item) => (
        <Item item={item} key={item.id} onRemove={onRemove} />
      ))}
    </View>
  );
}
