import React from "react";
import HomeHeaderMenu from "../Home/HomeHeaderMenu";
import {NavLink} from "react-router-dom";

function LogIn(props) {

    const {handlerLogInInputs, handlerOnSubmit, logInData} = props;

    return (
        <div className='logIn'>
            <div className='leftSide'>
            </div>
            <div className='rightSide'>
                <HomeHeaderMenu isLogIn={props.isLogIn} logInHandler={props.logInHandler} logInEmail={logInData.email}/>
            </div>
            <div className='logInHeader'>
                <h1>Log In</h1>
                <img src='../../../assets/Decoration.svg'/>
                {logInData.success}
            </div>
            <form>
                <div className='logInBox'>
                    <label>Email</label><input
                    style={logInData.warningLogin !== '' ? {borderBottom: '1px solid #960c0c'} : null} type='email'
                    name='login' value={logInData.login} onChange={handlerLogInInputs}/>
                    {logInData.warningLogin}
                    <label>Password</label><input
                    style={logInData.warningLogin !== '' ? {borderBottom: '1px solid #960c0c'} : null}
                    type='password' name='password' value={logInData.password} onChange={handlerLogInInputs}/>
                    {logInData.warningPassword}
                </div>
                <div className='logInButtons'>
                    <NavLink exact to="/signIn" activeClassName="active" className='button'>Sign in</NavLink>
                    <NavLink exact to="/form" onClick={handlerOnSubmit} className='button'>Log In</NavLink>
                </div>
            </form>
        </div>
    )
}

export default LogIn;