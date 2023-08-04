import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ListItem = ({ name, quantity, price, imageUrl }) => (
  <View style={styles.listItem}>
    <View style={styles.leftContent}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </View>
    <View style={styles.rightContent}>
      <Text style={styles.giftTitle}>{name}</Text>
      <View style={styles.status}>
        <Text>במלאי: {quantity}</Text>
        <Text style={styles.dStock}>
          {price}
          <Image
            source={require("/assets/icons/daimond.png")}
            style={styles.stockIcone}
          />
        </Text>
      </View>
    </View>
  </View>
);

const StoreGifts = () => {
  const data = [
    {
      name: "15% הנחה כרטיס טיסה אל-על",
      quantity: 150,
      price: 215,
      imageUrl: require("/assets/images/gift1.png"),
    },
    {
      name: "מארז 1/2 קילו גלידה גולדה",
      quantity: 320,
      price: 107,
      imageUrl: require("/assets/images/gift2.png"),
    },
    {
      name: "כרטיס זוגי למשחק מכבי תל-אביב",
      quantity: 480,
      price: 40,
      imageUrl: require("/assets/images/gift3.png"),
    },
    {
      name: "כרטיס זוגי למשחק מכבי תל-אביב",
      quantity: 480,
      price: 40,
      imageUrl: require("/assets/images/gift1.png"),
    },
    {
      name: "מארז 1/2 קילו גלידה גולדה",
      quantity: 320,
      price: 107,
      imageUrl: require("/assets/images/gift2.png"),
    },
  ];

  return (
    <View>
      <LinearGradient
        colors={["#110C51", "#110C51", "#110C51", "#7C7C7C"]}
        start={{ x: 1, y: 5 }}
        end={{ x: 0, y: 0 }}
        locations={[0, 0.25, 0.75, 1]}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <TouchableOpacity>
            <LinearGradient
              colors={["#531a84", "#4a12a5"]}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 1 }}
              locations={[0, 1]}
              style={styles.button_score}
            >
              <Image
                source={require("/assets/icons/daimond.png")}
                style={styles.icons}
              />
              <Text style={styles.buttonText_s}>315</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.title}>חנות מתנות</Text>
        </View>

        <View style={styles.giftsBlock}>
          {data.map((item, index) => (
            <ListItem
              key={index}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dStock: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  stockIcone: {
    width: "19px",
    height: "16px",
  },
  title: {
    color: "white",
    fontSize: 23,
    fontWeight: 600,
    paddingRight: 20,
  },
  button_score: {
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    width: "120px",
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
  buttonText_s: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
  icons: {
    width: "25px",
    height: "25px",
    marginHorizontal: 5,
  },
  giftsBlock: {
    flex: 1,
    paddingTop: 30,
  },
  listItem: {
    width: 320,
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    backgroundColor: "white",
    marginBottom: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "white",
    shadowOpacity: 0.8,
    shadowRadius: 15,
  },
  leftContent: {
    flex: 1,
  },
  rightContent: {
    flex: 1.5,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  status: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  giftTitle: {
    fontSize: 16,
    fontWeight: 700,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  image: {
    width: 132,
    height: 164,
    marginRight: 10,
  },
});

export default StoreGifts;
