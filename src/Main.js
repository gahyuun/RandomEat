import { useNavigation } from "@react-navigation/native";
import CategoryMenu from "../components/main/CategoryMenu";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Routes } from "../navigator/Routes";
import RecommendMenu from "../assets/RecommendMenu.png";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-web";
import CarouselMenu from "../components/main/CarouselMenu";
import { useState } from "react";

export default function Main() {
  const [menu, setMenu] = useState({
    korean: true,
    western: false,
    chinese: false,
    japanese: false,
    dessert: false,
    night: false,
  });
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 0.95,
      }}
    >
      <View>
        <Text style={[styles.headerText, styles.color]}>RANDOM EAT</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(Routes.WEATHER);
          }}
        >
          <View style={styles.recommendContainer}>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={[styles.weatherText, styles.color]}>26℃</Text>
                <Text
                  style={{
                    fontWeight: 400,
                    fontSize: 20,
                    marginLeft: 30,
                    marginTop: 20,
                  }}
                >
                  오늘 같은 더운 날씨 {"\n"}빙수 어떤가요?
                </Text>
              </View>
              <Image source={RecommendMenu}></Image>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {/* 프로젝트명 및 추천 메뉴 */}
      <CategoryMenu menu={menu} setMenu={setMenu}></CategoryMenu>
      {/* 카테고리별 메뉴 추천 */}
      <View
        style={{
          height: 400,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CarouselMenu menu={menu}></CarouselMenu>
        <TouchableOpacity
          style={{
            backgroundColor: "#693894",
            width: 350,
            height: 50,
            borderRadius: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // shadowOffset: {
            //   width: 0,
            //   height: 2,
            // },
            // shadowOpacity: 0.25,
            // shadowRadius: 4,
          }}
          onPress={() => {
            navigation.navigate(Routes.SELECTROULETTE);
          }}
        >
          <Text style={styles.button}>룰렛 돌리러 가기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  color: {
    color: "#693894",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 60,
    marginLeft: 40,
  },
  recommendContainer: {
    backgroundColor: "#F6F3FF",
    borderRadius: 40,
    width: 341,
    height: 183,
    marginLeft: 25,
    marginTop: 17,
  },
  weatherText: {
    fontWeight: 700,
    fontSize: 48,
    marginTop: 20,
  },

  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "#693894",
    color: "#ffffff",
    fontSize: 18,
  },
});
