import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';

// Znajdź element root w pliku index.html
const container = document.getElementById('root');

// Utwórz root za pomocą createRoot
const root = createRoot(container);

// Renderuj aplikację
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);