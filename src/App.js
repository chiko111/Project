import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import MainGallery from './components/Gallery/AlbumGallery';
import Navigation from './components/Navigation';
import ReduxTODO from './components/ReduxTODO/ReduxTODO';
import { persistor, store } from './components/ReduxTODO/components/store';
import RouteChangeListener from './components/RouteChangeListener';
import TODO from './components/Table/TODO';
import TicTac from './components/TicTac/TicTac';
import TreeBuilder from './components/TreeBuilder/TreeBuilder';

import './Game.css';
import './components/TreeBuilder/TreeBuilder.css';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <RouteChangeListener />
        <Navigation />
        <Switch>
          <Route exact path="/">
            <TicTac />
          </Route>
          <Route path="/input">
            <TreeBuilder />
          </Route>
          <Route path="/gallery">
            <MainGallery />
          </Route>
          <Route exact path="/table">
            <TODO />
          </Route>
          <Route exact path="/reduxtodo">
            <ReduxTODO />
          </Route>
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
);

export default App;
