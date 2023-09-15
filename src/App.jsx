import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

//Redux Store
import store from './redux/store';

//Components
import Navbar from './components/shared/Navbar';
import Home from './components/Home';
import ResturantPage from './components/ResturantPage';
import ResturantInformation from './components/ResturantInformation';


function App() {

  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/resturant/:id' element={<ResturantPage />} />
        <Route path='/resturantinfo/:id' element={<ResturantInformation />} />
        <Route path="/" element={<Navigate to="/home"/>} />
      </Routes>
    </Provider>
  )
}

export default App
