import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';
import HomePage from './pages/homepage/homepage-component'
import ShopPage from './pages/shoppage/shoppage-component'
import CheckoutPage from './pages/checkout/checkout-componenet';
import Header from './components/header/header-component'
import SignInAndSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up-page-component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector'
import { createStructuredSelector } from 'reselect'   //used here so that it becaome easy if we have more selectors in the future

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot =>{
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          })
        })
      }
      setCurrentUser(userAuth);

    })    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){

    return (
      <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route exact path="/checkout" component={CheckoutPage}/>
        <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage />)}/>  {/*Render keyword can dynamically decide which component to render*/}
      </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({               //destructure the state object to get the current user object
  currentUser:selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

//Happy Coding!