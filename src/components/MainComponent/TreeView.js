import React, { Component } from 'react';
import TreeTools from './TreeTools.js';
import Card from './Card.js';

import appData from '../../data.json';
const QDATA = appData.assets;

class TreeView extends Component {
    render() {
        console.log("TreeView");
        console.log(QDATA);
        return (
            <div className="col-9 px-4 py-5 mb-5 ml-0 main-pane">
                <TreeTools />
                <div className="row">
                {
                    QDATA.map((item, index) => (
                        <div className="col" key={index}>
                            {console.log(index)}
                            <Card
                                assetName={QDATA[index].assetName}
                                description={QDATA[index].description}
                                assetid={index}>
                            </Card>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default TreeView;
