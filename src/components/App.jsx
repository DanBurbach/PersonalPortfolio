// core imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// core navigation and return information
import Header from './Header';
import Navigation from './Navigation';
import Bottom from './Footer';
import Error404 from './Error404';
import ContactMe from './ContactMe';

// main splash page aka Home
import MainSplash from './MainSplash';

// outlying component pages
import ProjectsList from './Projects/ProjectsList';
import EducationList from './Education/EducationList';
import InterestList from './Interests/InterestList';
import PersonalList from './Personal/PersonalList';

function App () {

  const navbutton = {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    textDecoration: 'none',
    backgroundColor: '#666666',
    top: '0'
  };

  return (
    <div>
      <div style={navbutton}>
        <Header />
        <Navigation />
      </div>
      <Switch>
        <Route exact path="/" component={MainSplash} />
        <Route path="/projects" component={ProjectsList} />
        <Route path="/education" component={EducationList} />
        <Route path="/interests" component={InterestList} />
        <Route path="/personal" component={PersonalList} />
        <Route path="/contactme" component={ContactMe} />
        <Route component={Error404} />
      </Switch>
      <Bottom />
    </div>
  );
}

export default App;
