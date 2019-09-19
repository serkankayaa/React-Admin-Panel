import React, { Component } from 'react';

export default class Appointment extends Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    <p className="appointment-header-props">Appointments</p>
                    <hr/>
                    <div className="daily-appointment-props">
                        <p className="daily-appointment-text">You have a meeting today!</p>
                        <p className="daily-appointment-text-inner">Your next meeting is in 2 hours. Check your <a href="#">schedule</a> to see the details.</p>
                    </div>
                    <div className="appointment-activity-props">
                        <div className="activity-logo"></div>
                        <div className="activity-line"></div>
                        <strong className="activity-text-header">Chat with Carl and Ashley</strong>
                        <p className="activity-text">Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu...</p>
                    </div>
                    <div className="appointment-activity-props">
                        <div className="activity-logo activity-logo-inner"></div>
                        <div className="activity-line"></div>
                        <strong className="activity-text-header">The big launch</strong>
                        <p className="activity-text">Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc...</p>
                    </div>
                    <div className="appointment-activity-props">
                        <div className="activity-logo activity-logo-inner"></div>
                        <div className="activity-line"></div>
                        <strong className="activity-text-header">Coffee break</strong>
                        <p className="activity-text">Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor...</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}