import renderer from "react-test-renderer";
import Button from "./Button";

describe("Button component", () => {
  it("renders correctly with default props", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with custom title", () => {
    const tree = renderer.create(<Button title="Custom Title" />).toJSON();
    expect(tree.children[0].children[0]).toBe("Custom Title");
  });
});
