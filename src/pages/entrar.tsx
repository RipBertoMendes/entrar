import React, { useState } from 'react';
import styled from 'styled-components';


interface ILoginProps {}


const App: React.FC<ILoginProps> = () => {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
     
    const validateEmail = (email: string): boolean => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Por favor, preencha todos os campos.');
            return;
        }

        if (!validateEmail(email)) {
            setError('Por favor, insira um e-mail válido.');
            return;
        }

        if (password.length < 6) {
            setError('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        if (email === 'user@test.com' && password === 'password123') {
            console.log('Autenticação bem-sucedida!');
            setIsAuthenticated(true);
        } else {
            setError('E-mail ou senha inválidos.');
        }
    };

    if (isAuthenticated) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
                <div className="p-10 bg-gray-800 rounded-xl shadow-2xl text-center">
                    <h1 className="text-3xl font-bold text-green-400 mb-4">Login bem-sucedido!</h1>
                    <p className="text-lg">Bem-vindo, {email}!</p>
                     <button 
                        onClick={() => {
                            setIsAuthenticated(false);
                            setEmail('');
                            setPassword('');
                            setError('');
                        }}
                        className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-colors duration-300"
                    >
                        Sair
                    </button>
                </div>
            </div>
        );
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Bem-vindo de volta!</h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">Faça login para continuar</p>
                </div>
                
                {}
                {error && (
                    <div className="p-4 text-sm text-red-800 bg-red-100 dark:bg-red-900 dark:text-red-300 rounded-lg" role="alert">
                        <span className="font-medium">Erro:</span> {error}
                    </div>
                )}

                <form className="space-y-6">
                    {}
                    <div>
                        <label htmlFor="email" className="text-sm font-bold text-gray-600 dark:text-gray-300 block mb-2">
                            Endereço de E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 text-gray-900 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            placeholder="seu.email@exemplo.com"
                            required
                        />
                    </div>
                    
                    {}
                    <div>
                        <label htmlFor="password"  className="text-sm font-bold text-gray-600 dark:text-gray-300 block mb-2">
                            Senha
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 text-gray-900 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    
                    {}
                    <div>
                        <button
                            onClick={handleLogin}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105"
                        >
                            Entrar
                        </button>
                    </div>
                </form>
                <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                    Credenciais de teste: <br/>
                    Email: <strong>user@test.com</strong> <br/>
                    Senha: <strong>password123</strong>
                </p>
            </div>
        </div>
    );
};

export default App;
