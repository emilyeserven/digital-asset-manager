import React, { Component } from 'react';
import AssetTools from './AssetTools.js';

import appData from '../../data.json';
const QDATA = appData.assets;

class AssetView extends Component {
    render() {
        console.log("AssetView");
        const QDATAi = QDATA[this.props.match.params.id];
        return (
            <div className="col-9 px-4 pt-5 ml-0">
                <AssetTools data={QDATAi}/>
                <div className="container text-center my-5 pb-5">
                    <img src={QDATAi.previewLg} />
                </div>
            </div>
        )
    }
}

export default AssetView;
