import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./head-foot/NavBar";
import Home from "./pages/home";
import Footer from "./head-foot/Footer";
import Notfound from "./pages/Notfound";
import Contact from "./components/contact";
import Team from "./pages/team";
import about from "./pages/about";
import Homeh from "./Template/Card";
import PostLanding from "./pages/post/PostLanding";
import category from "./pages/category";

const MainRouter = () => (
    <div style={{ backgroundColor: "#ecf0f5" }}>
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route
                exact
                path='/category/:category/:id'
                component={PostLanding}
            />
            <Route exact path='/category/:category' component={category} />
            <Route exact path='/home' component={Homeh} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/team' component={Team} />
            <Route exact path='/about' component={about} />
            <Route path='/' component={Notfound} />
        </Switch>
        <Footer />
    </div>
);

export default MainRouter;
