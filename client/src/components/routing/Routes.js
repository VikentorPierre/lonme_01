import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import "../../css/base.css";
//auth routes 
import Register from "../auth/signuppage";
import Login from '../auth/loginpage';
// feed 
import Feed from "../feed/home";
// post
import CreatePost from "../post/postCreate";

// import Profiles from '../profiles/Profiles';
// import Profile from '../profile/Profile';
// import Posts from '../posts/Posts';
// import Post from '../post/Post';
// import NotFound from '../layout/NotFound';
// import PrivateRoute from '../routing/PrivateRoute';
const Routes = () => {
    return (
        <Switch>
            <Route exact path='/signUp' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path="/post/create" component={CreatePost} />
            {/* <Route exact path='/profiles' component={Profiles} />
          <Route exact path='/profile/:id' component={Profile} /> */}
            {/* <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/create-profile' component={CreateProfile} />
          <PrivateRoute exact path='/edit-profile' component={EditProfile} />
          <PrivateRoute exact path='/add-experience' component={AddExperience} />
          <PrivateRoute exact path='/add-education' component={AddEducation} />
          <PrivateRoute exact path='/posts' component={Posts} />
          <PrivateRoute exact path='/posts/:id' component={Post} />
          <Route component={NotFound} /> */}
        </Switch>
    );
};

export default Routes;