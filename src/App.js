import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage-component'
import ShopPage from './pages/shoppage/shoppage-component'
import Header from './components/header/header-component'
import SignInAndSignUpPage from './pages/sign-in-sign-up-page/sign-in-sign-up-page-component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot =>{
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          },()=>{
            console.log("state -->",this.state)
          })
        })
      }
      this.setState({currentUser:userAuth})

    })    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){

    return (
      <div>
      <Header currentUser = {this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/signin" component={SignInAndSignUpPage}/>
      </Switch>
      </div>
    );
  }
}

export default App;

//Happy Coding!