import React, { Component } from 'react';
import * as Material from 'react-icons/lib/md';
import InnerNav from './InnerNav.js';

class TreeTools extends Component {
    render() {
        return (
            <div>
                <InnerNav />
                <div className="d-flex justify-content-between pb-4">
                    <div>
                        <span>Filter <Material.MdArrowDropDown /></span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>Sort by <Material.MdArrowDropDown /></span>
                    </div>
                    <div>
                        <a className="btn btn-outline-secondary">Edit</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a className="btn btn-outline-primary">Create</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default TreeTools;
