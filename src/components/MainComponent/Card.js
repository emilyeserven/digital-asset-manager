import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("Card");
        console.log(this.props);
        return (
            <div className="card">
              <img className="card-img-top" src="http://via.placeholder.com/350x450" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{this.props.assetName}</h5>
                <p className="card-text">{this.props.description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
        )
    }
}

export default Card;
