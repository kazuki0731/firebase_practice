import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useHistory } from "react-router";
export const SignUp = () => {
  const history = useHistory();
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value);
      history.push("/");
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  };
  return (
    <>
      <h1>ユーザー登録</h1>
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
          <button>登録</button>
        </div>
      </form>
    </>
  );
};
