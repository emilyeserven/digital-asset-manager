import React, { Component } from 'react';
import * as Material from 'react-icons/lib/md';

class HubView extends Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <input className="form-control form-control-lg" type="text" placeholder="Search" />
                </div>
                <div className="row d-flex justify-content-center">
                    <ul className="list-inline hub-tools mt-3">
                        <li className="list-inline-item px-2"><Material.MdFolderOpen size="50" /><br />Assets</li>
                        <li className="list-inline-item px-2"><Material.MdRefresh size="50" /><br />Recent</li>
                        <li className="list-inline-item px-2"><Material.MdStarOutline size="50" /><br />Favorites</li>
                        <li className="list-inline-item px-2"><Material.MdFileUpload size="50" /><br />Upload</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default HubView;
