import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Colors from "../constants/colors";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from '../components/MainButton'

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          faceDuration={1000}
          source={require("../assets/success.png")}
          style={styles.image}
        />
      </View>

      <BodyText>
        Your phone needed{" "}
        <Text style={styles.highlight}>{props.numOfRounds}</Text> rounds to
        guess the number{" "}
        <Text style={styles.highlight}>{props.userChoice}</Text>.
      </BodyText>
      <MainButton onPress={props.onRestart}>{"New Game"}</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: Colors.primary,
  },
});

export default GameOverScreen;
