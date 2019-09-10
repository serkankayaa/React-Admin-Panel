import React from 'react';
import { Navbar, Form, FormControl, Dropdown } from 'react-bootstrap';
import { faSearch, faBell, faEnvelope, faUserAstronaut, faChartPie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UKflag from '../assets/images/uk-flag.png';
import SPflag from '../assets/images/spanish-flag.png';
import TRflag from '../assets/images/turkish-flag.png';
import UserAvatar from '../assets/images/user-profile.jpeg';
import '../assets/styles/navbar.css';

export default function NavigationBar() {
    return (
        <>
            <Navbar expand="lg" className="navbar-prop">
                <Navbar.Brand className="navbar-brand-prop" href="#home">Brand link</Navbar.Brand>
                <Form inline className="navbar-search-props">
                    <FormControl type="text" placeholder="search in panel..." className="mr-sm-2 navbar-search-prop" />
                    <FontAwesomeIcon icon={faSearch} color="#ccb5b5e6" style={{ cursor: 'pointer' }} ></FontAwesomeIcon>
                </Form>
                <div className="navbar-right-props">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-notification" className="dropdown-options-prop">
                            <FontAwesomeIcon icon={faBell} color="#ccb5b5e6" style={{ cursor: 'pointer' }}></FontAwesomeIcon>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1"><img src={SPflag} className="dropdown-image-prop mr-2" alt="spanish_flag" /><span className="dropdown-item-prop">Spanish</span></Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><img src={TRflag} className="dropdown-image-prop mr-2" alt="turkish_flag" /><span className="dropdown-item-prop">Turkish</span></Dropdown.Item>
                            <Dropdown.Item href="#/action-3"><img src={UKflag} className="dropdown-image-prop mr-2" alt="Us_flag" /><span className="dropdown-item-prop">English</span></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-messages" className="dropdown-options-prop">
                            <FontAwesomeIcon icon={faEnvelope} color="#ccb5b5e6" style={{ cursor: 'pointer' }}></FontAwesomeIcon>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1"><img src={SPflag} className="dropdown-image-prop mr-2" alt="spanish_flag" /><span className="dropdown-item-prop">Spanish</span></Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><img src={TRflag} className="dropdown-image-prop mr-2" alt="turkish_flag" /><span className="dropdown-item-prop">Turkish</span></Dropdown.Item>
                            <Dropdown.Item href="#/action-3"><img src={UKflag} className="dropdown-image-prop mr-2" alt="Us_flag" /><span className="dropdown-item-prop">English</span></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-flags" className="dropdown-options-prop">
                            <img className="dropdown-image-prop" src={UKflag} alt="uk_flag" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1"><img src={SPflag} className="dropdown-image-prop mr-2" alt="spanish_flag" /><span className="dropdown-item-prop">Spanish</span></Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><img src={TRflag} className="dropdown-image-prop mr-2" alt="turkish_flag" /><span className="dropdown-item-prop">Turkish</span></Dropdown.Item>
                            <Dropdown.Item href="#/action-3"><img src={UKflag} className="dropdown-image-prop mr-2" alt="Us_flag" /><span className="dropdown-item-prop">English</span></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-profile" className="dropdown-options-prop">
                            <img src={UserAvatar} className="user-avatar-prop mr-2" alt="user_avatar" /><span className="ml-2" style={{ color: 'gray' }}>Safa Elmali</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1"><FontAwesomeIcon color="gray" icon={faUserAstronaut} className="mr-2" /><span className="dropdown-item-prop">Profile</span></Dropdown.Item>
                            <Dropdown.Item href="#/action-2"><FontAwesomeIcon color="gray" icon={faChartPie} className="mr-2" /><span className="dropdown-item-prop">Analytics</span></Dropdown.Item>
                            <hr />
                            <Dropdown.Item href="#/action-3"><span className="dropdown-item-prop">Settings & Privacy</span></Dropdown.Item>
                            <Dropdown.Item href="#/action-4"><span className="dropdown-item-prop">Help</span></Dropdown.Item>
                            <Dropdown.Item href="#/action-5"><span className="dropdown-item-prop">Sign out</span></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Navbar>
        </>
    )
}