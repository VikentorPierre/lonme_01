import React from "react";
import Tab from "../include/tabs";
import "../../css/profile.css";

const Profile = props => {
  return (
    <main className="mainContent">
      <div className="mainContent__wrap">
        <div className="mainContent__wrap__content extraContent">
          {/* <header className="header--profile" /> */}
          <Tab />
          <section className="profile--content">
            <h1> profile post</h1>
          </section>
        </div>
      </div>
    </main>
  );
};

const ProfileGoals = props => {
  return (
    <main className="mainContent">
      <div className="mainContent__wrap">
        <div className="mainContent__wrap__content extraContent">
          {/* <header className="header--profile" /> */}
          <Tab />
          <section className="profile--content">
            <h1> profile Goals</h1>
          </section>
        </div>
      </div>
    </main>
  );
};

const ProfileStories = props => {
  return (
    <main className="mainContent">
      <div className="mainContent__wrap">
        <div className="mainContent__wrap__content extraContent">
          {/* <header className="header--profile" /> */}
          <Tab />
          <section className="profile--content">
            <h1> profile Stories</h1>
          </section>
        </div>
      </div>
    </main>
  );
};

const ProfileLikes = props => {
  return (
    <main className="mainContent">
      <div className="mainContent__wrap">
        <div className="mainContent__wrap__content extraContent">
          {/* <header className="header--profile" /> */}
          <Tab />
          <section className="profile--content">
            <h1> profile Likes</h1>
          </section>
        </div>
      </div>
    </main>
  );
};

export { Profile, ProfileGoals, ProfileLikes, ProfileStories };
