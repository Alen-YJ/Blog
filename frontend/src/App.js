import React from 'react';
import './App.css';
import routes from './routes/index'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

function App() {
    return (
        <div className="App">
            <HashRouter>
                {
                    renderRoutes(routes)
                }
            </HashRouter>
        </div>
    );
}

export default App;
