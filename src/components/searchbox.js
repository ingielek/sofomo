import React from 'react'
import {form,
        FormGroup,
        ControlLabel,
        FormControl,
        HelpBlock,
        Row,
        Grid,
        Col,
        } from 'react-bootstrap'
import SearchButton from './searchbutton'

const createReactClass = require('create-react-class');

const Searchbox = createReactClass({
    getInitialState() {
        return {
            value: '',
        };
    },

    getValidationState() {
        const val = this.state.value;
        var ipRegex = new RegExp('\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b');
        var urlValidator = require('valid-url');
        if(val == 0)
            return null;
        else if(urlValidator.isWebUri(val) || ipRegex.test(val))
            return 'success';
        else
            return 'error';

    },
    handleChange(e) {
        this.setState({ value: e.target.value });
    },

    render() {
        return (
            <div>
            <Grid>
                <Row className="show-grid">
                    <Col xs={3} md={4} lg={5}>
                    <ControlLabel>Type in IP or URL</ControlLabel>
                </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={7} md={8} lg={6}>
                    <form>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState()}
                        >
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="Enter IP or URL"
                                onChange={this.handleChange}
                            />
                            <FormControl.Feedback />
                            <HelpBlock>Validation is based upon IP or URL</HelpBlock>
                        </FormGroup>
                    </form>
                    </Col>
                    <Col xs={2} md={3} lg={1}>
                        <SearchButton/>
                    </Col>
                </Row>
            </Grid>
            </div>

        );
    },
});

export default Searchbox
