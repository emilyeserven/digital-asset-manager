import React, { Component } from 'react';
import * as Material from 'react-icons/lib/md';
import InnerNav from './InnerNav.js';

class AssetTools extends Component {
    render() {
        return (
            <div>
                <InnerNav />
                <div className="d-flex flex-row-reverse">
                    <ul className="list-inline asset-tools">
                        <li className="list-inline-item px-2"><Material.MdEdit size="30" /><br />Edit</li>
                        <li className="list-inline-item px-2"><Material.MdFileDownload size="30" /><br />Download</li>
                        <li className="list-inline-item px-2"><Material.MdAdd size="30" /><br />Add to</li>
                        <li className="list-inline-item px-2"><Material.MdShare size="30" /><br />Share</li>
                        <li className="list-inline-item px-2"><Material.MdCompareArrows size="30" /><br />Move</li>
                        <li className="list-inline-item px-2"><Material.MdDelete size="30" /><br />Delete</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AssetTools;
