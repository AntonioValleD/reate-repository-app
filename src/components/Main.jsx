import Constants from "expo-constants"

// React Native components
import { Text, View, StyleSheet } from "react-native"

// App components
import RepositoryList from "./RepositoryList"


const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Rate Repository Apps
      </Text>
      <RepositoryList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  }
})

export default Main