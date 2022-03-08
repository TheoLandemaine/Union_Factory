import React from "react";

class CardsGen extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <img src={this.props.card.img} alt="association" />
        </div>
        <div className="card-text">
          <div id="TitreCard">
            <span className="association">{this.props.card.title}</span>
          </div>
          <div id="DescriptionCard">
            <p className={this.props.card.categorie}>{this.props.card.text}</p>
          </div>
          </div>
          <div id="ButtonCard">
            <a className="inc button" href={this.props.card.link} target="_blank" rel="noreferrer">
              Cliquez pour visiter
            </a>
          </div>
  
        
      </div>
    );
  }
}

export default CardsGen;