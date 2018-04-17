import React, { Component } from 'react';
import * as Material from 'react-icons/lib/md';
import InnerNav from './InnerNav.js';

class TreeTools extends Component {
    render() {
        return (
            <div>
                <InnerNav />
                <div className="d-flex justify-content-between pb-4">
                    <div className="form-inline">
                        <select defaultValue="Filter" className="form-control" id="exampleFormControlSelect1">
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <select defaultValue="Sort by" className="form-control" id="exampleFormControlSelect2">
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
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
