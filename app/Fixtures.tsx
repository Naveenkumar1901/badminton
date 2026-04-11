import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity, Dimensions } from "react-native";
import { Image } from "expo-image";

const { width } = Dimensions.get("window");

const matches = [
  {
    id: 1,
    matchNo: require('../assets/svgs/fixtures/MATCH 01 Text.svg'),
    team1: { players: ['Hari', 'Subbu'], text: require('../assets/svgs/fixtures/Net Ninjas Text.svg'), logo: require('../assets/svgs/fixtures/Net Ninja logo.svg') },
    team2: { players: ['Siva', 'Gokul'], text: require('../assets/svgs/fixtures/Titans Text.svg'), logo: require('../assets/svgs/fixtures/Titans logo.svg') }
  },
  {
    id: 2,
    matchNo: require('../assets/svgs/fixtures/MATCH 02 Text.svg'),
    team1: { players: ['Naveen', 'Loga'], text: require('../assets/svgs/fixtures/Warriors Text.svg'), logo: require('../assets/svgs/fixtures/Warriors logo.svg') },
    team2: { players: ['Babu', 'Abhi'], text: require('../assets/svgs/fixtures/Spartan Text.svg'), logo: require('../assets/svgs/fixtures/Spartan logo.svg') }
  },
  {
    id: 3,
    matchNo: require('../assets/svgs/fixtures/MATCH 03 Text.svg'),
    team1: { players: ['Babu', 'Abhi'], text: require('../assets/svgs/fixtures/Spartan Text.svg'), logo: require('../assets/svgs/fixtures/Spartan logo.svg') },
    team2: { players: ['Nidhin', 'Mani'], text: require('../assets/svgs/fixtures/Falcons Text.svg'), logo: require('../assets/svgs/fixtures/Falcons logo.svg') }
  },
  {
    id: 4,
    matchNo: require('../assets/svgs/fixtures/MATCH 04 Text.svg'),
    team1: { players: ['Arun', 'Hemanth'], text: require('../assets/svgs/fixtures/Phoenix Text.svg'), logo: require('../assets/svgs/fixtures/Phoenix logo.svg') },
    team2: { players: ['Naveen', 'Loga'], text: require('../assets/svgs/fixtures/Warriors Text.svg'), logo: require('../assets/svgs/fixtures/Warriors logo.svg') }
  },
  {
    id: 5,
    matchNo: require('../assets/svgs/fixtures/MATCH 05 Text.svg'),
    team1: { players: ['Arun', 'Hemanth'], text: require('../assets/svgs/fixtures/Phoenix Text.svg'), logo: require('../assets/svgs/fixtures/Phoenix logo.svg') },
    team2: { players: ['Nidhin', 'Mani'], text: require('../assets/svgs/fixtures/Falcons Text.svg'), logo: require('../assets/svgs/fixtures/Falcons logo.svg') }
  },
  {
    id: 6,
    matchNo: require('../assets/svgs/fixtures/MATCH 06 Text.svg'),
    team1: { players: ['Siva', 'Gokul'], text: require('../assets/svgs/fixtures/Titans Text.svg'), logo: require('../assets/svgs/fixtures/Titans logo.svg') },
    team2: { players: ['Nidhin', 'Mani'], text: require('../assets/svgs/fixtures/Falcons Text.svg'), logo: require('../assets/svgs/fixtures/Falcons logo.svg') }
  },
  {
    id: 7,
    matchNo: require('../assets/svgs/fixtures/MATCH 07 Text.svg'),
    team1: { players: ['Babu', 'Abhi'], text: require('../assets/svgs/fixtures/Spartan Text.svg'), logo: require('../assets/svgs/fixtures/Spartan logo.svg') },
    team2: { players: ['Hari', 'Subbu'], text: require('../assets/svgs/fixtures/Net Ninjas Text.svg'), logo: require('../assets/svgs/fixtures/Net Ninja logo.svg') }
  }
];

