import * as React from "react";
import * as renderer from "react-test-renderer";
import { Text } from "react-native";
import App from "./App";

describe("App", () => {
  const app = renderer.create(<App />);
  it("can be created", () => {
    expect(app).toBeTruthy();
  });
  it("renders an add task container", () => {
    const addTaskContainer = app.toJSON().children[0];
    expect(addTaskContainer["props"].testID).toEqual("add-task-container");
  });
});
