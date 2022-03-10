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
import { Landing } from './containers/landing/landing';
import { Rpg } from './containers/rpg/rpg';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>

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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
