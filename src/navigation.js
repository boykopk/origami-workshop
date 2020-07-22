import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//  import Publications from "./pages/publications";
//  import ShareToughtsPage from "./pages/share-thoughts";
//  import RegisterPage from "./pages/register";
//  import LoginPage from "./pages/login";
//  import ProfilePage from "./pages/profile";
//  import ErrorPage from "./pages/error";
//
//  const Navigation = () => {
//    return (
//      <BrowserRouter>
//        <Switch>
//            <Route path="/" exact component={Publications} />
//            <Route path="/share" component={ShareToughtsPage} />
//            <Route path="/register" component={RegisterPage} />
//            <Route path="/login" component={LoginPage} />
//            <Route path="/profile/:userid" component={ProfilePage} />
//            <Route component={ErrorPage} />
//        </Switch>
//      </BrowserRouter>
//    );
//  };
//
// export default Navigation;

const LazyPublications = React.lazy(() => import("./pages/publications"));
const LazyShareThoughtsPage = React.lazy(() => import("./pages/share-thoughts"));
const LazyRegisterPage = React.lazy(() => import("./pages/register"));
const LazyLoginPage = React.lazy(() => import("./pages/login"));
const LazyProfilePage = React.lazy(() => import("./pages/profile"));
const LazyErrorPage = React.lazy(() => import("./pages/error"));

const LazyNavigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Route exact path="/" component={LazyPublications} />
          <Route path="/share" component={LazyShareThoughtsPage} />
          <Route path="/register" component={LazyRegisterPage} />
          <Route path="/login" component={LazyLoginPage} />
          <Route path="/profile/:userid" component={LazyProfilePage} />
          <Route path="*" component={LazyErrorPage} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
};

export default LazyNavigation;
