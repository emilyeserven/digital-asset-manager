import React, { Component } from 'react';
import * as Material from 'react-icons/lib/md';

class InnerNav extends Component {
    render() {
        return (
            <div className="pb-3">
                <p>&lt; Artificial &lt; Path</p>
                <div className="innernav-icons">
                    <Material.MdArrowBack />&nbsp;&nbsp;<Material.MdArrowForward />
                </div>
            </div>
        )
    }
}

export default InnerNav;
