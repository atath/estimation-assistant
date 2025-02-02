import React, { useState } from 'react';
import { register, login, getTasks } from './api';

function App() {
    const [token, setToken] = useState(null);

    const handleRegister = async () => {
        const response = await register({
            username: "admin",
            email: "admin@example.com",
            password: "admin123",
        });
        console.log(response.data);
    };

    const handleLogin = async () => {
        const response = await login({
            username: "admin",
            password: "admin123",
        });
        setToken(response.data.access_token);
    };

    const handleGetTasks = async () => {
        const response = await getTasks(token);
        console.log(response.data);
    };

    return (
        <div>
            <button onClick={handleRegister}>Register</button>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleGetTasks}>Get Tasks</button>
        </div>
    );
}

export default App;