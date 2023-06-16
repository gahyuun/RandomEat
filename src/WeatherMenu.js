import { View, Image, Text } from "react-native";
import Header from "../components/Header";
import Weather from "../assets/weather.png";
import sun from "../assets/sun.png";
import summer1 from "../assets/summer_1.png";
import summer2 from "../assets/summer_2.png";
import summer3 from "../assets/summer_3.png";
import summer5 from "../assets/summer_5.png";

export default function WeatherMenu() {
  return (
    <>
      <View style={{ marginTop: 65, marginLeft: 25 }}>
        <Header />
      </View>
      <View style={{ alignItems: "center" }}>
        <Image
          source={Weather}
          style={{
            width: 300,
            resizeMode: "contain",
            height: 150,
            width: 150,
            marginTop: 30,
            marginBottom: 30,
          }}
        ></Image>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ marginLeft: 35 }}>
          <Text style={{ fontSize: 23, fontWeight: "600" }}>현재 기온</Text>
          <Text style={{ fontSize: 40, fontWeight: "bold", color: "#693894" }}>
            26℃
          </Text>
          <Text style={{ fontSize: 18, marginTop: 10, color: "gray" }}>
            이런 날씨에는?
          </Text>
        </View>
        <View>
          <Image
            style={{
              width: 50,
              height: 50,
              resizeMode: "contain",
              //marginLeft: 150,
              marginTop: 25,
            }}
            source={sun}
          ></Image>
        </View>
      </View>
      <View style={{ marginLeft: 35, marginTop: 30, marginRight: 35 }}>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 30,
            borderRadius: 15,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            backgroundColor: "#F6F6F6",
            padding: 5,
          }}
        >
          <Image style={{ width: 60, height: 60 }} source={summer1}></Image>
          <View>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 18,
                marginTop: 10,
                fontWeight: 600,
              }}
            >
              물냉면
            </Text>
            <Text style={{ marginLeft: 20, marginTop: 5, color: "gray" }}>
              상큼하고 맛있는 냉면으로 더위를 날려요!
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 30,
            borderRadius: 15,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            backgroundColor: "#F6F6F6",
            padding: 5,
          }}
        >
          <Image style={{ width: 60, height: 60 }} source={summer2}></Image>
          <View>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 18,
                marginTop: 10,
                fontWeight: 600,
              }}
            >
              수박화채
            </Text>
            <Text style={{ marginLeft: 20, marginTop: 5, color: "gray" }}>
              수박의 달콤한 맛을 경험해보세요
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 30,
            borderRadius: 15,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            backgroundColor: "#F6F6F6",
            padding: 5,
          }}
        >
          <Image style={{ width: 60, height: 60 }} source={summer3}></Image>
          <View>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 18,
                marginTop: 10,
                fontWeight: 600,
              }}
            >
              삼계탕
            </Text>
            <Text style={{ marginLeft: 20, marginTop: 5, color: "gray" }}>
              이열치열! 더울때는 삼계탕 앞으로
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 30,
            borderRadius: 15,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            backgroundColor: "#F6F6F6",
            padding: 5,
          }}
        >
          <Image style={{ width: 60, height: 60 }} source={summer5}></Image>
          <View>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 18,
                marginTop: 10,
                fontWeight: 600,
              }}
            >
              오이냉국
            </Text>
            <Text style={{ marginLeft: 20, marginTop: 5, color: "gray" }}>
              시원한 오이냉국으로 열을 식히고 상쾌하게!
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
