import * as React from 'react';
import { StyleSheet, Text, View } from "react-native";

class App extends React.Component<{}, {}> {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
      }
    });
    return (
      <View style={styles.container}>
        <Text>fuck the poilice!!</Text>
      </View>
    );
  }
}

export default App;
