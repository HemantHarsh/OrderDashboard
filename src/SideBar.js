import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faBriefcase,
  
  faImage,
  
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";


const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Bootstrap SideBar</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>Order Dashboard</p>
        
        <NavItem>
          <NavLink tag={Link} to={"/OrderList"}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
            OrderList
          </NavLink>
        </NavItem>
        
        <NavItem>
          <NavLink tag={Link} to={"/CreateOrder"}>
            <FontAwesomeIcon icon={faImage} className="mr-2" />
            CreateNew Order
          </NavLink>
        </NavItem>
        
      </Nav>
    </div>
  </div>
);



export default SideBar;
