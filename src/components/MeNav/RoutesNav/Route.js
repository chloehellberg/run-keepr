import React from "react";
import "./Route.css";

function Route() {
  return (
    <React.Fragment>
      <div className="leftContentColumn">
        <div className="clearFix">
          <a href="/new/route">
            <div className="addButton">+</div>
          </a>
          <h3 className="userHeader_Routes">ROUTES</h3>
          <div className="mainColumnPadding"></div>
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

export default Route;
