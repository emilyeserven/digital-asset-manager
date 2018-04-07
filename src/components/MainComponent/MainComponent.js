import React, { Component } from 'react';


import InnerNav from './InnerNav.js';
import AssetTools from './AssetTools.js';

import TreeView from './TreeView.js';
import AssetView from './AssetView.js';

class MainComponent extends Component {
    render() {
      return (
        <div>
            <InnerNav />
            <AssetTools />
            <div className="container">
                <AssetView />
            </div>
        </div>
      );
    }
}

export default MainComponent;
