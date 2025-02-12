const authProvider = {
    login: ({username, password}) => {
    // Replace with API call to validate credentials
    if (username === 'client' && password === 'password123') {
        localStorage.setItem('auth', JSON.stringify({ username }));
        return Promise.resolve();
       }
       return Promise.reject(new Error('Invalid Username or Password'));
    },
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('auth') ? Promise.resolve : Promise.reject();
    },
    checkError: (error) => {
        if (error.status === 404) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    getPermissions: () => Promise.resolve(), 
};

export default authProvider;