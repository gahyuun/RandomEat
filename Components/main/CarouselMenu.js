import koreanTofu from '../../assets/korean_tofu.png';
import koreanBibim from '../../assets/korean_bibim.png';
import koreanBulgogi from '../../assets/korean_bulgogi.jpg';
import westernPizza from '../../assets/western_pizza.png';
import westernPasta from '../../assets/western_pasta.png';
import westernSteak from '../../assets/western_steak.png';
import chineseDimsum from '../../assets/chinese_dimsum.png';
import chineseJjajang from '../../assets/chinese_jjajang.png';
import chinesejjambong from '../../assets/chinese_jjambong.png';
import meal from '../../assets/japanese_meal.png';
import sushi from '../../assets/japanese_sushi.png';
import udon from '../../assets/japanese_udon.png';
import cake from '../../assets/dessert_cake.png';
import macaron from '../../assets/dessert_macaron.png';
import muffin from '../../assets/dessert_muffin.png';
import { Image, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default function CarouselMenu({ menu }) {
  const koreanItems = [
    { title: '순두부찌개', image: koreanTofu },
    { title: '비빔밥', image: koreanBibim },
    { title: '불고기', image: koreanBulgogi },
  ];
  const westernItems = [
    { title: '피자', image: westernPizza },
    { title: '파스타', image: westernPasta },
    { title: '스테이크', image: westernSteak },
  ];
  const chineseItems = [
    { title: '짜장면', image: chineseJjajang },
    { title: '짬뽕', image: chinesejjambong },
    { title: '딤섬', image: chineseDimsum },
  ];
  const japaneseItems = [
    { title: '돈가스', image: meal },
    { title: '스시', image: sushi },
    { title: '우동', image: udon },
  ];
  const dessertItems = [
    { title: '케이크', image: cake },
    { title: '머핀', image: muffin },
    { title: '마카롱', image: macaron },
  ];
  const renderItem = ({ item }) => (
    <View
      style={{
        width: 240,
        height: 300,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#EBEBEB',
        shadowColor: '#000',
        elevation: 2, // for Android
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View>
        <Image
          source={item.image}
          resizeMode='contain'
          style={{ width: 220, height: 250 }}
        ></Image>
        <Text style={{ fontWeight: 700, fontSize: 20, color: '#693894' }}>
          {item.title}
        </Text>
      </View>
    </View>
  );
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: 340,
      }}
    >
      {menu.korean && (
        <Carousel
          data={koreanItems}
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={250}
        />
      )}
      {menu.western && (
        <Carousel
          data={westernItems}
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={250}
        />
      )}
      {menu.chinese && (
        <Carousel
          data={chineseItems}
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={250}
        />
      )}
      {menu.japanese && (
        <Carousel
          data={japaneseItems}
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={250}
        />
      )}
      {menu.dessert && (
        <Carousel
          data={dessertItems}
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={250}
        />
      )}
    </View>
  );
}
