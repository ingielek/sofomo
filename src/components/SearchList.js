import React from 'react'

class PeopleList extends React.Component {
    render(){
        const list = this.props.people.map(
            person => <li>{person}</li>);
        return(
            <ul>{list}</ul>
        )

    }
}

export default PeopleList;