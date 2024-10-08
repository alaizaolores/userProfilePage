import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import UserProfilePage from "./screens/UserProfilePage";

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDarkTheme ? "#1c1c1c" : "#f5f5f5" },
      ]}
    >
      <UserProfilePage
        isDarkTheme={isDarkTheme}
        setIsDarkTheme={setIsDarkTheme}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
