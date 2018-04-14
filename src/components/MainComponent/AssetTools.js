import React, { Component } from 'react';
import * as Material from 'react-icons/lib/md';
import InnerNav from './InnerNav.js';

class AssetTools extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log("AssetTools");
        console.log(this.props);
        return (
            <div>
                <InnerNav />
                <div className="d-flex flex-row-reverse">
                    <ul className="list-inline asset-tools">
                        <li className="list-inline-item px-2"><a href="#"><Material.MdEdit size="30" /></a></li>
                        <li className="list-inline-item px-2"><a href="#"><Material.MdFileDownload size="30" /></a></li>
                        <li className="list-inline-item px-2"><a href="#"><Material.MdAdd size="30" /></a></li>
                        <li className="list-inline-item px-2"><a href="#"><Material.MdShare size="30" /></a></li>
                        <li className="list-inline-item px-2"><a href="#"><Material.MdCompareArrows size="30" /></a></li>
                        <li className="list-inline-item px-2"><a href="#"><Material.MdDelete size="30" /></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AssetTools;
