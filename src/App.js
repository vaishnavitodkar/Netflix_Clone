import './App.scss';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import signin from './Components/signin';

function App() {
  return (
    <Router >
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/signin' element={<signin/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
