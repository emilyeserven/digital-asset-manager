import React, { Component } from 'react';
import TreeTools from './TreeTools.js';
import Card from './Card.js';

class TreeView extends Component {
    render() {
        return (
            <div className="col-9 px-4 pt-5 ml-0">
                <TreeTools />
                <div className="row">
                    <div className="col">
                        <Card />
                    </div>
                    <div className="col">
                        <Card />
                    </div>
                    <div className="col">
                        <Card />
                    </div>
                    <div className="col">
                        <Card />
                    </div>
                </div>
            </div>
        )
    }
}

export default TreeView;
