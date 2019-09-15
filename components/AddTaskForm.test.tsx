import * as React from "react";
import * as renderer from "react-test-renderer";
import AddTaskForm from "./AddTaskForm";

let tasks: Array<string> = [];
const handleAddTask = () => {
  const result: Array<string> = [input, ...tasks];
  tasks = result;
};

let input: string = "";
const handleChange = (text: string) => {
  input = text;
};

describe("AddTaskForm", () => {
  const addTaskForm = renderer.create(
    <AddTaskForm
      value={input}
      handleInputChange={handleChange}
      handleAdd={handleAddTask}
    />
  );

  it("can be created", () => {
    expect(addTaskForm).toBeTruthy();
  });

  it("should render a text input with placeholder", () => {
    const addTaskInputText = addTaskForm.toJSON().children[0];
    expect(addTaskInputText["props"].placeholder).toEqual("enter a new task");
  });

  it("should require value and on change functions", () => {
    const componentTextInput = addTaskForm.toJSON().children[0];
    componentTextInput["props"].onChangeText("changed!");
    expect(input).toEqual("changed!");
  });
});
