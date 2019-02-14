import React, { Component } from 'react';
import GroceryList from '../GroceryList/GroceryList'
import CartList from '../CartList/CartList'
import ThankyouPage from '../thankyouPage/thankyouPage'

class Cart extends Component {

    state = {
        activeComponent: 'cartList'
    }

    changeComponent = component => {
        this.setState({ activeComponent: component })
    }
    render() {
        const cartList =
            <CartList
                cart={this.props.cart}
                generateGrocery={this.changeComponent.bind(this)}
                updateCart={this.props.updateCart}
            />
        const groceryList =
            <GroceryList
                thankyouPage={this.changeComponent.bind(this)}
                cart={this.props.cart}
                user={this.props.user}
            />
        const thankyouPage = <ThankyouPage />
        let activeComponent
        if (this.state.activeComponent === "cartList") {
            activeComponent = cartList
        } else if (this.state.activeComponent === "groceryList") {
            activeComponent = groceryList
        } else {
            activeComponent = thankyouPage
        }
        return (
            <div>
                {activeComponent}
            </div>
        )
    }
}

export default Cart;