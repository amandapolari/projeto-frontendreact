import React from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import { ContainerApp } from './AppStyle';

function App() {
    return (
        <ContainerApp>
            <Header />
            <Home />
        </ContainerApp>
    );
}

export default App;
