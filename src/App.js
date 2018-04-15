import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import {Switch, Route, Link} from 'react-router-dom';
import './App.css';
import './bootstrap.css';

import * as Material from 'react-icons/lib/md';

// import appData from './data.json';

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
          <Link to={"/"} className="navbar-brand">SpaceMaker</Link>
          <div className="temp-nav">
            <ul className="list-inline">
              <li className="list-inline-item px-2"><Link to="/">Hub</Link></li>
              <li className="list-inline-item px-2"><Link to="/tree">Tree</Link></li>
              <li className="list-inline-item px-2">
                <Popup trigger={<a>Upload</a>} modal closeOnDocumentClick>
                  {close => (
                    <div className="py-3 px-5 modalbox">
                      <div className="text-center">
                        <h4>Drop files to instantly upload them!</h4>
                      </div>
                      <div className="uploadholder mt-4">
                        <div className="uploadbox">
                          <Material.MdFileUpload size="75" color="#cfcece"/>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mt-5">
                        <a class="btn btn-outline-light" onClick={close}>Close</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a class="btn btn-outline-secondary" onClick={close}>Finish</a>
                      </div>
                    </div>
                  )}
                </Popup></li>
            </ul>
          </div>
          <div className="float-right icon-nav">
              <ul className="list-inline">
                  <li className="list-inline-item px-2"><a href="#"><Material.MdSearch /></a></li>
                  <li className="list-inline-item px-2"><a href="#"><Material.MdHome /></a></li>
                  <li className="list-inline-item px-2"><a href="#"><Material.MdFileUpload /></a></li>
                  <li className="list-inline-item px-2"><a href="#"><Material.MdAccountBox /></a></li>
              </ul>
          </div>
        </nav>
        </header>
        <div className="container-fluid px-0">
          <div className="row mt-5">
            <Switch>
              <Route exact path='/' component={SideBarHub} />
              <Route exact path='/tree' component={SideBarLinks} />
              <Route exact path='/asset/:id' component={SideBarInfo} />
            </Switch>
            {/*<SideBar view={this.state.view} />*/}
            {/*<MainComponent view={this.state.view} />*/}
            <Switch>
              <Route exact path='/' component={HubView} />
              <Route exact path='/tree' component={TreeView} />
              <Route exact path='/asset/:id' component={AssetView} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
/*
function SideBar(props) {
  if (props.view == "asset") {
    return <SideBarInfo />;
  } else if (props.view == "tree") {
    return <SideBarLinks />;
  } else if (props.view == "hub") {
    return <SideBarHub />;
  }
}
*/
/*
function MainComponent(props) {
  if (props.view == "asset") {
    return <AssetView />;
  } else if (props.view == "tree") {
    return <TreeView />;
  } else if (props.view == "hub") {
    return <HubView />;
  }
}
*/
export default App;
