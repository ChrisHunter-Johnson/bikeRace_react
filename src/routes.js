import React from "react";
import { Route, Switch } from "react-router-dom";
import asyncComponent from "./components/asyncComponent";

const AsyncHome = asyncComponent(() => import("./container/home"));
const AsyncFlickrImg = asyncComponent(() => import("./container/flickrImg"));
const AsyncRider = asyncComponent(() => import("./container/rider"));
const AsyncRiderMap = asyncComponent(() => import("./container/riderLocation"));
const AsyncSlogan = asyncComponent(() => import("./container/slogan"));

export default () =>
<Switch>
<Route path="/home" exact component={AsyncHome} />
<Route path="/flickrImg" exact component={AsyncFlickrImg} />
<Route path="/rider" exact component={AsyncRider} />
<Route path="/riderMap" exact component={AsyncRiderMap} />
<Route path="/slogan" exact component={AsyncSlogan} />
</Switch>;
