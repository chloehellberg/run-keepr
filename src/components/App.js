import React from "react";
import "./../index.css";
import Navbar from "react-bootstrap/Navbar";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <div className="appContainer">
      <Navbar>
        <LinkContainer to="/">
          <div className="leftNavbar">
            <Navbar.Brand href="/" className="font-weight-bold">
              <div className="navName">
                <h1 className="nameTop">Runkeepr</h1>
              </div>
            </Navbar.Brand>
          </div>
        </LinkContainer>
        <Navbar.Toggle />
        <div className="rightNavbar">
          <Navbar className="justify-content-end">
            <Nav activeKey={window.location.pathname}>
              <LinkContainer to="/">
                <Nav.Link className="feedLink">FEED</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/user">
                <Nav.Link className="meLink">ME</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/log">
                <Nav.Link className="logLink">LOG</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar>
        </div>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;

// import React from "react";
// import "./../index.css";
// import Navbar from "react-bootstrap/Navbar";
// import Routes from "./Routes";
// import { LinkContainer } from "react-router-bootstrap";
// import Nav from "react-bootstrap/Nav";

// function App() {
//   return (
//     <div className="appContainer">
//       <Navbar collapseOnSelect expand="lg" className="mb-2 ">
//         <LinkContainer to="/">
//           <div className="leftNavbar">
//             <Navbar.Brand href="/" className="font-weight-bold">
//               <div className="navName">
//                 <h1 className="nameTop">Runkeepr</h1>
//               </div>
//             </Navbar.Brand>
//           </div>
//         </LinkContainer>
//         <Navbar.Toggle />
//         <div className="rightNavbar">
//           <Navbar.Collapse className="justify-content-end">
//             <Nav activeKey={window.location.pathname}>
//               <LinkContainer to="/">
//                 <Nav.Link className="feedLink">FEED</Nav.Link>
//               </LinkContainer>
//               <LinkContainer to="/me">
//                 <Nav.Link className="meLink">ME</Nav.Link>
//               </LinkContainer>
//               <LinkContainer to="/log">
//                 <Nav.Link className="logLink">LOG</Nav.Link>
//               </LinkContainer>
//             </Nav>
//           </Navbar.Collapse>
//         </div>
//       </Navbar>
//       <Routes />
//     </div>
//   );
// }

// export default App;
