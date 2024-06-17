import React from "react";
import PhotoList from "./PhotoList";

class OpenDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.state = { name: "" };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.setIsOn = this.setIsOn.bind(this);
  }

  handleClick = () => {
    this.setState((state) => ({
      isOn: !state.isOn,
    }));
  };

  // Used as reference to allow child components to set isOn
  // https://www.geeksforgeeks.org/how-to-set-parent-state-from-children-component-in-reactjs/
  setIsOn = (show) => {
    this.setState({ isOn: show });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Open photo entry dialog</button>
        <PhotoList isOn={this.state.isOn} setIsOn={this.setIsOn} />
      </div>
    );
  }
}

export default OpenDialog;
