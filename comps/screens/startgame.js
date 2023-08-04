import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import ProgressBarAnimated from "react-native-progress-bar-animated";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const StartGame = ({ navigation }) => {
  const progressCustomStyles = {
    backgroundColor: "blue",
    borderRadius: 5,
    borderColor: "orange",
  };

  const handleChooseGame = () => {
    navigation.navigate("ChooseGame");
  };
  const handleStoreGifts = () => {
    navigation.navigate("StoreGifts");
  };
  const handleTopUsers = () => {
    navigation.navigate("TopUsers");
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#110C51", "#110C51", "#110C51", "#7C7C7C"]}
        start={{ x: 1, y: 5 }}
        end={{ x: 0, y: 0 }}
        locations={[0, 0.25, 0.75, 1]}
        style={styles.gradient}
      >
        <View style={styles.row}>
          <View style={styles.leftElement}>
            <Image
              style={styles.image}
              source={require("/assets/icons/global.png")}
            />
          </View>
          <View style={styles.middleElement}>
            <Text style={styles.text}>תומר5 הזמין אותך למשחק</Text>
            <TouchableOpacity style={styles.configShare}>
              <Text style={styles.text_btnShare}>אשר ושחק</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rightElement}>
            <Image
              style={styles.logoRight}
              source={require("/assets/icon.png")}
            />
          </View>
        </View>

        <View style={styles.info}>
          <View>
            <Text style={styles.text_info}>
              ליטל1123 1550 נקודות! לצפייה ברשימה המלאה
            </Text>
          </View>
        </View>

        <View style={styles.score_friends}>
          <TouchableOpacity onPress={handleTopUsers}>
            <LinearGradient
              colors={["#531a84", "#4a12a5"]}
              start={{ x: 0.5, y: 0.7 }}
              end={{ x: 0.5, y: 1 }}
              locations={[0.3, 1]}
              style={styles.button_friend}
            >
              <Image
                source={require("/assets/icons/friend.png")}
                style={styles.icons}
              />
              <Text style={styles.buttonText_f}>החברים שלי</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={["#531a84", "#4a12a5"]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              locations={[0.3, 1]}
              style={styles.button_score}
            >
              <Image
                source={require("/assets/icons/daimond.png")}
                style={styles.icons}
              />
              <Text style={styles.buttonText_s}>315</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.newgame_block}>
          <TouchableOpacity
            style={styles.newgame_btn}
            onPress={handleChooseGame}
          >
            <Text style={styles.newgame_btn_text}>משחק חדש</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row_three}>
          <LinearGradient
            colors={["#4a13a5", "#581f6e"]}
            start={{ x: 0.5, y: 0.7 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0.3, 1]}
            style={styles.button}
          >
            <TouchableOpacity style={styles.btnwar}>
              <Text style={styles.buttonText}>לוח תמרורים</Text>
              <Image
                source={require("/assets/icons/warning.png")}
                style={styles.warning}
              />
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={["#4a13a5", "#581f6e"]}
            start={{ x: 0.5, y: 0.7 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0.3, 1]}
            style={styles.button}
          >
            <TouchableOpacity style={styles.block_bar}>
              <Text style={styles.buttonText2}>מעקב התקדמות</Text>
              <ProgressBarAnimated
                width={120}
                maxValue={100}
                value={50}
                backgroundColor="#5f2cff"
                backgroundColorOnComplete="#5f2cff"
                onComplete={() => console.log("onComplete")}
                borderColor="#DDD"
                barAnimationDuration={1000}
                styles={progressCustomStyles}
              />
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <LinearGradient
          colors={["#4a13a5", "#581f6e"]}
          start={{ x: 0.5, y: 0.7 }}
          end={{ x: 0.5, y: 1 }}
          locations={[0.3, 1]}
          style={styles.button_last}
        >
          <TouchableOpacity style={styles.btn_store} onPress={handleStoreGifts}>
            <Image
              source={require("/assets/icons/alld.png")}
              style={styles.giftstore_icon}
            />
            <Text style={styles.buttonText}>חנות מתנות</Text>
          </TouchableOpacity>
        </LinearGradient>

        <TouchableOpacity style={styles.sos}>
          <View style={styles.sos_block}>
            <Text style={styles.text_sos}>לדיווח וסיוע</Text>
            <Image
              source={require("/assets/icons/sos.png")}
              style={styles.sos_img}
            />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  leftElement: {
    flex: 1,
    alignItems: "flex-start",
  },
  middleElement: {
    flex: 3,
    alignItems: "center",
    textAlign: "center",
  },
  rightElement: {
    flex: 1,
    alignItems: "flex-end",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
    marginBottom: 10,
  },
  logoRight: {
    width: 80,
    height: 80,
  },
  configShare: {
    borderRadius: 50,
    backgroundColor: "#5C2263",
    paddingHorizontal: 15,
  },
  text_btnShare: {
    color: "white",
    paddingHorizontal: 10,
    fontSize: 20,
    paddingBottom: 5,
  },
  info: {
    marginTop: 10,
    borderRadius: 50,
    borderColor: "#49E7FF",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  text_info: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
  score_friends: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  button_score: {
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 100,
    width: "170px",
    textAlign: "center",
    backgroundColor: "#4A12A5",
    paddingVertical: 14,
    paddingHorizontal: 5,
    marginVertical: 40,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "white",
    shadowOpacity: 0.8,
    shadowRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button_friend: {
    borderBottomRightRadius: 100,
    borderTopRightRadius: 100,
    width: "170px",
    textAlign: "center",
    backgroundColor: "#4A12A5",
    paddingVertical: 14,
    paddingHorizontal: 5,
    marginVertical: 40,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "white",
    shadowOpacity: 0.8,
    shadowRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText_f: {
    color: "white",
    fontSize: 17,
    fontWeight: "400",
  },
  buttonText_s: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
  icons: {
    width: "41px",
    height: "41px",
    marginHorizontal: 5,
  },
  newgame_block: {
    backgroundColor: "#49e7ff",
    borderRadius: 100,
    padding: 5,
    marginTop: 30,
    marginBottom: 30,
  },
  newgame_btn: {
    width: 250,
    borderRadius: 100,
    borderTopColor: "#cef8ff",
    borderTopWidth: 7,
    borderBottomColor: "#3b88c3",
    borderBottomWidth: 7,
    paddingVertical: 5,
  },
  newgame_btn_text: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 5,
  },
  row_three: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 8,
    width: 150,
    height: 130,
    marginHorizontal: 10,
  },
  button_last: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 8,
    width: 320,
    height: 72,
    marginTop: 10,
  },
  buttonText: {
    paddingHorizontal: 20,
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },
  buttonText2: {
    paddingHorizontal: 20,
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 16,
  },
  buttonSingle: {
    marginTop: 8,
    width: "60%",
    backgroundColor: "black",
  },
  btn_store: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnwar: {
    justifyContent: "center",
    alignItems: "center",
  },
  warning: {
    width: "75%",
    height: 25,
  },
  sos_block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sos: {
    marginTop: 60,
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "white",
    shadowOpacity: 0.8,
    shadowRadius: 15,
  },
  text_sos: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    marginLeft: 10,
  },
  sos_img: {
    width: 35,
    height: 35,
    marginLeft: 10,
  },
  giftstore_icon: {
    width: 60,
    height: 40,
  },
  block_bar: {
    justifyContent: "center",
    alignItems: "center",
  }
});

export default StartGame;
