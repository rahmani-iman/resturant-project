import React from 'react';
import { Provider } from 'react-redux';

//Redux Store
import store from './redux/store';

//Components
import Navbar from './components/shared/Navbar';
import Home from './components/Home';


function App() {

  return (
    <Provider store={store}>
      <Navbar />
      <Home />
    </Provider>
  )
}

export default App
