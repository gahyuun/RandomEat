import koreanTofu from "../../assets/korean_tofu.png";
import koreanBibim from "../../assets/korean_bibim.png";
import koreanBulgogi from "../../assets/korean_bulgogi.jpg";
import westernPizza from "../../assets/western_pizza.png";
import westernPasta from "../../assets/western_pasta.png";
import westernSteak from "../../assets/western_steak.png";
import chineseDimsum from "../../assets/chinese_dimsum.png";
import chineseJjajang from "../../assets/chinese_jjajang.png";
import chinesejjambong from "../../assets/chinese_jjambong.png";
import meal from "../../assets/japanese_meal.png";
import sushi from "../../assets/japanese_sushi.png";
import udon from "../../assets/japanese_udon.png";
import cake from "../../assets/dessert_cake.png";
import macaron from "../../assets/dessert_macaron.png";
import muffin from "../../assets/dessert_muffin.png";
import beef from "../../assets/night_beef.png";
import foot from "../../assets/night_foot.png";
import chicken from "../../assets/night_chicken.png";
import { Image, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";

export default function CarouselMenu({ menu }) {
  const koreanItems = [
    {
      title: "순두부찌개",
      image: koreanTofu,
      ex: "모두의 입맛을 사로잡을 따끈따끈 매콤한 순두부찌개",
    },
    {
      title: "비빔밥",
      image: koreanBibim,
      ex: "신선한 야채, 고소한 고기, 매콤한 소스가 조화롭게 어우러진 든든한 식사",
    },
    {
      title: "불고기",
      image: koreanBulgogi,
      ex: "입안 가득 퍼지는 고소하고 달콤한 소스와 고기의 조화",
    },
  ];
  const westernItems = [
    { title: "피자", image: westernPizza, ex: "피자먹고 인생피자" },
    {
      title: "파스타",
      image: westernPasta,
      ex: "내 안에 스타가 있다면, 그건 바로 파스타",
    },
    {
      title: "스테이크",
      image: westernSteak,
      ex: "절로 웃음이 나요 스테이크크크크 크크크크",
    },
  ];
  const chineseItems = [
    { title: "짜장면", image: chineseJjajang, ex: "짜증날땐 짜장면" },
    { title: "짬뽕", image: chinesejjambong, ex: "뽕에 취한다.. 바로.. 짬뽕" },
    {
      title: "딤섬",
      image: chineseDimsum,
      ex: "절묘한 맛, 섬세한 질감으로 미각을 현혹시킬 한 입 크기의 중국의 별미",
    },
  ];
  const japaneseItems = [
    {
      title: "돈가스",
      image: meal,
      ex: "겉은 바삭하고 속은 부드러운 이게 바로 돈가스",
    },
    {
      title: "초밥",
      image: sushi,
      ex: "당신의 입맛을 행복으로 인도할 조화로운 바다의 맛",
    },
    {
      title: "우동",
      image: udon,
      ex: "진한 국물과 탄력있는 국수로 만족스러운 음식",
    },
  ];
  const dessertItems = [
    { title: "케이크", image: cake, ex: "빵이 없으면 케이크를 먹으면 되지" },
    {
      title: "머핀",
      image: muffin,
      ex: "촉촉하고 폭신한 식감을 자랑하는 유혹적인 향의 머핀",
    },
    {
      title: "마카롱",
      image: macaron,
      ex: "바삭바삭한 껍질, 감미로운 충전재로 감각을 유혹하는 섬세한 프랑스 과자",
    },
  ];
  const nightItems = [
    { title: "치킨", image: chicken, ex: "오늘 저녁은 치킨이닭" },
    {
      title: "닭발",
      image: foot,
      ex: "풍미, 질감, 그리고 진정으로 잊을 수 없는 미식 경험",
    },
    { title: "곱창", image: beef, ex: "소주와 함께" },
  ];
  const renderItem = ({ item }) => (
    <View
      style={{
        width: 240,
        height: 300,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#EBEBEB",
        shadowColor: "#000",
        elevation: 2, // for Android
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <Image
          source={item.image}
          resizeMode="contain"
          style={{ width: 220, height: 210 }}
        ></Image>
        <Text
          style={{
            fontWeight: 700,
            fontSize: 23,
            color: "#693894",
            marginLeft: 10,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            marginLeft: 10,
            marginTop: 8,
            width: 200,
            color: "gray",
            fontWeight: 500,
          }}
        >
          {item.ex}
        </Text>
      </View>
    </View>
  );
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
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
      {menu.night && (
        <Carousel
          data={nightItems}
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={250}
        />
      )}
    </View>
  );
}
