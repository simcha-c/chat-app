import React from 'react';
import AuthNavbar from './navbar/navbar';
import Modal from './modal/modal';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = (props) => {
  return (
    <>
      <Modal />
      <AuthRoute path="/home" component={AuthNavbar} />
    </>
  )
};

export default App;