import React from 'react'
import {Row,
    Col,
    Grid} from 'react-bootstrap'

const InfoUserLocation = (props) => (

    <Grid>
        <Row className="show-grid">
            <Col xs={3} md={4} lg={4}>
                <div className="UserLocationPara">
                    <p><strong>IP : </strong>{props.data.ip}</p>
                    <p><strong>Country code : </strong>{props.data.country_code}</p>
                    <p><strong>Country name : </strong>{props.data.country_name}</p>
                    <p><strong>Region code : </strong>{props.data.region_code}</p>
                    <p><strong>Region name : </strong>{props.data.region_name}</p>
                    <p><strong>City : </strong>{props.data.city}</p>
                    <p><strong>Zip Code : </strong>{props.data.zip_code}</p>
                    <p><strong>Time Zone : </strong>{props.data.time_zone}</p>
                    <p><strong>Latitude : </strong>{props.data.latitude}</p>
                    <p><strong>Longitude : </strong>{props.data.longitude}</p>
                    <p><strong>Metro Code : </strong>{props.data.metro_code}</p>
                </div>
            </Col>
        </Row>
    </Grid>
);
export default InfoUserLocation