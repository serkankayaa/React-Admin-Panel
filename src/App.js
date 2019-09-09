import React from 'react';
import SideBar from './components/sidebar';
import Dashboard from './components/dashboard';

export default function App() {
    return (
        <div className="row">
            <div className="col-lg-2 sidebar-props">
                <SideBar />
            </div>
            <div className="col-md-12 col-lg-10 dashboard-props">
                <Dashboard />
            </div>
        </div>
    )
}