import React from 'react';
import { faShoppingBasket, faEye, faDollarSign, faBox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DashboardDefault() {
    return (
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
    )
}