import React, { useState } from "react";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase";
import { Link, useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      history.push("/");
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  };
  return (
    <>
      <h1>ログイン</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input type="email" name="email" placeholder="email" />
        </div>
        <div>
          <label>パスワード</label>
          <input type="password" name="password" />
        </div>
        <div>
          <button>ログイン</button>
        </div>
        <div>
          ユーザー登録は<Link to="/signup">こちら</Link>から
        </div>
      </form>
    </>
  );
};
