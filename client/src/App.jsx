import React, { Component } from 'react';
import API from "./utils/API";
import Navbar from "./components/navbar/navbar.jsx"
import { Route, Redirect, withRouter } from 'react-router-dom'
import {Grid} from 'react-bootstrap'
import Cart from "./pages/Cart/Cart.jsx"
import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Recipes from "./pages/Recipes"
import "./utils/App.css"

const PrivateRoute = ({ component: Component, ...rest }) => (

  <Route {...rest} render={(props) => (
    rest.auth
      ? <Component {...props} {...rest} />
      : <Redirect to={{
        pathname: '/login',
        from: props.location
      }} />
  )} />
)

class App extends Component {

  state = {
    user: "guest",
    auth: false,
    cart: [],
  }

  redirect = (user, from) => {
    this.setState({ user, auth: true, cart: user.cart }, () => {
      from ?
        this.props.history.push(from.pathname) :
        this.props.history.push("/landing")
    })
  }

  signout = () => this.setState({ user: "guest", auth: false, cart: [] }, () => this.props.history.push("/landing"))
  componentDidMount() {
  }
  updateCart = newRecipe => {

    let newCart = this.state.cart
    if (newRecipe.cartTotal === 0) {
      newCart = newCart.filter(recipe => recipe._id !== newRecipe._id)
    } else if (newCart.find(recipe => recipe._id === newRecipe._id)) {
      newCart.find(recipe => recipe._id === newRecipe._id).cartTotal = newRecipe.cartTotal
    } else {
      newCart.unshift(newRecipe)
    }
    let cart = { cart: newCart }
    API.updateUser(this.state.user._id, cart)
      .then(res => {
        this.setState({ cart: res.data.cart })
      })
      .catch(err => console.log(err));
  }

  render() {

    return (
      <div>
      <Navbar cart={this.state.cart} auth={this.state.auth} signout={this.signout.bind(this)} />
      <Grid className = "container" style={{ height: "100%",paddingTop: "60px" }}>
        

        <Route exact path="/landing"
          render={(routeProps) => (
            <Landing {...routeProps} />
          )} />

        <PrivateRoute
          exact path="/recipes"
          component={Recipes}
          auth={this.state.auth}
          user={this.state.user}
          updateCart={this.updateCart.bind(this)}
        />

        <PrivateRoute
          exact path="/cart"
          component={Cart}
          updateCart={this.updateCart.bind(this)}
          auth={this.state.auth}
          user={this.state.user}
          cart={this.state.cart}
        />
        <Route exact path="/login" render={(routeProps) => (
          <Login {...routeProps} auth={this.state.auth} redirect={this.redirect.bind(this)} />
        )} />

        <Route exact path="/"
          render={(routeProps) => (
            <Landing {...routeProps} />
          )} />
      </Grid>
      </div>
    )
  }
}

export default withRouter(App);
