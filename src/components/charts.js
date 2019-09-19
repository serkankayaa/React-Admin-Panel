import React from 'react';
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';

export class LineChart extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {
                labels: ["1", "2", "3", "4", "5"],
                datasets: [
                    {
                        label: "Videos Mades",
                        backgroundColor: "rgba(255,0,255,0.75)",
                        data: [4, 5, 1, 10, 32, 2, 22]
                    },
                    {
                        label: "Subscriptions",
                        backgroundColor: "rgba(0,255,0,0.75)",
                        data: [14, 15, 21, 0, 12, 45, 22]
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div style={{ position: 'relative', backgroundColor: '#fff', marginBottom: '20px' }}>
                <Line
                    options={{
                        responsive: true
                    }}
                    data={this.state.data}
                />
            </div>
        )
    }
}

export class PieChart extends React.Component {
    constructor() {
        super();
        this.state = {
            data: {
                labels: ["Direct", "Search Engines", "E-mail", "Other"],
                datasets: [
                    {
                        data: [260, 54, 125, 146],
                        backgroundColor: ['#47BAC1', '#FF1A30', '#FCC100', "#354052"]
                    },
                ]
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <p className="piechart-header-props">Weekly Sales</p>
                <hr />
                <Pie data={this.state.data}
                    type="pie"
                    options={{
                        responsive: true
                    }}
                />
            </React.Fragment>
        )
    }
}

export function PieChartTable() {
    return (
        <table>
            <tr>
                <th>Source</th>
                <th>Revenue</th>
                <th>Value</th>
            </tr>
            <tr>
                <td>Direct</td>
                <td>$ 2602</td>
                <td>+43</td>
            </tr>
            <tr>
                <td>Affiliate</td>
                <td>$ 2602</td>
                <td>+13%</td>
            </tr>
            <tr>
                <td>E-mail</td>
                <td>$ 541</td>
                <td>+24%</td>
            </tr>
            <tr>
                <td>Other</td>
                <td>$ 1465</td>
                <td>+11%</td>
            </tr>
        </table>
    )
}