import React from 'react';

import FormInput from '../form-input/form-input-component';
import CustomButton from '../custom-button/custom-button-component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("Passwords dont match!")
        }

        try{

            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            // const { user } = await auth.createUserWithEmailAndPassword(email, password).then(credentials => {
                // console.log("credentials",credentials)
            // })

            // console.log("user",user)

            createUserProfileDocument(user, {displayName})

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
        catch(error){
            console.log(error);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({ [name]:value })
    }

    render(){
        const { displayName, email, password, confirmPassword} = this.state;

        return(
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with Email & Password.</span>

            <form onSubmit={this.handleSubmit} autoComplete="off" className="sign-up-form">
                <FormInput name="displayName" type="text" handleChange={this.handleChange} value={displayName} label="Name" required/>
                <FormInput name="email" type="email" handleChange={this.handleChange} value={email} label="Email" required/>
                <FormInput name="password" type="password" handleChange={this.handleChange} value={password} label="Password" required/>
                <FormInput name="confirmPassword" type="password" handleChange={this.handleChange} value={confirmPassword} label="Confirm Password" required/>
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
        )
    }
}

export default SignUp;