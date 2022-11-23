import { Route, Switch, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

import MedicalPolicy from './pages/MedicalPolicy';
import Bonus from './pages/Bonus';
import { fetchDummyData } from './components/store/dummy-actions';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {

    if (!isInitial) {
     return;
    }
    isInitial = false;
    dispatch(fetchDummyData());
  }, [dispatch]);

  
  return (
    
       <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/employees' />
        </Route>
        <Route path='/employees' exact>
          <Home />
        </Route>
       
        <Route path='/MedicalPolicy' exact>
          <MedicalPolicy />
        </Route>
        <Route path='/Bonus' exact>
          <Bonus />
        </Route> 
       
       

        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>

  );
}

export default App;
