import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ReactNotification from 'react-notifications-component';
import Routes from './routes';
import GlobalStyles from './styles/GlobalStyles';

import 'react-notifications-component/dist/theme.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactNotification />
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
