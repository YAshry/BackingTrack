import React from 'react';
import Mainrouter from './components/Mainrouter';
import { BrowserRouter} from 'react-router-dom';

const App = () => {
  return(
    <BrowserRouter>
      <Mainrouter/>
    </BrowserRouter>
  );
};

export default App;
