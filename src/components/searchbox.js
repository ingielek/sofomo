import React from 'react'
import {form,
        FormGroup,
        ControlLabel,
        FormControl,
        HelpBlock} from 'react-bootstrap'
var createReactClass = require('create-react-class');

const Searchbox = createReactClass({
    getInitialState() {
        return {
            value: '',
        };
    },

    getValidationState() {
        const length = this.state.value.split;
        if (length > 4 ) return 'success';
        else if (length < 4) return 'error';
        return null;
    },

    handleChange(e) {
        this.setState({ value: e.target.value });
    },

    render() {
        return (
            <form>
                <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
                >
                    <ControlLabel>Type in IP or URL</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Validation is based opon IP or URL</HelpBlock>
                </FormGroup>
            </form>
        );
    },
});

export default Searchbox