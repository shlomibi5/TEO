import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ListUsers = ({ userName, score, counter }) => (
  <LinearGradient
    colors={["#581f6e", "#4a13a5"]}
    start={{ x: 0, y: 1 }}
    end={{ x: 0.4, y: 0 }}
    locations={[0, 1]}
    style={styles.listItem}
  >
    <View style={styles.blockUser}>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreSum}> {formatScore(score)}</Text>
        <Image
          style={styles.topScoreIcone}
          source={require("/assets/icons/topscore.png")}
        />
      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.numberList}>{counter}</Text>
      </View>
    </View>
  </LinearGradient>
);

const formatScore = (score) => {
  if (score >= 1000) {
    return `${(score / 1000).toFixed(1)}K`;
  } else {
    return score.toString();
  }
};

const TopUsers = () => {
  const counter = 1;

  const data = [
    {
      user: "שלומי ביטן",
      score: 164050,
    },
    {
      user: "אלון אברג'ל",
      score: 62050,
    },
    {
      user: "עדי דנינו",
      score: 60050,
    },
    {
        user: "עמית חסון",
        score: 54050,
      },
      {
        user: "אהוד איבגי",
        score: 52050,
      },
      {
        user: "מאור גלרנטר",
        score: 51450,
      },
      {
        user: "סהר סויסה",
        score: 48850,
      },
    
  ];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#110C51", "#110C51", "#110C51", "#7C7C7C"]}
        start={{ x: 1, y: 5 }}
        end={{ x: 0, y: 0 }}
        locations={[0, 0.25, 0.75, 1]}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <Image
            style={styles.topIcone}
            source={require("/assets/icons/top.png")}
          />
          <Text style={styles.title}>10 המובילים</Text>
        </View>

        <View style={styles.giftsBlock}>
          {data.map((item, index) => {
            const currentCounter = counter + index;

            return (
              <ListUsers
                key={index}
                userName={item.user}
                score={item.score}
                counter={currentCounter}
              />
            );
          })}
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
  header: {
    paddingVertical: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  topIcone: {
    width: 100,
    height: 95,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: 700,
  },
  icons: {
    width: "25px",
    height: "25px",
    marginHorizontal: 5,
  },
  giftsBlock: {
    width: "100%",
    flex: 1,
    paddingTop: 30,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "white",
    shadowOpacity: 0.5,
    shadowRadius: 15,
  },
  blockUser: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 61,
    paddingHorizontal: 20,
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  scoreSum: {
    color: "white",
    fontSize: 17,
    fontWeight: 600,
    borderColor: "white",
    borderRadius: 50,
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 30,
    paddingVertical: 5,
  },
  topScoreIcone: {
    width: 45,
    height: 40,
    marginLeft: -25,
  },
  userName: {
    color: "white",
    fontSize: 20,
    fontWeight: 600,
  },
  numberList: {
    fontSize: 16,
    lineHeight: 30,
    fontWeight: 700,
    marginLeft: 20,
    color: "white",
    textAlign: "center",
    backgroundColor: "#d9d9d97d",
    borderRadius: 100,
    width: 32,
    height: 32,
  },
});

export default TopUsers;
