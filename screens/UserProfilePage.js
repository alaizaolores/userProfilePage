import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import HeaderProfile from "../components/HeaderProfile";
import ProfileOptionItem from "../components/ProfileOptionItem";

const UserProfilePage = ({ isDarkTheme, setIsDarkTheme }) => {
  const titleColor = isDarkTheme ? "#f5f5f5" : "#1c1c1c";
  const optionBackground = isDarkTheme ? "#1c1c1c" : "white";
  const textColor = isDarkTheme ? "#f5f5f5" : "#1c1c1c";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#1c1c1c" : "#f5f5f5" },
      ]}
    >
      <HeaderProfile isDarkTheme={isDarkTheme} />

      <Text style={[styles.sectionTitle, { color: titleColor }]}>Profile</Text>

      <ProfileOptionItem
        title="Manage User"
        icon={
          isDarkTheme
            ? require("../assets/user (1).png")
            : require("../assets/user (2).png")
        }
        navIcon={
          isDarkTheme
            ? require("../assets/arrow_light.png")
            : require("../assets/arrow_dark.png")
        }
        textColor={textColor}
        iconBackground={optionBackground}
      />

      <Text style={[styles.sectionTitle, { color: titleColor }]}>Settings</Text>

      <ProfileOptionItem
        title="Notification"
        icon={
          isDarkTheme
            ? require("../assets/notif_light.png")
            : require("../assets/notif_dark.png")
        }
        navIcon={
          isDarkTheme
            ? require("../assets/arrow_light.png")
            : require("../assets/arrow_dark.png")
        }
        textColor={textColor}
        iconBackground={optionBackground}
      />

      <ProfileOptionItem
        title="Dark Mode"
        subtitle={isDarkTheme ? "Enabled" : "Disabled"}
        icon={
          isDarkTheme
            ? require("../assets/night-mode_light.png")
            : require("../assets/night-mode_dark.png")
        }
        navIcon={
          isDarkTheme
            ? require("../assets/arrow_light.png")
            : require("../assets/arrow_dark.png")
        }
        onPress={() => setIsDarkTheme(!isDarkTheme)}
        textColor={textColor}
        iconBackground={optionBackground}
      />

      <ProfileOptionItem
        title="Sign Out"
        icon={
          isDarkTheme
            ? require("../assets/logout_light.png")
            : require("../assets/logout_dark.png")
        }
        navIcon={
          isDarkTheme
            ? require("../assets/arrow_light.png")
            : require("../assets/arrow_dark.png")
        }
        textColor={textColor}
        iconBackground={optionBackground}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    marginLeft: 30,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
});

export default UserProfilePage;
