import React, { Component } from 'react';

import appData from '../../data.json';

const QDATA = appData.assets[0];

class SideBarInfo extends Component {
  render() {
    console.log("appData");
    console.log(appData);
    console.log("QDATA");
    console.log(QDATA);
    return (
        <div className="col-3 pl-4 pr-0">
            <div className="sidebar d-flex flex-column justify-content-center">
            <details>
              <summary>Information</summary>
              <ul>
                <li><b>Status:</b> {QDATA.assetStatus} </li>
                <li><b>File Format:</b> {QDATA.infoGeneral.format} </li>
                <li><b>Image Dimensions:</b> {QDATA.infoType.dimensions} </li>
                <li><b>Resolution:</b> {QDATA.infoType.resolution} </li>
                <li><b>Asset Data Size:</b> {QDATA.infoGeneral.fileSize} </li>
                <li><b>Source:</b> {QDATA.infoGeneral.source} </li>
                <li><b>Notes:</b> {QDATA.infoGeneral.notes} </li>
              </ul>
            </details>
            <details>
              <summary>Relationships</summary>
              <ul>
                <li><b>Tags:</b> ?? </li>
                <li><b>Collections:</b> ?? </li>
              </ul>
            </details>
            <details>
              <summary>License</summary>
              <ul>
                <li><b>Commercial Use:</b> ??</li>
                <li><b>Personal Use:</b> ??</li>
                <li><b>Attribution Needed:</b> ??</li>
                <li><b>Licenses Used:</b> {QDATA.license.numberUsed} of {QDATA.license.numberAvail}</li>
              </ul>
            </details>
            <details>
              <summary>History</summary>
              <ul>
                <li>Events here</li>
              </ul>
            </details>
          </div>
      </div>
    )
  }
}

export default SideBarInfo;
