import React from "react";

function Dashboard() {
  return (
    <React.Fragment>
      <div className="leftContentColumn">
        <div className="clearFix">
          <h3 className="userHeader_Dashboard">DASHBOARD</h3>
          <div className="mainColumnPadding">
            <h4>Info</h4>
            <ul id="userInfoDetails" className="navList">
              <li>
                <span className="navListLabel">MY MOTIVATION:</span>
                <br />
                <span className="navListValue">Mental Clarity</span>
              </li>
            </ul>
          </div>
          <div className="colDivider"></div>
        </div>
      </div>
      <div className="mainContentColumn">
        <div className="columnContent">
          <h2 class="userHeader">"Route Title Here"</h2>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
