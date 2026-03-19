import { router } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import BadmintonLogo from "../assets/svgs/BadmintonLogo";
import CricketLogo from "../assets/svgs/CricketLogo";
import GameSelectionTitle from "../assets/svgs/GameSelectionTitle";
import WinzzLogo from "../assets/svgs/Winzzlogo";

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
      <Animatable.View animation="fadeInDown" style={styles.topSection}>
        <WinzzLogo width={350} height={100} />
        <View style={styles.spacingSmall} />
        <GameSelectionTitle width={350} height={100} />
      </Animatable.View>
      <View style={styles.centerSection}>
        {/* BADMINTON */}
        <Animatable.View animation="zoomIn" delay={200} style={styles.logoBlock}>
          <TouchableOpacity onPress={() => handlePress("badminton")} activeOpacity={0.8} style={styles.logoWrapper}>
            <BadmintonLogo width={170} height={170} />
          </TouchableOpacity>
        </Animatable.View>
        <View style={styles.spacingLarge} />
        {/* CRICKET */}
        <Animatable.View animation="zoomIn" delay={400} style={styles.logoBlock}>
          <TouchableOpacity disabled activeOpacity={1} style={[styles.logoWrapper, styles.locked]}>
            <CricketLogo width={170} height={130} />
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    alignItems: "center",
    justifyContent: "space-between",
  },

  topSection: {
    alignItems: "center",
    marginTop: 10,
  },

  centerSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logoBlock: {
    alignItems: "center",
  },

  logoWrapper: {
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#ff0000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 8,
  },

  locked: {
    opacity: 0.5,
  },

  spacingSmall: {
    height: 20,
  },

  spacingLarge: {
    height: 40,
  },
});

export default SportSelection;