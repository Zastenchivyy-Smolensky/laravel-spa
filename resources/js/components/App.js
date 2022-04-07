import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Example from "./Example";
import Home from "./Home";
import Login from "./Login";
import PostEdit from "./PostEdit";
import Register from "./Register";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem("auth_token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});
function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/example" component={Example} />
                <Route exact path="/" component={Home} />
                <Route path="/post/edit/:id" exact component={PostEdit} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    );
}
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("app")
);
