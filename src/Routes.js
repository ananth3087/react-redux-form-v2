import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/templates/Layout/Layout";
import Error from "./components/pages/Error/Error";
import PersonalDetails from "./components/pages/PersonalDetails/PersonalDetails";
import Constants from "./utils/js/Constants";
import AddressDetails from "./components/pages/AddressDetails/AddressDetails";
import ExperienceDetails from "./components/pages/ExperienceDetails/ExperienceDetails";
const Routes = () => {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Switch>
          <Route
            path={Constants.URL.ROUTES.HOME}
            exact={true}
            component={PersonalDetails}
          />
          <Route
            path={Constants.URL.ROUTES.ADDRESS_DETAILS}
            component={AddressDetails}
          />
          <Route
            path={Constants.URL.ROUTES.EXPERIENCE_DETAILS}
            component={ExperienceDetails}
          />

          <Route render={() => <Error category="page-not-found" />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
