import React, { Component } from 'react';

import SideBarInfo from './SideBarInfo.js';
import SideBarLinks from './SideBarLinks.js';

class SideBar extends Component {
    render() {
      return (
        <div className="sidebar d-flex flex-column justify-content-center">
          <SideBarInfo />
        </div>
      );
    }
}

export default SideBar;
