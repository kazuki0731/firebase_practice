import React from "react";
import { Redirect, Route } from "react-router";
import { useAuthContext } from "../cotext/AuthProvider";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuthContext();
  return user ? (
    <Route {...rest} component={Component} />
  ) : (
    <Redirect to="login" />
  );
};
