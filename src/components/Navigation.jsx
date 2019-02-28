import React from 'react';
import { NavLink } from 'react-router-dom';
import { SideNav, SideNavItem, Button } from 'react-materialize';
import profilePic from '../assets/images/ProfilePic.jpg';


function Navigation () {

  const logo = require('../resources/images/ProfilePic.jpg');
  const mainSidebar = {
    color: 'black'
  };

  return (
    <div>
      <SideNav
        style = {mainSidebar}
        trigger={<Button>Menu</Button>}
        options={{ closeOnClick: true }}>

          <div class="container">
            <div class="col">
              <div class="row">
                <img src={profilePic} class="circle" z-index="10" height = "200px"/>
              </div>
            </div>
          </div>

        <SideNavItem divider/>

          <div class= "container">
            <h5>Daniel Burbach</h5>
          </div>

        <SideNavItem divider/>

        <ul>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/education">Education</NavLink></li>
          <li><NavLink to="/interests">Interests</NavLink></li>
          <li><NavLink to="/personal">Personal</NavLink></li>
        </ul>

        <SideNavItem divider/>

          <ul>
            <li><NavLink to="/contactme">Contact Me</NavLink></li>
          </ul>

      </SideNav>

    </div>
  );
}


export default Navigation;
