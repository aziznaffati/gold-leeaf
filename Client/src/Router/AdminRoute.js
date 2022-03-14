import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Route } from 'react-router-dom'


const AdminRoute = ({ component: Component, ...rest }) => {
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    const auth = useSelector((state) => state.authReducer.user);
    if ( auth.Role === "User" ) {
        return <Redirect to='/login' />
    }
     else if (!token) {
        return <Redirect to='/login' />
    }
    return (
        <Route component={() => <Component {...rest} />} />
    )
}

export default AdminRoute