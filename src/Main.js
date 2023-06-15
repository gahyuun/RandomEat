import { useNavigation } from '@react-navigation/native';
import CategoryMenu from '../components/main/CategoryMenu';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Routes } from '../navigator/Routes';
import RecommendMenu from '../assets/RecommendMenu.png';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import CarouselMenu from '../components/main/CarouselMenu';
import { useState } from 'react';

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
        <View style={styles.recommendContainer}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
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
                오늘 같은 더운 날씨 {'\n'}빙수 어떤가요?
              </Text>
            </View>
            <Image source={RecommendMenu}></Image>
          </View>
        </View>
      </View>
      {/* 프로젝트명 및 추천 메뉴 */}
      <CategoryMenu menu={menu} setMenu={setMenu}></CategoryMenu>
      {/* 카테고리별 메뉴 추천 */}
      {/* <View
        style={{
          height: 500,
        <CarouselMenu menu={menu}></CarouselMenu>
        <Button
          title='룰렛 돌리러 가기'
          onPress={() => {
            navigation.navigate(Routes.SELECTMENU);
          }}
        ></Button>
      </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  color: {
    color: '#693894',
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 60,
    marginLeft: 40,
  },
  recommendContainer: {
    backgroundColor: '#F6F3FF',
    borderRadius: 40,
    width: 341,
    height: 187,
    marginLeft: 25,
    marginTop: 20,
  },
  weatherText: {
    fontWeight: 700,
    fontSize: 48,
    marginTop: 20,
  },

  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
});
