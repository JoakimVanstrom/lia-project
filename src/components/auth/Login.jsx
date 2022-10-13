import React from "react";
import { authActions } from "../../store/slices/auth";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";



export default function Login() {
    const dispatch = useDispatch();

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    
    const setEmailHandler = (e) => {
        dispatch(authActions.setEmail(e));
    };

    const setPasswordHandler = (e) => {
        dispatch(authActions.setPassword(e));
    };

    setEmailHandler(params.email);
    setPasswordHandler(params.password);




  return <Navigate to="/" />;
}
