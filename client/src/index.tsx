import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.scss';
import { ThemeProvider } from './provider/ThemeProvider';
import { store } from './store/store';
import { Provider } from 'react-redux';
import Register from './pages/Register/Register';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
        <Register></Register>
        
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
