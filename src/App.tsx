import React, { useEffect } from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import Routing from "./components/routing/Routing";
import {useDispatch, useSelector} from 'react-redux';
import Header from './common/header/Header'
import {getIsLoading, getIsLoggedIn} from './store/selectots';
import IsLoading from './common/isLoading/IsLoading';
import { authMeTC } from './store/authReducer';

function App() {
  
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isLoading = useSelector(getIsLoading)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authMeTC());
  }, []);

  return (
    <HashRouter>
      { isLoading && <IsLoading/>}
      <div className="App">
      {isLoggedIn && <Header />}
        <Routing />
    </div>
    </HashRouter>
  );
}

export default App;
