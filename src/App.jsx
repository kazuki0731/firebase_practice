import { AuthProvider } from "./cotext/AuthProvider";
import { SignUp } from "./components/SignUp";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { PublicRoute } from "./components/PublicRoute";

function App() {
  return (
    <AuthProvider>
      <div style={{ margin: "2px" }} className="App">
        <BrowserRouter>
          <PrivateRoute exact path="/" component={Home} />
          <PublicRoute path="/signup" component={SignUp} />
          <PublicRoute path="/login" component={Login} />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
