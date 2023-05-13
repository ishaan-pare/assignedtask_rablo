import './App.css';
import Counter from './features/counters/Counter';
import Details from './features/details/Details';
import Form from './features/form/Form';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  let i = 0;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/details' element={<Details/>}/>
          <Route exact path='/' element={<Form/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
