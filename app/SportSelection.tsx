import { router } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { Image } from "expo-image";

const SportSelection = () => {
  const handlePress = (sport: string) => {
    if (sport === "badminton") {
      router.push("./badmintonKickStart");
    } 
    else {
      console.log(`${sport} coming soon`);
    }
  };

  return (
    <ImageBackground  source={require("../assets/images/app_background.svg")} style={styles.container} resizeMode="cover">
      {/* TOP SECTION */}
      <Animatable.View animation="fadeInDown" style={styles.titleContainer}>
        <Image source={require("../assets/svgs/WinzzLogo.svg")} style={styles.winzz} contentFit="contain" />
        <Image source={require("../assets/svgs/GameSelectionTitle.svg")} style={styles.subtitle} contentFit="contain" />
      </Animatable.View>

      {/* BADMINTON */}
      <Animatable.View animation="zoomIn" delay={200} style={styles.gameBlock}>
        <TouchableOpacity onPress={() => handlePress("badminton")} activeOpacity={0.8} style={styles.logoWrapper}>
          <Image source={require("../assets/svgs/BadmintonLogo.svg")} style={styles.badmintonLogo} contentFit="contain" />
        </TouchableOpacity>
      </Animatable.View>

      {/* CRICKET */}
      <Animatable.View animation="zoomIn" delay={400}>
        <TouchableOpacity onPress={() => handlePress("cricket")} activeOpacity={0.8} style={styles.logoWrapper}>
          <Image source={require("../assets/svgs/CricketLogo.svg")} style={styles.cricketLogo} contentFit="contain" />
        </TouchableOpacity>
      </Animatable.View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    alignItems: "center",
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  winzz: {
    width: 350,
    height: 90,
    marginBottom: 15,
  },
  subtitle: {
    width: 240,
    height: 45,
  },
  gameBlock: {
    marginBottom: 70,
  },
  badmintonLogo: {
    width: 190,
    height: 190,
  },
  cricketLogo: {
    width: 210,
    height: 180,
  },
  logoWrapper: {
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#ff0000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 8,
  },
});

export default SportSelection;