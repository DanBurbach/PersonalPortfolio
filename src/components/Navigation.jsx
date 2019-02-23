import React from 'react';
import { Link } from 'react-router-dom';
import { SideNav, SideNavItem, Button } from 'react-materialize';
import ProfilePic from '../images/ProfilePic.jpg';


function Navigation () {

  const mainSidebar = {
    backgroundImage:'url(http://www.qygjxz.com/data/out/76/5818681-facets-wallpaper.jpg)',
    color: 'white'
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
                <img class="circle" z-index="10" height = "200px" src={ProfilePic}/>
                <img src="http://www.qygjxz.com/data/out/76/5818681-facets-wallpaper.jpg" z-index="5"/>
              </div>
            </div>
          </div>

          <SideNavItem divider/>

          <SideNavItem>Daniel Burbach</SideNavItem>
          <SideNavItem>ArealEMAIL@email.com</SideNavItem>
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
