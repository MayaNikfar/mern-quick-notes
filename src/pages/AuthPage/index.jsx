import { useState } from 'react';
import SignUpForm from "../../components/SignUpForm";
import LoginForm from "../../components/LoginForm";

export default function AuthPage({setUser}) {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <main>
            <h1>AuthPage</h1>
            <button onClick={ () => setShowLogin(!showLogin) }>{ showLogin ? 'Sign Up' : 'Log In' }</button>
            { showLogin ? <LoginForm setUser={ setUser } /> : <SignUpForm setUser={ setUser }/> }
        </main>
    );
}