import { Image } from "expo-image";
import { router } from "expo-router";
import React from "react";
import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const teamMembers = [
  { id: "1", name: "Babu" },
  { id: "2", name: "Subbu", icon: "🏸" },
  { id: "3", name: "Hari" },
  { id: "4", name: "Shiva" },
  { id: "5", name: "Arun" },
  { id: "6", name: "Abishek" },
  { id: "7", name: "Loga Balaji" },
  { id: "8", name: "Nidhu" },
  { id: "9", name: "Naveen" },
  { id: "10", name: "Tharun" },
];

const TeamMembers = () => {
  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.listItem}>
      <Text style={styles.listText}>{item.name}</Text>
      {item.icon && <Text style={styles.iconText}>{item.icon}</Text>}
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/svgs/teamMembers/Bakcground.svg")}
        style={styles.background}
        resizeMode="cover"
      >
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={{color: "white", padding: 10}}>{"< Back"}</Text>
        </TouchableOpacity>

        {/* HEADER SECTION */}
        <View style={styles.headerContainer}>
          <Image
            source={require("../assets/svgs/teamMembers/Winzz font.svg")}
            style={styles.winzzLogo}
            contentFit="contain"
          />
        </View>

        <View style={styles.titleWrapper}>
           <Image
            source={require("../assets/svgs/teamMembers/Team Members.svg")}
            style={styles.teamTitle}
            contentFit="contain"
          />
        </View>

        {/* LIST SECTION */}
        <View style={styles.listContainer}>
          <FlatList
            data={teamMembers}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.flatListContent}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={() => router.push("./Fixtures")}>
          <Text style={styles.nextText}>Next: Fixtures -></Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#200000",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  backButton: {
    paddingTop: 50,
    paddingLeft: 20,
    alignSelf: "flex-start",
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  winzzLogo: {
    width: 250,
    height: 70,
  },
  titleWrapper: {
    paddingLeft: 40,
    marginBottom: 20,
  },
  teamTitle: {
    width: 280,
    height: 50,
    alignSelf: "flex-start",
  },
  listContainer: {
    flex: 1,
    paddingLeft: 55,
  },
  flatListContent: {
    paddingBottom: 50,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  listText: {
    color: "#ffffff",
    fontSize: 26,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  iconText: {
    fontSize: 20,
    marginLeft: 15,
  },
  nextButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  nextText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TeamMembers;
