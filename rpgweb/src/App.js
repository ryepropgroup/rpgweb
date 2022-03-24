import React from 'react';
import './App.css';
import { 
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';


import { StudentHome } from './containers/student/studenthome';
import { StudentAbout } from './containers/student/studentabout';
import { StudentBlog } from './containers/student/studentblog';
import { StudentEvents } from './containers/student/studentevents';
import { StudentTeam } from './containers/student/studentteam';
import { StudentContact } from './containers/student/studentcontact';


import { TeamHome } from './containers/team/teamhome';
import { TeamTutorials } from './containers/team/teamtutorials';
import { Teamcontact } from './containers/team/teamcontact';


import { Landing } from './containers/landing/landing';
import { Rpg } from './containers/rpg/rpg';
import { SponsorAbout } from './containers/sponsor/sponsorabout';
import { SponsorContact } from './containers/sponsor/sponsorcontact';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            {/* Routes for landing and rpg split pages */}
            <Route path='/' element={<Landing/>}/>
            <Route path='/rpg' element={<Rpg/>}/>

            {/* Routes for student components */}
            <Route path='/studenthome' element={<StudentHome />}/>
            <Route path='/studentabout' element={<StudentAbout />}/>
            <Route path='/studentblog' element={<StudentBlog />}/>
            <Route path='/studentevents' element={<StudentEvents />}/>
            <Route path='/studentteam' element={<StudentTeam />}/>
            <Route path='/studentcontact' element={<StudentContact />}/>

            {/* Routes for team components */}
            <Route path='/teamhome' element={<TeamHome />}/>
            <Route path='/teamtutorials' element={<TeamTutorials />}/>
            <Route path='/teamcontact' element={<Teamcontact />}/>

            {/* Routes for sponsor components */}
            <Route path='/sponsorabout' element={<SponsorAbout />}/>
            <Route path='/sponsorcontact' element={<SponsorContact />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
