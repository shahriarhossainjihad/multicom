import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import '../css/app.css';
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={router}></RouterProvider>
            </Provider>
        </>
    );
}

const rootElement = document.getElementById('app');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<App />);
}
