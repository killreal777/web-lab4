const apiBase = "http://localhost:8080/api/auth/";

const urls = {
    login: apiBase + "login",
    register: apiBase + "register"
}

const authService = {
    login: async (userData) => {
        let response = await fetch(urls.login, {
            method: "POST",
            body: JSON.stringify({
                login: userData.login,
                password: userData.password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        return response;
    },
    
    register: async (user) => {
        console.log(user);
        let response = await fetch(urls.register, {
            method: "POST",
            body: JSON.stringify({username: user.login, password: user.password}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        return response;
    }
};

export default authService;