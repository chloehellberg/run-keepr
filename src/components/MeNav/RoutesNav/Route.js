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
          <div className="mainColumnPadding">
            <div className="routesNav">
              <ul className="navPills_Routes nav-stacked secondaryNav routes">
                <li className="routesList" defaultActiveKey="#first">
                  <a href="#first">
                    <span className="unitDistance">2.11 mi.</span>Tilikum to
                    Hawthorne
                  </a>
                </li>
                <li className="routesList" defaultActiveKey="#first">
                  <a href="/user/route/routeId">
                    <span className="unitDistance">3 mi.</span>Alameda Run
                  </a>
                </li>
                <li className="routesList" defaultActiveKey="#first">
                  <a href="/user/route/routeId">
                    <span className="unitDistance">5.15 mi.</span>Reed College
                  </a>
                </li>
                <li className="routesList" defaultActiveKey="#first">
                  <a href="/user/route/routeId">
                    <span className="unitDistance">4 mi.</span>Rose City Golf
                    Run
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mainContentColumn clearFix">
        <div className="columnContent">
          <h2 class="userHeader">
            <div className="deleteRouteLink microText">
              <a
                href="/new/route?updateRoute=routeId"
                className="activityEdit activityActionItem"
              >
                Edit
              </a>
              <div className="dividerWhite right"></div>
              <a
                alertMessage="Are you sure you want to delete this route? This cannot be undone..."
                className="deleteRoute activityActionItem"
                href="/route/delete/routeId"
                alertTitle="Delete Route?"
              >
                Delete
              </a>
              <div className="dividerWhite right" />
              <div className="activityActionItem">
                <div className="mainText" />
                <div
                  className="icon private"
                  data-toggle="tooltip"
                  data-container="body"
                  title="Private"
                ></div>
              </div>
            </div>
            Tilikum to Hawthorne<span className="details"> (2.11 mi)</span>
          </h2>
          <div className="mainColumnPadding">
            <p></p>
            <div className="mapArea">
              <div className="mappingTool"></div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Route;
