import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet, useParams } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/myapps' element={<Navigate replace    to="/learn"/>}/>
      <Route path='learn' element={<Learn/>}>
        <Route path="courses" element={<Courses/>}>
          <Route path=':courseid' element={<CourseId/>}/>
        </Route>
        <Route path="bundles" element={<Bundles/>}/>
      </Route>
    </Routes>
  </Router>
);

function Home(){
  return(
    <div>
      <h1>Home Route</h1>
    </div>
  )
}

function Learn(){
  return(
    <div>
      <h1>Learn Component</h1>
      <h3>All courses are listed here</h3>
      <Link className='btn btn-success' to="/learn/courses">Courses</Link>  
      <Link className='btn btn-primary' to="/learn/bundles">Bundle</Link>
    <Outlet/>
    </div>
  )
}

function Courses(){
  return(
    <div>
      <h1>Courses list</h1>
      <h4>Courses card</h4>
    </div>
  )
}
function Bundles(){
  return(
    <div>
      <h1>Bundles list</h1>
      <h4>Bundles card</h4>
    </div>
  )
}
function CourseId(){
  const {courseid} = useParams()
  return(
    <div>
      <h1>URL Params is : {courseid}</h1>
    </div>
  )
}

