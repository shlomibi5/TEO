import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ChooseGame = ({ navigation }) => {
  const handleLawQuiz = () => {
    navigation.navigate("LawQuiz");
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

        <View style={styles.row_two}>
          <LinearGradient
            colors={["#4a13a5", "#581f6e"]}
            start={{ x: 0.5, y: 0.7 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0.3, 1]}
            style={styles.button}
          >
            <TouchableOpacity style={styles.box_center} onPress={handleLawQuiz}>
              <Image
                source={require("/assets/icons/1.png")}
                style={styles.img_trivia}
              />
              <Text style={styles.buttonText}>טריוויה</Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={["#4a13a5", "#581f6e"]}
            start={{ x: 0.5, y: 0.7 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0.3, 1]}
            style={styles.button}
          >
            <TouchableOpacity style={styles.box_center}>
              <Image
                source={require("/assets/icons/2.png")}
                style={styles.img_box}
              />
              <Text style={styles.buttonText}>משחק הזיכרון</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View style={styles.row_two}>
          <LinearGradient
            colors={["#4a13a5", "#581f6e"]}
            start={{ x: 0.5, y: 0.7 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0.3, 1]}
            style={styles.button}
          >
            <TouchableOpacity style={styles.box_center}>
              <Image
                source={require("/assets/icons/3.png")}
                style={styles.img_box}
              />
              <Text style={styles.buttonText}>נורות אזהרה</Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={["#4a13a5", "#581f6e"]}
            start={{ x: 0.5, y: 0.7 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0.3, 1]}
            style={styles.button}
          >
            <TouchableOpacity style={styles.box_center}>
              <Image
                source={require("/assets/icons/5.png")}
                style={styles.img_tag}
              />
              <Image
                source={require("/assets/icons/4.png")}
                style={styles.img_box}
              />
              <Text style={styles.buttonText}>איזה חוק עברתי?</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View style={styles.row_two}>
          <LinearGradient
            colors={["#4a13a5", "#581f6e"]}
            start={{ x: 0.5, y: 0.7 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0.3, 1]}
            style={styles.button}
          >
            <TouchableOpacity style={styles.box_center}>
              <Image
                source={require("/assets/icons/6.png")}
                style={styles.img_box}
              />
              <Text style={styles.buttonText}>השלמת מילים</Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient
            colors={["#4a13a5", "#581f6e"]}
            start={{ x: 0.5, y: 0.7 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0.3, 1]}
            style={styles.button}
          >
            <TouchableOpacity style={styles.box_center}>
              <Image
                source={require("/assets/icons/7.png")}
                style={styles.img_box}
              />
              <Text style={styles.buttonText}>סולמות ונחשים</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
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
  score_friends: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 40,
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
  box_center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    width: "41px",
    height: "41px",
    marginHorizontal: 5,
  },
  row_two: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 8,
    width: 170,
    height: 150,
    marginHorizontal: 10,
  },

  buttonText: {
    paddingHorizontal: 20,
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },

  img_box: {
    width: 80,
    height: 80,
  },

  img_trivia: {
    width: 120,
    height: 80,
  },

  img_tag: {
    width: 70,
    height: 50,
    position: "absolute",
    bottom: 110,
    right: 110,
  },
});

export default ChooseGame;
