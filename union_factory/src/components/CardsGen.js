import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

class CardsGen extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img src={this.props.card.img} alt="association" />
        </div>
        <div className="card-text">
          <span className="association">{this.props.card.title}</span>
          <p className={this.props.card.categorie}>{this.props.card.text}</p>
          <a className="inc button" href={this.props.card.link} target="_blank" rel="noreferrer">
            Cliquez pour visiter
          </a>
            <i className="heart-filled"><AiFillHeart /></i>
            <i className="heart-unfilled" hidden><AiOutlineHeart /></i>
        </div>
      </div>
    );
  }
}

export default CardsGen;

console.log('je suis ton pere');
