import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import AuthNavbar from './navbar/navbar';
import Chat from './chat/chat';

const App = (props) => {
  return (
    <>
      <Modal />
      <AuthRoute path="/" component={AuthNavbar} />
      <ProtectedRoute path="/" component={Chat} />
    </>
  )
};

export default App;