import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
 import { ErrorBoundary } from './components/errorBoundary/errorBoundary';
import AppRoutes from './utils/routes';
import { Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { publicRoutes } from './utils/routes';
import { HOMEPAGE_ROUTE, SIGN_IN_ROUTE } from './utils/consts';
import { Routes, Route } from 'react-router-dom';
import { Global } from './components/globalStyles';
import Homepage from './pages/homepage/homepage';
import LoginPage from './pages/loginPage/loginPage';



import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}
const container = createRoot(root);
 
 

 
container.render(
    <Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
    <ErrorBoundary>
<BrowserRouter>
<Routes>
            {publicRoutes.map(({ path, Component }) => (<Route key={path} path={path} element={<Component   />} />)
            )}

            

       {/*     <Route path="*" element={<Navigate replace to={HOMEPAGE_ROUTE} />} /> */}

         </Routes>
</BrowserRouter> 
            </ErrorBoundary>
        </PersistGate>
        </Provider>
);
