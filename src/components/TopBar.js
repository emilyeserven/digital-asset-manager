import React, { Component } from 'react';
import * as Material from 'react-icons/lib/md';

class TopBar extends Component {
    constructor(props) {
      super();
    }

    render() {
      return (
        <nav className="navbar fixed-top navbar-expand-md navbar-light justify-content-between bg-light">
            <a className="navbar-brand" href="#">{this.props.barname}</a>
            <div className="temp-nav">
              <ul className="list-inline">
                <li className="list-inline-item px-2"><a onClick={this.setAssetView}>Asset</a></li>
                <li className="list-inline-item px-2"><a onClick={this.setTreeView}>Tree</a></li>
                <li className="list-inline-item px-2"><a onClick={this.setHubView}>Hub</a></li>
                <li className="list-inline-item px-2">Upload</li>
              </ul>
              <span>This view: {this.state.view}</span>
            </div>
            <div className="float-right icon-nav">
                <ul className="list-inline">
                    <li className="list-inline-item px-2"><Material.MdSearch /></li>
                    <li className="list-inline-item px-2"><Material.MdHome /></li>
                    <li className="list-inline-item px-2"><Material.MdFileUpload /></li>
                    <li className="list-inline-item px-2"><Material.MdAccountBox /></li>
                </ul>
            </div>
        </nav>
      )
    }
}

export default TopBar;
