import React from 'react';
import SignIn from '../../components/sign-in/sign-in-component'
import SignUp from '../../components/sign-up/sign-up-component'
import './sign-in-sign-up-page.styles.scss';

const SignInAndSignUpPage = () =>{
    return (<div className='sign-in-sign-up-page'>
    <SignIn />
    <SignUp />
    </div>)
}

export default SignInAndSignUpPage;