import React from 'react';
import Home from './Components/Home/Home';
import Filters from './Components/Filters/Filters';
import Cart from './Components/Cart/Cart';

function App() {
    return (
        <div>
            <Filters />
            <Home />
            <Cart />
        </div>
    );
}

export default App;
