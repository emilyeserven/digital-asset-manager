import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';

import * as Material from 'react-icons/lib/md';

import SideBarInfo from './components/SideBar/SideBarInfo.js';
import SideBarLinks from './components/SideBar/SideBarLinks.js';
import SideBarHub from './components/SideBar/SideBarHub.js';

import TreeView from './components/MainComponent/TreeView.js';
import AssetView from './components/MainComponent/AssetView.js';
import HubView from './components/MainComponent/HubView.js';

//import SideBar from './components/SideBar/SideBar.js';
//import MainComponent from './components/MainComponent/MainComponent.js';
//import TopBar from './components/TopBar.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
       view: "hub"
    };

    this.setAssetView = this.setAssetView.bind(this);
    this.setTreeView = this.setTreeView.bind(this);
    this.setHubView = this.setHubView.bind(this);
  };
  setAssetView() {
     this.setState({view: "asset"});
  }
  setTreeView() {
     this.setState({view: "tree"});
  }
  setHubView() {
     this.setState({view: "hub"});
  }
  render() {
    return (
      <div className="App">
        <header>
        <nav className="navbar fixed-top navbar-expand-md navbar-light justify-content-between bg-light">
          <a className="navbar-brand" href="#">SpaceMaker</a>
          <div className="temp-nav">
            <ul className="list-inline">
              <li className="list-inline-item px-2"><a onClick={this.setHubView}>Hub</a></li>
              <li className="list-inline-item px-2"><a onClick={this.setTreeView}>Tree</a></li>
              <li className="list-inline-item px-2"><a onClick={this.setAssetView}>Asset</a></li>
              <li className="list-inline-item px-2">Upload</li>
            </ul>
          </div>
          <div className="float-right">
              <ul className="list-inline">
                  <li className="list-inline-item px-2"><Material.MdSearch /></li>
                  <li className="list-inline-item px-2"><Material.MdHome /></li>
                  <li className="list-inline-item px-2"><Material.MdFileUpload /></li>
                  <li className="list-inline-item px-2"><Material.MdAccountBox /></li>
              </ul>
          </div>
        </nav>
        </header>
        <div className="container-fluid px-0">
          <div className="row mt-5">
            <SideBar view={this.state.view} />
            <MainComponent view={this.state.view} />
          </div>
        </div>
      </div>
    );
  }
}

function SideBar(props) {
  if (props.view == "asset") {
    return <SideBarInfo />;
  } else if (props.view == "tree") {
    return <SideBarLinks />;
  } else if (props.view == "hub") {
    return <SideBarHub />;
  }
}

function MainComponent(props) {
  if (props.view == "asset") {
    return <AssetView />;
  } else if (props.view == "tree") {
    return <TreeView />;
  } else if (props.view == "hub") {
    return <HubView />;
  }
}

export default App;
