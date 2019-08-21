import React from 'react';
import ResponsiveComponent from '../responsive/responsive.component';
import { createStore, compose } from 'redux';
import canzoni from '../../reducers/canzoni';
import { Provider } from 'react-redux';
import { NotificationComponent } from '../notification/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeCanzoni = createStore(canzoni, composeEnhancers());

export const Dashboard = () => {
  return (
    <Provider store={storeCanzoni}>
      <section style={{ margin: '300px 0px' }}>
        <div>
          <ResponsiveComponent />
          <NotificationComponent />
        </div>
      </section>
    </Provider>
  );
};

storeCanzoni.subscribe(() => {
  console.log('store state', storeCanzoni.getState());
});
