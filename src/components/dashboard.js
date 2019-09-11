import React from 'react';
import NavigationBar from './navbar';
import DashboardDefault from '../pages/DashboardDefault';
import DashboardAnalytics from '../pages/DashboardAnalytics';
import { Route } from 'react-router-dom';
import '../assets/styles/main.css';

export default function Dashboard() {
    return (
        <>
            <div>
                <NavigationBar />
            </div>
            <div className="content">
                <Route path="/dashboard/default" component={DashboardDefault} />
                <Route path="/dashboard/analytics" component={DashboardAnalytics} />
            </div>
        </>
    )
}