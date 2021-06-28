import React from "react";
import { Card } from "react-bootstrap";
import "./UserTab.css";
import { Nav, Button, Container, Row, Col, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Map from "./MapNav/Map";
import Dashboard from "./DashboardNav/Dashboard";

export default function UserTab() {
  return (
    <div className="me">
      <Card
        className="subNavContainer"
        style={{ width: "960px", height: "735px" }}
      >
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first" className="subNav_Tabs">
            <Image
              className="placeHolder_Img"
              src="https://cdn4.iconfinder.com/data/icons/fitness-lino-color/100/fitness_gym_health-29-2-512.png"
            />
            <div className="avatar_Username">
              <p className="full_name">USERNAME HERE</p>
              <p className="active_date">Active since Jun. 2021</p>
            </div>
            <Nav.Item>
              <Nav.Link href="#first">
                <Icon.HouseDoorFill className="subNav_Img" size={25} />
                <br />
                DASHBOARD
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/user/reports">
                <Icon.Reception4 className="subNav_Img" size={25} />
                <br />
                REPORTS
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/user/training">
                <Icon.Clipboard className="subNav_Img" size={25} />
                <br />
                TRAINING
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/user/activities">
                <Icon.Calendar3 className="subNav_Img" size={25} />
                <br />
                ACTIVITIES
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/user/friends">
                <Icon.PeopleFill className="subNav_Img" size={25} />
                <br />
                FRIENDS
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">
                <Icon.Map className="subNav_Img" size={25} />
                <br />
                ROUTES
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Map />
        </Card.Body>
      </Card>
    </div>
  );
}
