import React from 'react';
import { Line } from 'react-chartjs-2';

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