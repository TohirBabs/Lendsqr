import React from 'react';
import { DashboardPage } from './pages/Dashboard/Dashboard';

import { LoginPage } from "./pages/Login/Login";


function App() {
  const [userAuthenticated, setUserAuthenticated] = React.useState<boolean>(false)
  return (
    <div className="App">
      {userAuthenticated ? <DashboardPage /> : <LoginPage authenticateUser={ setUserAuthenticated} />}
      
    </div>
  );
}

export default App;
