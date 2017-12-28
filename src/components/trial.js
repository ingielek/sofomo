import React from 'react';
import axios from 'axios'
import InfoUserLocation from './InformationUserLocation'

class Searchy extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            location: [],
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.get('http://freegeoip.net/json/' + this.state.value)
            .then(response => {
                this.setState({
                    location: response.data
                });
            })
            .catch(error => {
                console.log("Error", error)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" onSubmit={this.handleSubmit}/>
                </form>
                <InfoUserLocation data={this.state.location}/>
            </div>

        );
    }


}

export default Searchy