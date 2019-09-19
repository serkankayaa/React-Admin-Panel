import React from 'react';
import { faShoppingBasket, faEye, faDollarSign, faBox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LineChart, PieChart, PieChartTable } from '../components/charts';
import DailyFeed from '../components/daily-feed';
import DatePicker from '../components/date-picker';
import Appointment from '../components/appointment';

export default function DashboardDefault() {
    return (
        <React.Fragment>
            <div className="row parent-card-list">
                <div className="card-item">
                    <div className="inner-card-item">
                        <FontAwesomeIcon icon={faShoppingBasket} color="#47BAC1" className="mr-3" size="3x" />
                        <h3>2.562</h3>
                        <p>Sales Today</p>
                    </div>
                </div>
                <div className="card-item">
                    <div className="inner-card-item">
                        <FontAwesomeIcon icon={faEye} color="#fcc100" className="mr-3" size="3x" />
                        <h3>17.212</h3>
                        <p>Visitors Today</p>
                    </div>
                </div>
                <div className="card-item">
                    <div className="inner-card-item">
                        <FontAwesomeIcon icon={faDollarSign} color="#5fc27e" className="mr-3" size="3x" />
                        <h3>$ 24.300</h3>
                        <p>Total Earnings</p>
                    </div>
                </div>
                <div className="card-item">
                    <div className="inner-card-item">
                        <FontAwesomeIcon icon={faBox} color="#f44455" className="mr-3" size="3x" />
                        <h3>43</h3>
                        <p>Pending Orders</p>
                    </div>
                </div>
                <div className="card-item">
                    <div className="inner-card-item">
                        <FontAwesomeIcon icon={faDollarSign} color="#5b7dff" className="mr-3" size="3x" />
                        <h3>$ 18.700</h3>
                        <p>Total Revenue</p>
                    </div>
                </div>
            </div>
            {/* Chart && Daily Feed */}
            <div className="row">
                <div className="col-sm-12 col-md-8 lineChart-props">
                    <p className="lineChart-header-props">Total Revenue</p>
                    <hr />
                    <LineChart />
                </div>
                <div className="col-sm-12 col-md-4 daily-feed-props">
                    <DailyFeed />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-4  datepicker-props">
                    <DatePicker />
                </div>
                <div className="col-sm-12 col-md-4 piechart-props">
                    <PieChart />
                    <hr />
                    <PieChartTable />
                </div>
                <div className="col-sm-12 col-md-4 appointment-props">
                    <Appointment />
                </div>
            </div>
        </React.Fragment>
    )
}