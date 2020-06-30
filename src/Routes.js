import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Blog from "./Blog";
import PostForm from "./PostForm";
import PostDetails from "./PostDetails";
import HomePage from "./HomePage";

/** Routes for application. */

function Routes() {
  return (

    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/blog" exact>
        <Blog />
      </Route>
      <Route path="/new" exact>
        <PostForm />
      </Route>
      <Route path="/:id" exact>
        <PostDetails />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;