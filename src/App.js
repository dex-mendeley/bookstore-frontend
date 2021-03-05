import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { default as Books } from './views/BookList';
import { default as Home } from './views/HomePage';

const AppBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const App = () => (
    <AppBody>
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/books">
                    <Books />
                </Route>
                {/* Default To 404 Not Found */}
                <Route>
                    <div>Not found</div>
                </Route>
            </Switch>
        </Router>
    </AppBody>
);

export default App;
