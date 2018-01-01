import React from 'react'

class SearchList extends React.Component {
    render(){
        return(
            <div>
                <p className="SearchListPara">List of searched websites or IP :</p>
            <ul className="listSearched"><strong>{this.props.data}</strong></ul>
            </div>
        )

    }
}

export default SearchList;