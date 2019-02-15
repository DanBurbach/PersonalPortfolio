// core imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// core navigation and return information
import Header from './Header';
import Navigation from './Navigation';
import Error404 from './Error404';

// main splash page aka Home
import MainSplash from './MainSplash';

// outlying component pages
import ProjectsList from './Projects/ProjectsList';
import EducationList from './Education/EducationList';
import InterestList from './Interests/InterestList';
import PersonalList from './Personal/PersonalList';


function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Switch>
        <Route exact path='/' component={MainSplash} />
        <Route component={Error404} />
        <Route exact path='/projects' component={ProjectsList} />
        <Route exact path='/education' component={EducationList} />
        <Route exact path='/interests' component={InterestList} />
        <Route exact path='/personal' component={PersonalList} />
      </Switch>
    </div>
  );
}

export default App;
