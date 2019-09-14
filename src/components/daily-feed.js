import React from 'react';

export default class DailyFeed extends React.Component {
    constructor() {
        super();
        this.state = {
            dataset: [{
                user_avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg",
                feed_detail: "Ashley Briggs started following Stacie Hall",
                feed_time: "5m ago",
                feed_day_time: "Today 7:51 pm"
            }]
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="daily-feed-card">
                    <div className="daily-feed-header-props">
                        <p className="daily-feed-header-title">Daily feed</p>
                        <div className="daily-feed-brand">Today</div>
                        <div className="daily-feed-parent">
                            <div className="daily-feed-inner">
                                <img className="img-responsive daily-feed-avatar" src="https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X_400x400.jpg" />
                                <p className="daily-feed-text">Ashley Briggs started following Stacie Hall</p>
                                {/* <p className="daily-feed-time">5m ago</p> */}
                            </div>
                            {/* <p className="daily-feed-daytime">Today 7:51 pm</p> */}
                            <hr />
                            <div className="daily-feed-inner">
                                <img className="img-responsive daily-feed-avatar" src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/75/755f87b22d0cf6f2dacd7e259d4b0023f17d8571_full.jpg" />
                                <p className="daily-feed-text">Chris Wood posted something on Stacie Hall's timeline</p>
                            </div>
                            <hr />
                            <div className="daily-feed-inner">
                                <img className="img-responsive daily-feed-avatar" src="https://pbs.twimg.com/profile_images/1040597620752826368/TUh3IlKA.jpg" />
                                <p className="daily-feed-text">Stacie Hall posted a new blog</p>
                            </div>
                            <hr />
                        </div>
                        <button className="daily-feed-button">Load More</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}