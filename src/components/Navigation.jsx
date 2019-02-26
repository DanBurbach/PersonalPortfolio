import React from 'react';
import { Link } from 'react-router-dom';
import { SideNav, SideNavItem, Button } from 'react-materialize';
// import ProfilePic from 'https://github.com/DanBurbach/PersonalPortfolio/blob/master/src/images/ProfilePic.jpg?raw=true';


function Navigation () {

  const mainSidebar = {
    color: 'black'
  };

  return (
    <div>
      <div>
        <SideNav
          style = {mainSidebar}
          trigger={<Button class="waves-effect waves-light btn">Menu</Button>}
          options={{ closeOnClick: true }}>

          <div class="container">
            <div class="col">
              <div class="row">
                <img class="circle" z-index="10" height = "200px" src='https://github.com/DanBurbach/PersonalPortfolio/blob/master/src/images/ProfilePic.jpg?raw=true'/>
              </div>
            </div>
          </div>

          <SideNavItem divider/>
          <div class= "container">
            <p><h5>Daniel Burbach</h5></p>
          </div>
          <SideNavItem divider/>
          <SideNavItem><Link to="/projects">Projects</Link></SideNavItem>
          <SideNavItem><Link to="/education">Education</Link></SideNavItem>
          <SideNavItem><Link to="/interests">Interests</Link></SideNavItem>
          <SideNavItem><Link to="/personal">Personal</Link></SideNavItem>
          <SideNavItem divider/>
          <SideNavItem><Link to="/contactme">Contact Me</Link></SideNavItem>
        </SideNav>

      </div>
    </div>
  );
}


export default Navigation;
