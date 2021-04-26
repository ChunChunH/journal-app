import React from 'react'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router'
import {
    Route,
  } from "react-router-dom";
export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <Route {...rest}
            component= { (props) => (
                ( isAuthenticated === false)
                    ? (<Component {...props} />)
                    : (<Redirect to="/"/>)
            )}
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}