import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Path, Svg } from "react-native-svg";

export default function CategoryMenu({ menu, setMenu }) {
  return (
    <View style={{ marginLeft: 25, marginTop: 20, marginBottom: 5 }}>
      <Text style={[{ fontWeight: 800, fontSize: 20 }, styles.color]}>
        카테고리별 메뉴 추천
      </Text>
      <View
        style={{
          display: "flex",
          marginTop: 20,
          flexDirection: "row",
          gap: 23,
        }}
      >
        {/* 한식 */}
        <View style={{ alignItems: "center" }}>
          <TouchableHighlight
            onPressIn={() => {
              // setKorean(!korean);
            }}
            onPressOut={() => {
              setMenu({
                korean: true,
                western: false,
                chinese: false,
                japanese: false,
                dessert: false,
                night: false,
              });
            }}
            underlayColor="#ffff"
          >
            <Svg
              width="36"
              height="34"
              viewBox="0 0 36 34"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginBottom: 10 }}
            >
              <Path
                d="M33.7403 12.2367C33.7078 11.17 33.3968 10.1294 32.8372 9.21431C32.2775 8.29922 31.4879 7.54032 30.5438 7.0102C30.3175 5.49266 29.5411 4.10601 28.3572 3.10446C27.1732 2.10292 25.661 1.55359 24.0977 1.55718C23.4982 1.55617 22.9012 1.63231 22.3219 1.78366C21.0996 0.638802 19.4746 0 17.7847 0C16.0948 0 14.4698 0.638802 13.2475 1.78366C12.6682 1.63231 12.0712 1.55617 11.4717 1.55718C9.9023 1.54517 8.38147 2.09069 7.19008 3.09299C5.9987 4.0953 5.21723 5.48669 4.99001 7.0102C4.04265 7.53815 3.24949 8.2961 2.68664 9.21134C2.12379 10.1266 1.81015 11.1684 1.7758 12.2367C1.30483 12.2367 0.853149 12.4203 0.520121 12.747C0.187093 13.0737 0 13.5169 0 13.9789C7.9187e-05 17.037 0.82065 20.0412 2.37924 22.6895C3.93783 25.3379 6.17953 27.5371 8.87902 29.0662V31.4007C8.87902 31.8627 9.06612 32.3059 9.39915 32.6326C9.73217 32.9593 10.1839 33.1429 10.6548 33.1429H24.8613C25.3322 33.1429 25.7839 32.9593 26.117 32.6326C26.45 32.3059 26.6371 31.8627 26.6371 31.4007V29.0662C29.3366 27.5371 31.5783 25.3379 33.1369 22.6895C34.6954 20.0412 35.516 17.037 35.5161 13.9789C35.5161 13.5169 35.329 13.0737 34.996 12.747C34.6629 12.4203 34.2113 12.2367 33.7403 12.2367ZM5.32741 12.2367C5.37252 11.6863 5.58428 11.1617 5.93551 10.7302C6.28673 10.2987 6.7614 9.98003 7.29856 9.8151L8.77248 9.36214L8.48835 7.88129C8.49298 7.50607 8.57291 7.13542 8.72357 6.79051C8.87423 6.4456 9.09266 6.13319 9.3664 5.8711C9.64013 5.60902 9.96381 5.4024 10.319 5.26306C10.6741 5.12371 11.0537 5.05435 11.4362 5.05896C11.949 5.05608 12.4549 5.17566 12.9101 5.40739L14.3485 6.19137L15.2364 4.8499C15.5141 4.44386 15.8894 4.11112 16.3291 3.88104C16.7689 3.65096 17.2597 3.5306 17.758 3.5306C18.2564 3.5306 18.7472 3.65096 19.187 3.88104C19.6267 4.11112 20.002 4.44386 20.2797 4.8499L21.1676 6.19137L22.606 5.40739C23.0612 5.17566 23.5671 5.05608 24.0799 5.05896C24.848 5.04948 25.5892 5.33629 26.1438 5.85764C26.6985 6.37899 27.0223 7.09318 27.0455 7.84644L26.7614 9.32729L28.2175 9.8151C28.7547 9.98003 29.2294 10.2987 29.5806 10.7302C29.9318 11.1617 30.1436 11.6863 30.1887 12.2367H5.32741Z"
                fill={menu.korean ? "#693894" : "#BEBDBD"}
              />
            </Svg>
          </TouchableHighlight>
          <Text style={[styles.text, menu.korean ? styles.color : styles.gray]}>
            한식
          </Text>
        </View>
        {/* 양식 */}
        <View style={{ alignItems: "center" }}>
          <TouchableHighlight
            onPressIn={() => {
              // setKorean(!korean);
            }}
            onPressOut={() => {
              setMenu({
                korean: false,
                western: true,
                chinese: false,
                japanese: false,
                dessert: false,
                night: false,
              });
            }}
            underlayColor="#ffff"
          >
            <Svg
              width="33"
              height="34"
              viewBox="0 0 33 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginBottom: 10 }}
            >
              <Path
                d="M0.287307 4.44713C0.2879 1.94585 2.64134 -0.240926 5.68067 0.021416C15.8643 0.900425 24.9188 5.13265 31.3804 11.4334C33.4254 13.4275 32.7901 16.3874 30.4653 17.8607L29.657 18.373L28.9631 17.4694L28.948 17.4513C22.8462 10.0865 12.9243 5.29173 1.72165 5.29173H0.287097L0.287307 4.44713ZM26.6106 18.9042L27.3336 19.8457C24.5477 21.6119 21.5105 23.5383 19.7873 24.6343L19.4007 24.8862V28.3985C19.4007 29.3215 18.5447 30.07 17.4887 30.07C16.4328 30.07 15.5768 29.3215 15.5768 28.3985V28.2972C15.5175 27.8823 15.1128 27.5604 14.6283 27.5604C14.1004 27.5604 13.6723 27.9345 13.6723 28.3961V30.9081C13.6723 31.8311 12.8163 32.5796 11.7603 32.5796C10.7692 32.5796 9.95432 31.9202 9.85795 31.0759C8.96874 31.6362 8.01732 32.2364 7.10471 32.8126C4.25892 34.6089 0.280443 32.8316 0.281189 29.7618L0.286485 7.79898H1.72165C11.9569 7.79898 21.0237 12.1726 26.6106 18.9042ZM7.93646 15.0273C8.9924 15.0273 9.84839 14.279 9.84839 13.3558C9.84839 12.4327 8.9924 11.6843 7.93646 11.6843C6.88051 11.6843 6.02451 12.4327 6.02451 13.3558C6.02451 14.279 6.88051 15.0273 7.93646 15.0273ZM15.5842 20.0386C16.6402 20.0386 17.4962 19.2903 17.4962 18.3671C17.4962 17.444 16.6402 16.6956 15.5842 16.6956C14.5283 16.6956 13.6723 17.444 13.6723 18.3671C13.6723 19.2903 14.5283 20.0386 15.5842 20.0386ZM7.93646 25.0486C8.9924 25.0486 9.84839 24.3001 9.84839 23.3771C9.84839 22.454 8.9924 21.7056 7.93646 21.7056C6.88051 21.7056 6.02451 22.454 6.02451 23.3771C6.02451 24.3001 6.88051 25.0486 7.93646 25.0486Z"
                fill={menu.western ? "#693894" : "#BEBDBD"}
              />
            </Svg>
          </TouchableHighlight>
          <Text
            style={[
              styles.text,
              menu.western ? styles.color : styles.gray,
              { marginRight: 5 },
            ]}
          >
            양식
          </Text>
        </View>
        {/* 중식 */}
        <View style={{ alignItems: "center" }}>
          <TouchableHighlight
            onPressIn={() => {
              // setKorean(!korean);
            }}
            onPressOut={() => {
              setMenu({
                korean: false,
                western: false,
                chinese: true,
                japanese: false,
                dessert: false,
                night: false,
              });
            }}
            underlayColor="#ffff"
          >
            <Svg
              width="36"
              height="34"
              viewBox="0 0 36 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginBottom: 10 }}
            >
              <Path
                d="M6.24338 0.165978C6.88083 -0.176519 7.69512 0.0280714 8.06215 0.622916L16.8798 14.9144H20.9094L12.8569 1.8632C12.4899 1.26834 12.7091 0.508475 13.3466 0.165978C13.984 -0.176519 14.7984 0.0280714 15.1654 0.622916L23.983 14.9144H34.518C35.2064 14.9144 35.7648 15.4354 35.7648 16.078V16.5715C35.7648 18.3036 35.4799 19.9736 34.9518 21.5429H1.06162C0.533407 19.9736 0.248657 18.3036 0.248657 16.5715V16.078C0.248657 15.4354 0.806882 14.9144 1.4955 14.9144H13.8062L5.75371 1.8632C5.3867 1.26834 5.60592 0.508475 6.24338 0.165978ZM2.14396 24.0286C5.06839 29.4352 11.0735 33.1429 18.0067 33.1429C24.9398 33.1429 30.945 29.4352 33.8694 24.0286H2.14396Z"
                fill={menu.chinese ? "#693894" : "#BEBDBD"}
              />
            </Svg>
          </TouchableHighlight>
          <Text
            style={[styles.text, menu.chinese ? styles.color : styles.gray]}
          >
            중식
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          {/* 일식 */}
          <TouchableHighlight
            onPressIn={() => {
              // setKorean(!korean);
            }}
            onPressOut={() => {
              setMenu({
                korean: false,
                western: false,
                chinese: false,
                japanese: true,
                dessert: false,
                night: false,
              });
            }}
            underlayColor="#ffff"
          >
            <Svg
              width="46"
              height="29"
              viewBox="0 0 46 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginTop: 5, marginBottom: 10 }}
            >
              <Path
                d="M17.1422 0C16.7289 0 16.3325 0.169742 16.0402 0.471884C15.748 0.774026 15.5838 1.18382 15.5838 1.61111H8.57109C6.82827 1.60811 5.12616 2.15566 3.69267 3.18043C2.25918 4.2052 1.16274 5.65829 0.550162 7.34512C-0.0624158 9.03195 -0.16189 10.872 0.265058 12.6189C0.692007 14.3658 1.625 15.9361 2.9391 17.1197C2.04445 17.6947 1.30553 18.4951 0.791506 19.4458C0.277482 20.3965 0.0051516 21.4664 0 22.5556C0 26.1 2.80508 29 6.23352 29H31.1676C34.596 29 37.4011 26.1 37.4011 22.5556C37.4011 20.9831 36.8214 19.5589 35.9051 18.4408L42.6903 21.5438C42.9718 21.6769 43.276 21.7508 43.5854 21.7614C43.8947 21.7719 44.203 21.7188 44.4924 21.6052C44.7818 21.4916 45.0464 21.3197 45.271 21.0995C45.4956 20.8793 45.6756 20.6152 45.8007 20.3224C45.9258 20.0297 45.9933 19.7142 45.9995 19.3943C46.0057 19.0744 45.9504 18.7563 45.8367 18.4587C45.7231 18.161 45.5534 17.8897 45.3375 17.6604C45.1216 17.4311 44.8638 17.2484 44.579 17.1229L38.9377 14.5387L44.018 13.6622C44.3209 13.6102 44.6109 13.497 44.8714 13.329C45.132 13.1611 45.358 12.9418 45.5366 12.6836C45.7152 12.4254 45.8428 12.1333 45.9122 11.8241C45.9816 11.5149 45.9914 11.1946 45.941 10.8814C45.8907 10.5683 45.7812 10.2685 45.6188 9.99913C45.4564 9.72975 45.2442 9.49608 44.9944 9.31147C44.7447 9.12686 44.4622 8.99491 44.1631 8.92317C43.864 8.85142 43.5542 8.84129 43.2513 8.89333L36.6126 10.0372C35.0885 6.28978 31.286 2.52622 24.9341 1.77222V1.61111C24.9341 1.18382 24.7699 0.774026 24.4776 0.471884C24.1854 0.169742 23.789 0 23.3757 0H17.1422ZM18.7006 3.22222H21.8173V25.7778H18.7006V3.22222ZM29.6092 16.1111C30.4165 16.1111 31.0554 16.7459 31.1364 17.5611L31.3733 17.1293C31.4749 16.9446 31.6108 16.7825 31.7732 16.6523C31.9357 16.5222 32.1214 16.4265 32.3197 16.3708C32.5181 16.3151 32.7251 16.3006 32.9289 16.328C33.1327 16.3553 33.3293 16.4241 33.5072 16.5304C33.6852 16.6366 33.8411 16.7782 33.966 16.947C34.0908 17.1158 34.1821 17.3084 34.2346 17.5138C34.2872 17.7192 34.2999 17.9334 34.272 18.1439C34.2442 18.3544 34.1764 18.5571 34.0724 18.7404L33.2683 20.184C33.5895 20.4832 33.846 20.849 34.0211 21.2577C34.1962 21.6664 34.2859 22.1086 34.2844 22.5556C34.2844 24.3697 32.9223 25.7778 31.1676 25.7778H24.9341V19.3333H28.0508V17.7222C28.0508 16.8297 28.7459 16.1111 29.6092 16.1111ZM7.60489 16.3367C7.90854 16.2971 8.2167 16.3513 8.49065 16.4923C8.7646 16.6334 8.99211 16.855 9.14457 17.1293L9.76793 18.2507C9.91163 18.0849 10.0874 17.9521 10.284 17.8611C10.4805 17.7701 10.6933 17.7227 10.9087 17.7222C11.772 17.7222 12.467 18.4408 12.467 19.3333H15.5838V25.7778H6.23352C4.47878 25.7778 3.11676 24.3697 3.11676 22.5556C3.11676 20.7414 4.47878 19.3333 6.23352 19.3333H6.77584L6.44546 18.7404C6.31452 18.5107 6.24114 18.2508 6.23199 17.9843C6.22284 17.7178 6.27821 17.4531 6.39307 17.2144C6.50793 16.9756 6.67864 16.7703 6.88972 16.617C7.10079 16.4637 7.34555 16.3674 7.60178 16.3367H7.60489Z"
                fill={menu.japanese ? "#693894" : "#BEBDBD"}
              />
            </Svg>
          </TouchableHighlight>
          <Text
            style={[
              styles.text,
              menu.japanese ? styles.color : styles.gray,
              { marginRight: 10 },
            ]}
          >
            일식
          </Text>
        </View>
        {/* 디저트 */}
        <View style={{ alignItems: "center" }}>
          <TouchableHighlight
            onPressIn={() => {
              // setKorean(!korean);
            }}
            onPressOut={() => {
              setMenu({
                korean: false,
                western: false,
                chinese: false,
                japanese: false,
                dessert: true,
                night: false,
              });
            }}
            underlayColor="#ffff"
          >
            <Svg
              width="36"
              height="34"
              viewBox="0 0 36 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginBottom: 10 }}
            >
              <Path
                d="M18.0266 9.85328C21.0709 9.85328 21.5782 7.4529 21.5782 5.47405C21.5782 3.49521 20.2684 0 18.0266 0C15.7849 0 14.475 3.49521 14.475 5.47405C14.475 7.4529 14.9824 9.85328 18.0266 9.85328ZM2.93229 15.6757C2.93229 13.4495 4.72117 11.6448 6.92785 11.6448H29.1254C31.332 11.6448 33.121 13.4495 33.121 15.6757V17.2432L26.6675 22.1262C25.951 22.6683 24.9819 22.7229 24.2102 22.265L20.5888 20.1159C18.9982 19.172 17.016 19.2132 15.4654 20.2225L12.3387 22.2577C11.6093 22.7322 10.6726 22.7346 9.94099 22.2634L2.93229 17.7502V15.6757ZM2.93229 20.9382V30.4556H1.60044C0.864883 30.4556 0.268585 31.0572 0.268585 31.7992C0.268585 32.5413 0.864883 33.1429 1.60044 33.1429H34.4528C35.1884 33.1429 35.7847 32.5413 35.7847 31.7992C35.7847 31.0572 35.1884 30.4556 34.4528 30.4556H33.121V20.6023L28.2657 24.276C26.6895 25.4686 24.5577 25.589 22.8597 24.5813L19.2383 22.4322C18.5153 22.0031 17.6143 22.0219 16.9095 22.4807L13.7828 24.5157C12.1782 25.5601 10.1174 25.5651 8.50782 24.5286L2.93229 20.9382Z"
                fill={menu.dessert ? "#693894" : "#BEBDBD"}
              />
            </Svg>
          </TouchableHighlight>
          <Text
            style={[styles.text, menu.dessert ? styles.color : styles.gray]}
          >
            디저트
          </Text>
        </View>
        {/* 야식 */}
        <View style={{ alignItems: "center" }}>
          <TouchableHighlight
            onPressIn={() => {
              // setKorean(!korean);
            }}
            onPressOut={() => {
              setMenu({
                korean: false,
                western: false,
                chinese: false,
                japanese: false,
                dessert: false,
                night: true,
              });
            }}
            underlayColor="#ffff"
          >
            <Svg
              width="34"
              height="33"
              viewBox="0 0 34 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginBottom: 10 }}
            >
              <Path
                d="M31.5171 24.62C26.4056 32.4765 15.0852 35.1684 6.23192 30.6323C3.82096 29.3971 1.79132 27.726 0.245457 25.734C-0.271392 25.0679 0.0629395 24.1482 0.920912 23.8757C7.89334 21.661 11.6277 19.0948 13.7947 15.424C16.076 11.5595 16.6655 7.32635 15.0696 1.5239C14.849 0.721546 15.563 -0.0424123 16.4925 0.00183275C19.374 0.139019 22.1891 0.873546 24.7418 2.18152C33.5951 6.71746 36.6284 16.7635 31.5171 24.62Z"
                fill={menu.night ? "#693894" : "#BEBDBD"}
              />
            </Svg>
          </TouchableHighlight>
          <Text style={[styles.text, menu.night ? styles.color : styles.gray]}>
            야식
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  color: {
    color: "#693894",
  },
  gray: {
    color: "#BEBDBD",
  },
  text: {
    marginBottom: 10,
    fontWeight: 500,
    fontSize: 16,
    color: "#9D9D9D",
  },
});
