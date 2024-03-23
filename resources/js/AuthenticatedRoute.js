import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';

export default function AuthenticatedRoute({ component: C, appProps, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                appProps.isAuthenticated
                    ? <C {...props} {...appProps} />
                    : <Redirect
                        to={`/`}
                    />}
        />
    );
}
