import React from 'react';
import {Navbar} from 'react-materialize';
import {SideNav, SideNavItem, Button} from 'react-materialize';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <Navbar brand='Home'>
        <SideNav
          trigger={<Button>Menu</Button>}
          options={{ closeOnClick: true }}
        >
          <SideNavItem userView
            user={{
              background: '',
              image: '',
              name: 'John Doe',
              email: 'jdandturk@gmail.com'
            }}
          />
          <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
          <SideNavItem><Link to="/projects">Projects</Link></SideNavItem>
          <SideNavItem><Link to="/education">Education</Link></SideNavItem>
          <SideNavItem><Link to="/interests">Interests</Link></SideNavItem>
          <SideNavItem><Link to="/personal">Personal</Link></SideNavItem>

          <SideNavItem divider />
          <SideNavItem subheader>Subheader</SideNavItem>
        </SideNav>
      </Navbar>
    </div>
  );
}

export default Header;
