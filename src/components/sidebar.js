import React from 'react';
import logo from '../assets/images/sidebar-header.svg';
import '../assets/styles/sidebar.css';


export default function SideBar() {
    return (
        <div className="sidebar-props">
            <div className="sidebar-header">
                <img src={logo} style={{ width: '55px' }} />
                <p className="header-text pb-0">React Panel</p>
            </div>
            <div className="sidebar-menu-context">
                <p></p>
            </div>
        </div>
    );
}