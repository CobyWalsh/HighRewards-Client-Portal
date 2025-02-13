import React from "react";
import { Admin, Resource } from 'react-admin';
import authProvider from "./authProvider";
import LoginPage from "./LoginPage";
// import dataProvider from './dataProvider';

const App = () => (
    <Admin authProvider={authProvider} loginPage={LoginPage} >
        {/* Define resourse here dataProvider={dataProvider}*/}
    </Admin>
);

export default App;
