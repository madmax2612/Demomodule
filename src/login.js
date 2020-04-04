import React, { useEffect, useState } from 'react';
import './UI.css';

import _ from 'lodash'
import { MyErrorModal } from './errormodal';
import {
    BrowserRouter as Router,
    Redirect,
} from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form/dist/react-hook-form.ie11'
const Login = function Login() {
    
const[data,setData]=useState({})
    const [error, setError] = useState(false);
    const { register, handleSubmit, errors } = useForm()
    
    // const [redirect, setRedirect] = useState(false);
    // const [errorData, setErrorData] = useState(null);
    // const [status, setStatus] = useState(null)
    const [show, setShow] = useState(false)
    const [name,setName]=useState(sessionStorage.getItem("userName"))
    const [redirect,setRedirect] = useState(false);
    
    const [login, setLogin] = useState(null);

    const onSubmit = function onSubmit(data,e) {
        e.preventDefault();
        console.log(data);

        if(data){
           
            if(data.userName!=='Admin' && data.userName!=='Student'){

                setError(true);
            }

            else{
                setName(sessionStorage.setItem("userName",data.userName))
                setRedirect(true);
            }
        }


       
    }
useEffect(() => {
  


}, [])

    if(redirect){
        return(<Redirect to="/Dashboard"/>)
    }

    if(name==='Admin'){
        setRedirect(true);
   }
  


    const cancelServerErrorModal = function cancelServerErrorModal() {
        setError(false);
    }


    return (    
        <div>
            {error &&
                <MyErrorModal title="Incorrect Credentials" positiveActionText={"close"} content="kindly enter the right password!" redirect={cancelServerErrorModal} />
            }
                 <div className="middleCenterClass">
                <div className="ui segment">
                    <div className="formContent">
                        <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="field">
                                <label>First Name</label>
                                <input type="text" name="userName" placeholder="Username" ref={register({ required: true })} />
                            </div>
                            {
                               errors &&  errors.userName ? <div className="ui one  grid column row errorDiv">
                                    <div className="errorTxt column">
                                        <i className="red exclamation triangle icon"></i> User Name is required!!
                                    </div>
                                </div>
                                    : null}
                            <div className="field">
                                <label>Password</label>
                                <input type="password" name="password" placeholder="Password" ref={register({ required: true })} />
                            </div>
                           
                            {
                                errors && errors.password ? <div>  <div className="ui one  grid column row errorDiv">
                                    <div className="errorTxt column">
                                        <i className="red exclamation triangle icon"></i> Password is required!!
                                     </div>
                                </div>
                                    <div className="ui hidden divider"></div>
                                </div>
                                    : null}
                            <button className="ui primary button" disabled={show}>
                                Login
                            </button>
                            <button disabled className="ui button" >
                                Forgot Password ?
                            </button>
                        </form>
                    </div>


                </div>


            </div>

        </div>
    );

}
export default Login;