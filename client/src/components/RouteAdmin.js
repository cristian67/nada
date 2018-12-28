import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import AdminProducto from './admin/producto/AdminProducto'; 

function AuthExample() {
  return (
    <Router>
      <div>
        {/* Boton logout */}
        <AuthButton />
        <ul>
          <li>
            {/* enlace para ir a la protegidas (no deberia estar) */}
            <Link to="/admin/producto">Protected Page</Link>
          </li>
        </ul>

        {/* Rutas publicas para login */}
        <Route path="/login" component  = {Login} />

        {/* Rutas privadas */ }
        <PrivateRoute exact  path="/admin/producto" component={AdminProducto}/>
        <PrivateRoute exact  path="/admin/categoria" component={AdminProducto}/>

      </div>
    </Router>
  );
}

//FUNCION QUE DEBERIA TOMAR EL TOKEN
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 1000); 
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 1000);
  }
};

//Boton Para Logout
const AuthButton = withRouter( ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        <button onClick={() => {  fakeAuth.signout(() => history.push("/login")); }} >  Salir </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);


function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

function Protected() {
  return <h3>Protected</h3>;
}


//CLASE PRINCIPAL
class Login extends React.Component {

  state = { 
    redirectToReferrer: false,
    usuario: {} ,
    cargando: false , 
    token: '', 
    error:''
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/admin/producto"} };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      /* Login Form */
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default AuthExample;
