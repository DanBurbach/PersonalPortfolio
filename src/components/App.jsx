import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Error404 from './Error404';
import MainSplash from './MainSplash';
import ProjectsList from './Projects/ProjectsList';
import EducationList from './Education/EducationList';
import InterestsList from './Interests/InterestList';
import PersonalList from './Personal/PersonalList';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={MainSplash} />
        <Route component={Error404} />
      </Switch>
      <Navigation />
      <Switch>
        <Route exact path='/projectslist' component={ProjectsList} />
        <Route exact path='/educationlist' component={EducationList} />
        <Route exact path='/interestslist' component={InterestsList} />
        <Route exact path='/personallist' component={PersonalList} />
      </Switch>
    </div>
  );
}

export default App;
