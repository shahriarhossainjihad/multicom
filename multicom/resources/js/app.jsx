import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import '../css/app.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ToastContainer } from 'react-toastify';


function App() {
    return (
        <>
            <div className='font-roboto'>
                <Provider store={store}>
                    <ToastContainer />
                    <RouterProvider router={router}></RouterProvider>
                </Provider>
            </div>
        </>
    );
}

const rootElement = document.getElementById('app');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<App />);
}
