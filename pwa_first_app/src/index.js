import React from 'react';
import { createRoot } from 'react';
import App from './App';

// Replace ReactDOM.render with createRoot
const root = createRoot(document.getElementById('root'));

// Render your app inside the root
root.render(<App />);
