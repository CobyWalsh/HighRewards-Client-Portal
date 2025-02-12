import React from "react";
import { Admin, Resource } from 'react-admin';
import authProvider from "./authProvider";
import LoginPage from "./loginPage";
import dataProvider from './dataProvider';

const App = () => (
    <Admin authProvider={authProvider} loginPage={LoginPage} dataProvider={dataProvider}>
        {/* Define resourse her */}
    </Admin>
);

export default App;