import React, { Component } from 'react';

import appData from '../../data.json';
const QDATA = appData.assets;

class SideBarInfo extends Component {
  render() {
    console.log("appData");
    console.log(appData);
    console.log("QDATA");
    console.log(QDATA);
    const QDATAi = QDATA[this.props.match.params.id];
    return (
        <div className="col-3 pl-4 pr-0">
            <div className="sidebar d-flex flex-column justify-content-center">
            <details open>
              <summary>Information</summary>
              <ul>
                <li><b>Name:</b> {QDATAi.assetName} </li>
                <li><b>Description:</b> {QDATAi.description} </li>
                <li><b>Status:</b> {QDATAi.status} </li>
                <li><b>File Format:</b> {QDATAi.infoGeneral.format} </li>
                <li><b>Image Dimensions:</b> {QDATAi.infoType.dimensions} </li>
                <li><b>Resolution:</b> {QDATAi.infoType.resolution} </li>
                <li><b>Asset Data Size:</b> {QDATAi.infoGeneral.fileSize} </li>
                <li><b>Source:</b> <a href={QDATAi.infoGeneral.source} target="blank">Link Here</a></li>
                <li><b>Notes:</b> {QDATAi.infoGeneral.notes} </li>
              </ul>
            </details>
            <details>
              <summary>Relationships</summary>
              <ul>
                <li><b>Tags: </b>
                {QDATAi.relationships.tags.map((tag, i) => <React.Fragment key={i}>
                  {!!i && ", "}
                  {tag}
                  </React.Fragment>)
                }</li>
                <li><b>Collections: </b>
                {QDATAi.relationships.collections.map((col, i) => <React.Fragment key={i}>
                  {!!i && ", "}
                  {col}
                  </React.Fragment>)
                }</li>
              </ul>
            </details>
            <details>
              <summary>License</summary>
              <ul>
                <li><b>Commercial Use:</b> {QDATAi.license.commercialUse ? "Yes" : "No"}</li>
                <li><b>Personal Use:</b> {QDATAi.license.personalUse ? "Yes" : "No"}</li>
                <li><b>Attribution Needed:</b> {QDATAi.license.attributionNeeded ? "Yes" : "No"}</li>
                <li><b>Licenses Used:</b> {QDATAi.license.numberUsed} of {QDATAi.license.numberAvail}</li>
              </ul>
            </details>
            <details>
              <summary>History</summary>
              <ul>
                {QDATAi.history.events.map((event, i) => <li key={i}>
                  {event}
                  </li>)
                }
              </ul>
            </details>
          </div>
      </div>
    )
  }
}

export default SideBarInfo;
