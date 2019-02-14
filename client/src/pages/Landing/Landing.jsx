import React from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap'
import './landing.css'

const Landing = () => {
        return (
            <Grid id = "landingDiv">
                <Row>
                    <Col xs={12}>
                        <h3 id = "landingHeading">
                            Automate Your Walmart Online Grocery Shopping!
                        </h3>
                    </Col>

                </Row>
                <Row>
                    <Col id = "landingTextDiv" xs={12}>
                        <p id = "landingText">
                            Takes the hassle out of walmart grocery shopping! No more manually searching and
                            adding every single ingredient.
                        </p>
                    </Col>
                </Row>
                <Row >
                    <Col className = {"buttonDiv"} xs={12}>  
                            <Button   children="Sign Up!" />
                    </Col>
                    <Col className = {"buttonDiv"} xs={12}>  
                            <Button  children="Login" />
                    </Col>
                    <Col className = {"buttonDiv"} xs={12}>  
                            <Button  children="Demo" />
                    </Col>
                    
                </Row>
            </Grid>
        )
    }


export default Landing;