import React, { Component } from 'react';

class SideBarInfo extends Component {
  render() {
    return (
        <div className="col-3 pl-4 pr-0">
            <div className="sidebar d-flex flex-column justify-content-center">
            <details>
              <summary>Information</summary>
              <ul>
                <li><b>Status:</b> ?? </li>
                <li><b>File Format:</b> ?? </li>
                <li><b>Image Dimensions:</b> ?? </li>
                <li><b>Resolution:</b> ?? </li>
                <li><b>Asset Data Size:</b> ?? </li>
                <li><b>Tags:</b> ?? </li>
                <li><b>Collections:</b> ?? </li>
                <li><b>Source:</b> ?? </li>
                <li><b>Notes:</b> ?? </li>
              </ul>
            </details>
            <details>
              <summary>Relationships</summary>
              <ul>
                <li>???</li>
              </ul>
            </details>
            <details>
              <summary>License</summary>
              <ul>
                <li>???</li>
              </ul>
            </details>
            <details>
              <summary>History</summary>
              <ul>
                <li>???</li>
              </ul>
            </details>
          </div>
      </div>
    )
  }
}

export default SideBarInfo;
