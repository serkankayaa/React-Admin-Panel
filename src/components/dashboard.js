import React from 'react';
import NavigationBar from './navbar';
import DashboardDefault from '../pages/DashboardDefault';
import DashboardAnalytics from '../pages/DashboardAnalytics';
import Footer from './footer';
import { Route } from 'react-router-dom';
import '../assets/styles/main.css';

export default function Dashboard() {
    return (
        <>
            <div>
                <NavigationBar />
            </div>
            <div className="content">
                <Route exact path="/" component={DashboardDefault} />
                <Route path="/dashboard/default" component={DashboardDefault} />
                <Route path="/dashboard/analytics" component={DashboardAnalytics} />
            </div>
            <div className="footer-props">
                <Footer />
            </div>
        </>
    )
}