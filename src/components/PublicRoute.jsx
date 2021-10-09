import React from "react";
import { Redirect, Route, Router } from "react-router";
import { useAuthContext } from "../cotext/AuthProvider";

export const PublicRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuthContext();
  return !user ? (
    <Route {...rest} component={Component} />
  ) : (
    <Redirect to="/" />
  );
};
