/*
Copyright 2022 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React from "react";
import Teams from "./Teams";
import Match from "./Match";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./Home.scss";

/***
 * Displays a grid of Team & People Link to find more details
 */
function Home() {
  return (
    <div className="home tab">
      <Tabs>
      <Tab class="tabcontent">
        <h2 className="home__title">WKND Teams</h2>
        <Teams />
      </Tab>
      <Tab class="tabcontent">
        <h2 className="home__title">WKND Matches</h2>
        <Match />
      </Tab>
      </Tabs>
      
      
      
    </div>
  );
}

export default Home;
