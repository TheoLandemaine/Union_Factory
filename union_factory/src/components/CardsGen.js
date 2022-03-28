import React from "react";
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
//
// class CardsGen extends React.Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [],
//             isLoaded: false,
//         }
//     }
//     componentDidMount() {
//         fetch('http://localhost:3002/api/get')
//             .then(res => res.json())
//             .then(json => {
//                 this.setState({
//                     isLoaded: true,
//                     items: json,
//                 })
//             });
//     }
//
//   render() {
//       var {isLoaded, items} = this.state;
//       if (!isLoaded) {
//           return <div>Loading...</div>;
//       } else {
//
//           return (
//
//               <>
//                   {items.map(item => (
//                       <div className="card" key={item.a_assoID}>
//                           <div className="card-image">
//                               <img src={item.a_image} alt="association"/>
//                           </div>
//                           <div className="card-text">
//                               <span className="association">{item.a_titre}</span>
//                               <p  className={item.a_categorie}>{item.a_description}</p>
//                               <a className="inc button" href={item.a_lien} target="_blank" rel="noreferrer">
//                                   Cliquez pour visiter
//                               </a>
//                               <i className="heart-filled"><AiFillHeart/></i>
//                               <i className="heart-unfilled" hidden><AiOutlineHeart/></i>
//                           </div>
//                       </div>
//                 ))}
//             </>
//           );
//
//       }
//   }
// }
//
// export default CardsGen;



import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

class CardsGen extends React.Component {
    render() {
        // if (this.state.isLoaded) {
        //     return <div> is loaded</div>
        // }
        // else{
            return (
                // <div>  is not loaded | {this.state.isLoaded}</div>
                <div className="card">
                    <div className="card-image">
                        <img src={this.props.card.a_image} alt="association"/>
                    </div>
                    <div className="card-text">
                        <span className="association">{this.props.card.a_titre}</span>
                        <p className={this.props.card.a_categorie}>{this.props.card.a_description}</p>
                        <a className="inc button" href={this.props.card.a_lien} target="_blank" rel="noreferrer">
                            Cliquez pour visiter
                        </a>
                        <i className="heart-filled"><AiFillHeart/></i>
                        <i className="heart-unfilled" hidden><AiOutlineHeart/></i>
                    </div>
                </div>
            );
        }
    // }

}

export default CardsGen;