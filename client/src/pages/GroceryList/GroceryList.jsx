import React, { Component } from 'react';
import { Grid, Row, Table, Well, FormControl } from 'react-bootstrap'
import API from "../../utils/API";
import CartButton from "../../components/cartButton/cartButton.jsx"

class GroceryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            groceryList: { key: [] },
            username: "",
            password: "",
            display: "block"
        }
    }

    componentDidMount() {
        API.getProducts(this.props.user._id)
            .then(res =>
                this.setState({ products: res.data }, () => this.createGroceryList())
            )
            .catch(err => console.log(err));
        if (this.props.user.user === "demo") {
            this.setState({ display: "none" })
        }
    }

    createGroceryList = () => {
        let groceryList = {

        }

        for (let i = 0; i < this.props.cart.length; i++) {
            for (let j = 0; j < this.props.cart[i].ingredients.length; j++) {
                let ingredient = this.props.cart[i].ingredients[j]
                if (!groceryList[ingredient.product.category]) {
                    groceryList[ingredient.product.category] = []
                }
                let onList = groceryList[ingredient.product.category].find(groceryItem => groceryItem.productId === ingredient.product._id)
                if (onList) {
                    onList.recipesAmount += ingredient.amount * this.props.cart[i].cartTotal
                    onList.cartTotal = Math.ceil(onList.recipesAmount / onList.productAmount)
                } else {
                    let groceryItem = {
                        name: ingredient.product.name,
                        productId: ingredient.product._id,
                        productMeasurement: ingredient.product.measurement,
                        productAmount: ingredient.product.amount,
                        recipesAmount: ingredient.amount * this.props.cart[i].cartTotal,
                        cartTotal: Math.ceil(ingredient.amount * this.props.cart[i].cartTotal / ingredient.product.amount),
                        counter: this.props.cart[i].cartTotal,
                        category: ingredient.product.category,
                        link: ingredient.product.walmartlink
                    }
                    groceryList[groceryItem.category].push(groceryItem)
                }

            }
        }
        this.setState({ groceryList })
    }
    changeProductQuantity = groceryItem => {
        let groceryList = this.state.groceryList
        groceryList[groceryItem.category][groceryItem.index] = groceryItem
        this.setState({ groceryList })
    }

    handleChange = event => {
        let value = event.target.id
        this.setState({ [value]: event.target.value })
    }
    updateCartTotal = async(recipes) => {
        for (let i = 0; i < recipes.length; i++) {
            let newRecipe = recipes[i]
            newRecipe.cartTotal = 0
            await API.updateRecipe(newRecipe._id,newRecipe)
                    .then(res => console.log(res))
                    .catch(err => console.log(err));  
        }
    }
    loadWalmartCart = () => {
        let productArray = []
        const groceryList = this.state.groceryList
        Object.keys(groceryList).forEach(key => {
            for (let i = 0; i < groceryList[key].length; i++) {
                let j = 0
                while (groceryList[key][i].cartTotal > j) {
                    let product = {
                        url: groceryList[key][i].link,
                    }
                    productArray.push(product)
                    j++
                }
            }
        });
        let username, password
        if (this.props.user.user === "demo") {
            username = "gokartdemo@gmail.com"
            password = "gokart"
        } else {
            username = this.state.username
            password = this.state.password
        }
        this.props.cartFinished("cartFinished")
        this.updateCartTotal(this.props.cart)
        API.updateUser(this.props.user._id,{cart: []})
            .then(res => this.props.emptyCart())
            .catch(err => console.log(err));  
        API.loadCart([username, password, productArray])
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <Grid style = {{paddingTop: "60px"}}>
                <Row style={{ }}>
                    <FormControl
                        id="username"
                        type="text"
                        placeholder="Grocery.walmart username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        style={{ maxWidth: "400px",  display: this.state.display}}
                    >
                    </FormControl>
                    <br />
                    <FormControl
                        id="password"
                        type="password"
                        placeholder="Grocery.walmart password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        style={{ maxWidth: "400px", display: this.state.display}}
                    />
                    <br />
                    <button className="myBtn" children="Load Walmart Cart" onClick={this.loadWalmartCart} />

                </Row>
                <Row>
                    <div style={{ paddingBottom: "100px" }} children=
                        {Object.keys(this.state.groceryList).map((key, index) =>
                            <div key={key}>
                                <Well style={{ backgroundColor: "#258FA7", backgroundImage: "none", color: "white", maxWidth: "600px", margin: "5% auto 0px", borderRadius: "0px" }} children={key.charAt(0).toUpperCase() + key.slice(1)} />
                                <Table striped style={{ border: "1px #ddd solid", margin: "0px auto", maxWidth: "600px" }}>
                                    <tbody className="groceryListTbody" children={
                                        this.state.groceryList[key].map((groceryItem, index) => (
                                            <tr key={groceryItem.name}>
                                                <td
                                                    className="groceryListCart"><CartButton recipe={{ ...groceryItem, index: index }} updateCart={this.changeProductQuantity} />

                                                </td>
                                                <td>
                                                    <p className="groceryListTitle">{groceryItem.name}</p>
                                                    <p className="groceryListP">Product amount: {groceryItem.productAmount}{"\u00a0"}{groceryItem.productMeasurement}</p>
                                                    <p className="groceryListP">Recipes Need: {groceryItem.recipesAmount}{"\u00a0"}{groceryItem.productMeasurement}</p>
                                                </td>
                                            </tr>
                                        ))} />
                                </Table>
                            </div>
                        )} />
                </Row>
            </Grid>
        )
    }
}

export default GroceryList;