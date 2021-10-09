import { signOut } from "@firebase/auth";
import React from "react";
import { Redirect, useHistory } from "react-router";
import { useAuthContext } from "../cotext/AuthProvider";
import { auth } from "../firebase";

export const Home = () => {
  const history = useHistory();
  const { user } = useAuthContext();

  const handleLogout = () => {
    signOut(auth).then(() => {
      history.push("/login");
    });
  };

  return (
    <>
      <h1>ホームページ</h1>
      <button onClick={handleLogout}>ログアウト</button>
    </>
  );
};
