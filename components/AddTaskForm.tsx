import * as React from "react";
import { TextInput, View, Button } from "react-native";

interface AddTaskFormProps {
  handleInputChange(text: string): void;
  handleAdd(): void;
  value: string;
}

function AddTaskForm(props: AddTaskFormProps) {
  return (
    <View testID="add-task-container">
      <TextInput
        placeholder="enter a new task"
        onChangeText={props.handleInputChange}
        value={props.value}
      />
      <Button title="add" onPress={props.handleAdd} />
    </View>
  );
}

export default AddTaskForm;
