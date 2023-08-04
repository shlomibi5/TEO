import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

const FlatButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={['#9743A1', '#100%', '9743A1', '#43%']} 
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 163.2,
    height: 48,
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default FlatButton;