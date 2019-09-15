import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import AddTaskForm from "./components/AddTaskForm";

interface AppState {
  text: string;
  tasks: Array<string>;
}

class App extends React.Component<AppState, {}> {
  state: AppState = {
    text: "",
    tasks: []
  };

  handleInputChange = text => {
    this.setState({ text });
  };

  handleAdd = () => {
    const tasks: Array<string> = [...this.state.tasks, this.state.text];
    this.setState({ tasks }, () => {
      const text: string = "";
      this.setState({ text });
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <AddTaskForm
          value={this.state.text}
          handleInputChange={this.handleInputChange}
          handleAdd={this.handleAdd}
        />
        {this.state.tasks.map((task, id) => (
          <View key={id}>
            <Text>{task}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
