import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class Card extends Component {
    render() {
        console.log("Card");
        console.log(this.props);
        return (
            <div className="card">
              <img className="card-img-top" src="http://via.placeholder.com/350x450" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{this.props.assetName}</h5>
                <p className="card-text">{this.props.description}</p>
                <Link to={`/asset/${this.props.assetid}`} className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
        )
    }
}

export default Card;
