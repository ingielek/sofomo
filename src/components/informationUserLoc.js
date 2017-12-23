import React from 'react'
import {Row,
        Col,
        Grid} from 'react-bootstrap'
const InfoUserLocation = (props) => (

        <Grid>
            <Row className="show-grid">
                <Col xs={3} md={4} lg={4}>
                    <p>{props.data.ip}</p>
                    <p>{props.data.country_code}</p>
                    <p>{props.data.country_name}</p>
                    <p>{props.data.region_code}</p>
                    <p>{props.data.region_name}</p>
                    <p>{props.data.city}</p>
                    <p>{props.data.zip_code}</p>
                    <p>{props.data.time_zone}</p>
                    <p>{props.data.latitude}</p>
                    <p>{props.data.longitude}</p>
                    <p>{props.data.metro_code}</p>
                </Col>
            </Row>
        </Grid>
    );
export default InfoUserLocation
