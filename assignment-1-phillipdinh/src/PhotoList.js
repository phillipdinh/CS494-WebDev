import React from "react";
import Dialog from "./Dialog";
import Card from "./Card";

// Used as reference to create list of components
// https://www.geeksforgeeks.org/how-to-handle-multiple-input-field-in-react-form-with-a-single-function/
class PhotoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
    this.createCard = this.createCard.bind(this);
    this.setIsOn = this.setIsOn.bind(this);
  }

  createCard(items) {
    const newCard = { ...items };
    this.setState({ cards: [newCard, ...this.state.cards] });
  }

  renderCards() {
    return this.state.cards.map((card) => <Card key={card.url} items={card} />);
  }

  setIsOn = (show) => {
    this.props.setIsOn(show);
  };

  render() {
    return (
      <div>
        <div className="leftColumn">
          {this.props.isOn && (
            <Dialog create={this.createCard} setIsOn={this.setIsOn} />
          )}
        </div>
        <div className="rightColumn">{this.renderCards()}</div>
      </div>
    );
  }
}

export default PhotoList;
