import React from 'react';
import { Link } from 'react-router-dom';
import { SideNav, SideNavItem, Button } from 'react-materialize';
import ProfilePic from '../assets/images/ProfilePic.jpg';


function Navigation () {
  return (
    <div>
      <SideNav
        trigger={<Button class="waves-effect waves-light btn">Menu</Button>}
        options={{ closeOnClick: true }}>

        <SideNavItem>
          <div class="userView">
            <div class="background">
              <img src="http://www.qygjxz.com/data/out/76/5818681-facets-wallpaper.jpg" z-index="5"/>
              <div>
                <img class="circle" z-index="10" src={ProfilePic}/>
              </div>
            </div>
            <div>
              <div>
                <span class="black-text">Daniel Burbach</span>
              </div>
              <div>
                <span class="black-text">ArealEMAIL@email.com</span>
              </div>
            </div>
          </div>
        </SideNavItem>

        <br/>

        <br/>
        <SideNavItem divider />
        <br/>
        <SideNavItem><Link to="/projects">Projects</Link></SideNavItem>
        <SideNavItem><Link to="/education">Education</Link></SideNavItem>
        <SideNavItem><Link to="/interests">Interests</Link></SideNavItem>
        <SideNavItem><Link to="/personal">Personal</Link></SideNavItem>
        <SideNavItem divider />
        <SideNavItem><Link to="/contactme">Contact Me</Link></SideNavItem>
      </SideNav>

    </div>
  );
}


export default Navigation;
