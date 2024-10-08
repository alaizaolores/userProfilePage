import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

const HeaderProfile = ({ isDarkTheme }) => {
  const textColor = isDarkTheme ? "#f5f5f5" : "#1c1c1c";
  const borderColor = isDarkTheme ? "darkblue" : "darkblue";
  const backgroundColor = isDarkTheme ? "#1c1c1c" : "#007bff"; // Set blue color

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bg.gif")}
        style={styles.backgroundImage}
      >
        <View style={styles.avatarWrapper}>
          <Image
            source={require("../assets/profile.png")}
            style={[styles.avatar, { borderColor }]}
          />
          <Text style={[styles.name, { color: textColor }]}>
            Alaiza Rose Olores
          </Text>
          <Text style={[styles.joinedStatus, { color: textColor }]}>
          ⭐ Joined a year ago
          </Text>
        </View>

        {/* Stats added inside the header */}
        <View style={styles.statsWrapper}>
          <View style={[styles.statBox, { backgroundColor }]}>
            <Text style={[styles.statsText, { color: "#fff" }]}>
              28 Repositories
            </Text>
          </View>
          <View style={[styles.statBox, { backgroundColor }]}>
            <Text style={[styles.statsText, { color: "#fff" }]}>
              998 followers
            </Text>
          </View>
          <View style={[styles.statBox, { backgroundColor }]}>
            <Text style={[styles.statsText, { color: "#fff" }]}>
              18 following
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  backgroundImage: {
    width: "100%",
    height: 300, // Increased height to fit avatar, name, and stats
  },
  avatarWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20, // Slight space at the top
    borderColor: "blue",
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 75,
    borderWidth: 4,
   
    top: 25,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10, // Margin between avatar and name
    top: 15,
   
  },
  joinedStatus: {
    fontSize: 14,
    marginTop: 4, // Slight space between name and status
    top: 15
  },
  statsWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30, // Adjusted margin to move the stats below the name and status
    paddingHorizontal: 20, // Padding to balance text alignment
  },
  statBox: {
    paddingVertical: 10, // Vertical padding inside the blue box
    paddingHorizontal: 10, // Horizontal padding inside the blue box
    borderRadius: 10, // Rounded corners for the box

  },
  statsText: {
    fontSize: 15, // Slightly larger font size
    fontWeight: "600", // Make it bold to stand out
  },
});

export default HeaderProfile;
