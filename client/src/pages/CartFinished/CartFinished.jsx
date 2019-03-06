import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap'
import photo from "../../utils/images/cartFinishedImage.jpg"
class CartFinished extends Component {    
    render() {
        let h5
        if(this.props.user.user === "demo"){
            h5 = <div>
                <h5 id = "landingText" >Login into <a href = "https://grocery.walmart.com/">grocery.walmart.com</a> to see your cart!</h5>
                <p>Username: gokartdemo@gmail.com, Password: gokart</p>
                </div>
        } else {
            h5 = <h5 id = "landingText" >Login into your walmart account to see the changes!</h5>
        }
        return (
            <Grid id = "landingDiv" style = {{minWidth: "100vw", minHeight: "100vh",background: "#78C2C3",textAlign: "center"}}>
                <Row style = {{marginTop: "80px"}}>
                    <Col  xs={6} sm= {6}>
                        <img alt = "robot checking out groceries" src = {photo} style = {{width: "80%",height: "auto",}}/>
                    </Col>
                    <Col id = "landingWords"style = {{marginTop: "40px"}}xs={6} sm = {6}>
                        <h3 id = "landingHeading">
                            Cart Updated!
                        </h3>
                        {h5}
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default CartFinished;