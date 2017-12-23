import React from 'react'
import {ButtonToolbar,
        Button} from 'react-bootstrap'

const SearchButton = () => (
    <ButtonToolbar>
        <Button onClick={this.props.onClick} type="submit">Search!</Button>
    </ButtonToolbar>
);

export default SearchButton