/*
Copyright 2022 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/
import React, { Component } from "react";
import loadingIcon from "../images/icon-loading.svg";

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <img src={loadingIcon} alt="Loading..." />
        <>Local AEM Server is down to connect to Graphql endpoint. Please reach out to site admin :)</>
        <div>This site works with local AEM and cloudflared tunnel</div>
      </div>
    );
  }
}

export default Loading;
