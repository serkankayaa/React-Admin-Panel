import React from 'react';
import logo from '../assets/images/sidebar-header.svg';
import { Accordion, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faChartPie, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom'
import '../assets/styles/sidebar.css';

export default function SideBar() {
    return (
        <>
            <div className="sidebar-header">
                <img src={logo} style={{ width: '50px' }} alt="sidebar_logo" />
                <h3 className="header-text">React Panel</h3>
            </div>
            <div className="sidebar-menu">
                <h5 className="sidebar-menu-title">Main</h5>
                <Accordion>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className="parent-menu">
                        <FontAwesomeIcon icon={faHome} color="gray" className="ml-3 mr-3" />
                        <span className="parent-menu-text">Dashboard</span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <div className="child-menu">
                            <Button as={NavLink} activeClassName="selected-sidebar-item" to="/dashboard/default" className="child-menu-item-props"><FontAwesomeIcon icon={faSlidersH} color="gray" className="mr-3" />Default</Button>
                            <Button as={NavLink} activeClassName="selected-sidebar-item" to="/dashboard/analytics" className="child-menu-item-props"><FontAwesomeIcon icon={faChartPie} color="gray" className="mr-3" />Analytics</Button>
                        </div>
                    </Accordion.Collapse>
                </Accordion>
            </div>
        </>
    );
}