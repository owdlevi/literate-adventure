import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

// contexts
import { SettingsProvider } from '@owd/context/settings';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </StrictMode>
);
