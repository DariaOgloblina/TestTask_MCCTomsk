import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {getDefaultValues} from "./functions/getDefaultValues";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        treeStructure: getDefaultValues()
    }}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Context.Provider>
);