import React, { Component } from 'react';

class SideBarLinks extends Component {
  render() {
    return (
        <div className="col-3">
          <div className="sidebar d-flex flex-column justify-content-center pl-4 pr-0">
            <ul>
                <li>Images</li>
                <li>Word</li>
                <li>PDFs</li>
                <li>Videos</li>
                <li>PowerPoints</li>
                <li>Audio</li>
                <li>Font</li>
                <li>Graphics</li>
                <li>+ Add</li>
            </ul>
          </div>
        </div>
    );
  }
}

export default SideBarLinks;
