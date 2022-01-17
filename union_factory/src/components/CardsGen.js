import React from "react";

class CardsGen extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img src={this.props.card.img} alt="image" />
        </div>
        <div className="card-text">
          <span className="association">{this.props.card.title}</span>
          <p>{this.props.card.text}</p>
          <a className="inc button" href={this.props.card.link} target="_blank">
            Cliquez pour visiter
          </a>
        </div>
      </div>
    );
  }
}

export default CardsGen;