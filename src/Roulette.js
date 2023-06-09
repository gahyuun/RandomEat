import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { itemState, resultState } from "../state";
import { useRecoilState, useRecoilValue } from "recoil";
import Modal from "react-native-modal";
import { Routes } from "../navigator/Routes";
import Header from "../components/Header";

export default function Roulette() {
  const navigation = useNavigation();
  const [btnVisible, setBtnVisible] = useState(true);
  const [currentText, setCurrentText] = useState("룰렛");
  const [color, setColor] = useState("#BFA2D8");
  const Items = useRecoilValue(itemState);
  const [modalVisible, setModalVisible] = useState(false);
  const [result, setResult] = useRecoilState(resultState);

  const startRoulette = () => {
    setBtnVisible(false);
    let intervalId;
    const start = Date.now();
    const end = start + Math.random() * (6000 - 5000) + 6000;

    const cycleTexts = () => {
      const elapsed = Date.now() - start;
      const index = Math.floor((elapsed / 500) % Items.length);
      setCurrentText(Items[index].text);
      setColor(colorItems[index]);

      if (Date.now() >= end) {
        clearInterval(intervalId);
        setCurrentText(Items[index].text);
        setColor(colorItems[index]);
        setTimeout(() => {
          setModalVisible(true);
          setResult(Items[index].text);
          setBtnVisible(true);
        }, 1000);
      }
    };
    intervalId = setInterval(cycleTexts, 10);
    return () => clearInterval(intervalId);
  };

  const colorItems = [
    "#693894",
    "#8457AB",
    "#9E7ABE",
    "#BFA2D8",
    "#D6BFEB",
    "#E7D5F5",
  ];

  return (
    <>
      <View style={{ marginTop: 65, marginLeft: 25 }}>
        <Header />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {/* 모달 */}
        {modalVisible && (
          <Modal isVisible={true}>
            <View
              style={{
                backgroundColor: "#EDE7FF",
                width: 350,
                height: 278,
                borderRadius: 20,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 35,
              }}
            >
              <Text style={{ fontWeight: 800, fontSize: 35, color: "#693894" }}>
                당첨!
              </Text>
              <Text style={{ fontWeight: 800, fontSize: 40 }}>{result}</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#693894",
                  width: 100,
                  height: 50,
                  borderRadius: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#ebebeb",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                }}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate(Routes.RESULT);
                }}
              >
                <Text
                  style={{
                    backgroundColor: "#693894",
                    color: "#ffffff",
                    fontSize: 20,
                    fontWeight: 500,
                  }}
                >
                  확인
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        )}

        {/* 룰렛 화면 */}

        <Text
          style={{
            fontWeight: 700,
            fontSize: 30,
            marginBottom: 70,
          }}
        >
          룰렛을 돌려주세요
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "",
            height: 340,
          }}
        >
          <View
            style={{
              width: 260,
              height: 260,
              backgroundColor: color,
              borderWidth: 1,
              borderColor: "#EBEBEB",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 1,
              elevation: 2, // for Android
              borderRadius: 200,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <Text style={{ fontWeight: 700, fontSize: 30, color: "#ffff" }}>
                {currentText}
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#693894",
            width: 150,
            height: 60,
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
            console.log(btnVisible);
            btnVisible === true ? startRoulette() : () => {};
          }}
        >
          <Text
            style={{
              backgroundColor: "#693894",
              color: "#ffffff",
              fontSize: 18,
            }}
          >
            룰렛 돌리기
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
