import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Publications from "./pages/publications";
import ShareToughtsPage from "./pages/share-thoughts";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Publications} />
          <Route path="/share" component={ShareToughtsPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;
