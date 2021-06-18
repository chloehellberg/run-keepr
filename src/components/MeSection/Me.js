import React from "react";
import { Card } from "react-bootstrap";
import "./Me.css";
import { Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Me() {
  return (
    <div className="me">
      {/* <Router>
        <div style={{ width: 1000, margin: "0 auto" }}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </Router> */}

      <Card
        className="subNavContainer"
        style={{ width: "60rem", height: "40rem" }}
      >
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first" className="subNav_Tabs">
            <Nav.Item>
              <Nav.Link href="#first">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/me/reports">Reports</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#link">Training</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
