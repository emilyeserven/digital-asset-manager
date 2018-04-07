import React, { Component } from 'react';
import AssetTools from './AssetTools.js';
class AssetView extends Component {
    render() {
        return (
            <div className="col-9 px-4 pt-5 ml-0">
                <AssetTools />
                <div className="container text-center my-5 pb-5">
                    <img src="http://via.placeholder.com/500x500" />
                </div>
            </div>
        )
    }
}

export default AssetView;