const Fixtures = () => {
  const [activeTab, setActiveTab] = React.useState("fixtures");

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.matchItem}>
      <View style={styles.matchNoWrapper}>
         <Image source={item.matchNo} style={styles.matchNoText} contentFit="contain" />
      </View>
      <ImageBackground source={require('../assets/svgs/fixtures/red backdrop card.svg')} style={styles.card} imageStyle={{borderRadius: 10}}>
        
        {/* TEAM 1 (Left) */}
        <View style={styles.teamLeft}>
           <View style={styles.playerWrapperLeft}>
             <Text style={styles.playerName}>{item.team1.players[0]}</Text>
             <Text style={styles.playerName}>{item.team1.players[1]}</Text>
           </View>
           <Image source={item.team1.logo} style={styles.teamLogo} contentFit="contain" />
        </View>

        {/* VS LOGO */}
        <View style={styles.vsWrapper}>
            <Image source={require('../assets/svgs/fixtures/vs logo.svg')} style={styles.vsLogo} contentFit="contain" />
        </View>

        {/* TEAM 2 (Right) */}
        <View style={styles.teamRight}>
           <Image source={item.team2.logo} style={styles.teamLogo} contentFit="contain" />
           <View style={styles.playerWrapperRight}>
             <Text style={styles.playerName}>{item.team2.players[0]}</Text>
             <Text style={styles.playerName}>{item.team2.players[1]}</Text>
           </View>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/svgs/fixtures/Bakcground.svg")}
        style={styles.background}
        resizeMode="cover"
      >
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={{color: "white", padding: 10}}>{"< Back"}</Text>
        </TouchableOpacity>

        {/* HEADER SECTION */}
        <View style={styles.headerContainer}>
          <Image
            source={require("../assets/svgs/fixtures/Winzz font.svg")}
            style={styles.winzzLogo}
            contentFit="contain"
          />
        </View>
        
        {/* FIXTURES TABS & LIST */}
        <View style={styles.listBoard}>
            <ImageBackground source={require("../assets/svgs/fixtures/black background.svg")} style={styles.blackBg} resizeMode="stretch">
                
                {/* Tab Header Overlay */}
                <View style={styles.tabHeader}>
                    <TouchableOpacity onPress={() => setActiveTab("fixtures")} style={styles.tabButton}>
                        <Text style={[styles.tabText, activeTab === "fixtures" && styles.activeTabText]}>FIXTURES</Text>
                        {activeTab === "fixtures" && <View style={styles.activeIndicator} />}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setActiveTab("result")} style={styles.tabButton}>
                        <Text style={[styles.tabText, activeTab === "result" && styles.activeTabText]}>RESULT</Text>
                        {activeTab === "result" && <View style={styles.activeIndicator} />}
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setActiveTab("pointTable")} style={styles.tabButton}>
                        <Text style={[styles.tabText, activeTab === "pointTable" && styles.activeTabText]}>POINT TABLE</Text>
                        {activeTab === "pointTable" && <View style={styles.activeIndicator} />}
                    </TouchableOpacity>
                </View>

                {/* Tab Content */}
                {activeTab === "fixtures" && (
                  <FlatList
                      data={matches}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={renderItem}
                      contentContainerStyle={styles.flatListContent}
                      showsVerticalScrollIndicator={false}
                  />
                )}
                {activeTab === "result" && (
                  <View style={styles.placeholderContainer}>
                    <Text style={styles.placeholderText}>Match Results Data (Coming Soon)</Text>
                  </View>
                )}
                {activeTab === "pointTable" && (
                  <View style={styles.placeholderContainer}>
                    <Text style={styles.placeholderText}>Tournament Point Table (Coming Soon)</Text>
                  </View>
                )}

            </ImageBackground>
        </View>

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
    marginTop: 0,
    marginBottom: 20,
  },
  winzzLogo: {
    width: 250,
    height: 70,
  },
  listBoard: {
    flex: 1,
    width: "95%",
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  blackBg: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingTop: 35,
  },
  tabHeader: {
    position: "absolute",
    top: -4,
    alignSelf: "center",
    width: "95%",
    height: 48,
  },
  titleTextFixture: {
    width: "100%",
    height: "100%",
  },
  flatListContent: {
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 15,
  },
  matchItem: {
    marginBottom: 20,
  },
  matchNoWrapper: {
     alignItems: "center",
     marginBottom: 6,
  },
  matchNoText: {
     width: 80,
     height: 14,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 65,  // Card is short
    paddingHorizontal: 10,
    overflow: "visible", // To allow logos to spill out
  },
  teamLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    zIndex: 10,
  },
  teamRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    zIndex: 10,
  },
  playerWrapperLeft: {
    alignItems: "flex-end",
    marginRight: 8,
  },
  playerWrapperRight: {
    alignItems: "flex-start",
    marginLeft: 8,
  },
  playerName: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase",
    lineHeight: 18,
  },
  teamText: {
    width: 75,
    height: 14,
    marginTop: 2,
  },
  teamLogo: {
    width: 65,
    height: 65,
    // Slightly offset vertically if needed, but flex center handles it
  },
  vsWrapper: {
     marginHorizontal: 15,
     zIndex: 10,
  },
  vsLogo: {
    width: 50,
    height: 50,
  },
  clickableTabs: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
  tabTouch: {
    flex: 1,
    height: "100%",
    // backgroundColor: 'rgba(255,0,0,0.3)', // Debug visualization
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  placeholderText: {
    color: "#fff",
    fontSize: 16,
    opacity: 0.5,
  },
  activeIndicator: {
    position: "absolute",
    bottom: -2,
    alignSelf: "center",
    width: 60,
    height: 3,
    backgroundColor: "#ff3333",
    borderRadius: 2,
    shadowColor: "#ff0000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  }
});

export default Fixtures;
