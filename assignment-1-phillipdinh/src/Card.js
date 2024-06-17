import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ show: false });
  };

  render() {
    const { url, caption } = this.props.items;
    return (
      <div>
        {this.state.show && (
          <div className="card">
            <img className="image" src={url} />

            <div className="card-footer">
              <button className="close" onClick={this.handleClick}>
                x
              </button>
              <p className="caption"> {caption} </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Card;
