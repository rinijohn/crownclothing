import React from 'react';

import FormInput from '../form-input/form-input-component'
import CustomButton from '../custom-button/custom-button-component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try{
            const {user} = auth.signInWithEmailAndPassword(email, password)
            console.log(user);
        }catch(error){
            console.log(error);
        }

        this.setState({ email:'', password:''})
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({ [name]:value })
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with Name & Email</span>

                <form onSubmit={this.handleSubmit} autoComplete="off">
                    <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label="Email" required></FormInput>
                    
                    <FormInput name="password" type="password" handleChange={this.handleChange} value={this.state.password} label="Password" required></FormInput>
                    <div className="buttons">
                    <CustomButton type="submit"> Sign in</CustomButton>
                    <CustomButton type="button" onClick={ signInWithGoogle } isGoogleSignIn={true}> Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;