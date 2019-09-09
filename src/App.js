import React from 'react';
import SideBar from './components/sidebar';

export default function App() {
    return (
        <div className="row">
            <div className="col-md-2 pr-0">
                <SideBar />
            </div>
            <div className="col-md-10 pl-0">
                <h2>Dashboard Side</h2>
            </div>
        </div>
    );
}