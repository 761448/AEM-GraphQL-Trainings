/*
Copyright 2022 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it.
*/

import React from "react";
import { Link } from "react-router-dom";
import { useAllTeamMatches } from "../api/usePersistedQueries";
import Error from "./Error";
import Loading from "./Loading";
import "./Teams.scss";


function Teams() {
  
  //*********************************
  // TODO :: Implement this by following the steps from AEM Headless Tutorial ==> Implement Teams functionality
  // https://experienceleague.adobe.com/docs/experience-manager-learn/getting-started-with-aem-headless/graphql/multi-step/graphql-and-react-app.html#implement-teams-functionality
  //*********************************
  // Get the Teams Matches data from AEM using the useAllTeams 
  const { matches, error } = useAllTeamMatches();

  // Handle error and loading conditions
  if (error) {
    // If an error ocurred while executing the GraphQL query, display an error message
    return <Error errorMessage={error} />;
  } else if (!matches) {
    // While the GraphQL request is executing, show the Loading indicator
    return <Loading />;
  }
  // Teams have been populated by AEM GraphQL query. Display the teams.
  return (
    <div className="teams">
      {matches.map((match, index) => {
        return <Match key={index} {...match} />;
      })}
    </div>
  );
}

// Render single Team
function Match({ venues, dateTime, match }) {
  // Must have title, shortName and at least 1 team member
  if (!venues || !dateTime || !match) {
    return null;
  }

  return (
    <div className="team">
      <h2 className="team__title">Venue : {venues}</h2>
      <p className="team__description">Date : {dateTime}</p>
      <div>
        <h4 className="team__members-title">Match</h4>
        <ul className="team__members">
          {/* Render the referenced Person models associated with the team */}
          {match.map((dual, index) => {
            return (
              <li key={index} className="team__member">
                <Link to={`/venue/${dual.title}`}>
                  {dual.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}


export default Teams;
