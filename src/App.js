import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nav  from "./Nav";
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';

function App() {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='/ComponentOne' element={<ComponentOne />}/>
        <Route path='/ComponentTwo' element={<ComponentTwo />}/>
        <Route path='/ComponentThree' element={<ComponentThree />}/>
      </Routes>
    </Router>
    </>
  );
}

export function Home()
{
  return(
  <>
  <h1>Welcome to our practice react application</h1>
  <p>Today we have leaned how to link our react components using routing.</p>
  </>
  );
}

export default App;
