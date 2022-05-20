import * as React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

import { LandingPage } from './landing';

function AppRouter (): JSX.Element {

    return (
        <Router>
            <Routes>
                <Route path='/' element={ <LandingPage/> }/>
                <Route path="*/*" element={ <Navigate replace to="/"/> }/>
            </Routes>
        </Router>
    );
}


export default AppRouter;
