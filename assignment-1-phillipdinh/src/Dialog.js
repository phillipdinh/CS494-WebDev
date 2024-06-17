import React from "react";

function Warning(props) {
  if (!props.warn) {
    return null;
  }

  return <div>You must enter URL and caption!</div>;
}

// Used as reference to handle multiple inputs
// https://www.geeksforgeeks.org/how-to-handle-multiple-input-field-in-react-form-with-a-single-function/

class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { url: "", caption: "", showWarning: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.url === "" || this.state.caption === "") {
      this.setState((state) => ({
        showWarning: true,
      }));
    }
    // Blah
    else {
      this.setState((state) => ({
        showWarning: false,
      }));
      this.props.create(this.state);
      this.props.setIsOn(false);
      this.setState({ url: "", caption: "" });
    }
  }

  handleCancel(event) {
    this.props.setIsOn(false);
    this.setState({ url: "", caption: "" });
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit} onReset={this.handleCancel}>
          <input
            type="text"
            name="url"
            placeholder="Enter Photo URL"
            value={this.state.url}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="caption"
            placeholder="Enter Caption"
            value={this.state.caption}
            onChange={this.handleChange}
          />

          <input type="submit" value="Accept" />
          <input type="reset" value="Cancel"></input>
        </form>

        <Warning warn={this.state.showWarning} />
      </div>
    );
  }
}

export default Dialog;
