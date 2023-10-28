import React from "react";
import { Routes as RoutesGeneric, Route } from "react-router-dom";
import flow from "lodash/flow";

import { withFramer } from "./withFramer";
import { withSpinner } from "./withSpinner";
import { Home } from "../pages/Home";
import { List } from "../pages/List";
import { User } from "../pages/User";
import { TransitionRoot } from "../components/TransitionRoot";

const Routes = () => {
  const HomeAnimated = flow(withFramer, withSpinner)(Home);
  const ListAnimated = flow(withFramer, withSpinner)(List);
  const UserAnimated = flow(withFramer, withSpinner)(User);
  return (
    <TransitionRoot>
      <RoutesGeneric>
        <Route path="/" element={<HomeAnimated />} />
        <Route path="/list" element={<ListAnimated />} />
        <Route path="/user/:id" element={<UserAnimated />} />
      </RoutesGeneric>
    </TransitionRoot>
  );
};

export default Routes;
