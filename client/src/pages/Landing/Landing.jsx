import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import './landing.css'
import photo from "../../utils/images/landingPageImage.png"

const Landing = () => {
        return (
            <Grid id = "landingDiv" style = {{minWidth: "100vw", minHeight: "100vh",background: "#E3E3E3",textAlign: "center"}}>
                <Row style = {{marginTop: "80px"}}>
                    <Col  xs={6} sm= {6}>
                        <img alt = "robot checking out groceries" src = {photo} style = {{width: "80%",height: "auto",}}/>
                    </Col>
                    <Col id = "landingWords"style = {{marginTop: "40px"}}xs={6} sm = {6}>
                        <h3 id = "landingHeading">
                            Automate Your Walmart Online Grocery Shopping!
                        </h3>
                        <h5 id = "landingText" >Create recipes and add the ingredients to your grocery.walmart account!</h5>
                        <button style = {{marginRight: "15px"}}className = "myBtn" children="Demo" />
                        <button className = "myBtn"  children="Sign Up/Login" />
                    </Col>
                </Row>
            </Grid>
        )
    }


export default Landing;