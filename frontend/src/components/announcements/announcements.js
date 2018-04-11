import React, {Component} from 'react';


class Announcements extends Component {
    state = { announcements: [] }

    componentDidMount() {
        fetch('/announcements')
            .then(res => { return res.json() })
            .then(announcements => this.setState({ announcements }));
    }

    render() {
        return (
            <div className="App">
                <h1>Announcements</h1>
                {this.state.announcements.map(announcements =>
                    <div key={announcements.id}>
                        <h2>{announcements.title}</h2>
                        <p>{announcements.content}</p>
                    </div>
                )}
            </div>
        );
    }
}

export default Announcements;
