import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Example from "./Example";
import Home from "./Home";
import PostEdit from "./PostEdit";

function App() {
    return (
        <div>
            <Switch>
                <Route path="/example" exact component={Example} />
                <Route path="/" component={Home} />
                <Route path="/post/edit/:id" exact component={PostEdit} />
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
