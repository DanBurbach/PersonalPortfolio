import React from 'react';
import { Link } from 'react-router-dom';
import { SideNav, SideNavItem, Button } from 'react-materialize';

function Navigation(){
  return (
    <div>
      <div style={MenuButton}>
      <SideNav
        trigger={<Button>Menu</Button>}
        options={{ closeOnClick: true }}>
      </div>
        <SideNavItem
          userView
          user={{
            background: '',
            image: '../assets/images/ProfilePic.jpg',
            name: 'Daniel Burbach',
            email: 'ArealEMAIL@email.com'
          }}
        />
        <SideNavItem><Link to="/projects">Projects</Link></SideNavItem>
        <SideNavItem><Link to="/education">Education</Link></SideNavItem>
        <SideNavItem><Link to="/interests">Interests</Link></SideNavItem>
        <SideNavItem><Link to="/personal">Personal</Link></SideNavItem>
        <SideNavItem divider />
      </SideNav>

    </div>
  );
}

export default Navigation;
