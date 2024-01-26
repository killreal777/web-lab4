const apiBase = "http://localhost:8080/api/auth/";

const urls = {
    login: apiBase + "login",
    register: apiBase + "register"
}

const hitCheckService = {
    checkHit: async (inputAreaDot) => {
        let response = await fetch(apiBase, {
            method: "POST",
            body: JSON.stringify({
                
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        });
        return await response.json();
    },
    
    getAllHitChecks: async () => {
        let response = await fetch(apiBase, {
            method: "GET",
            headers: {
                 "Content-Type": "application/json"
            }
        });
        return await response.json();
    },
    
    deleteAllHitChecks: async () => {
        let response = await fetch(apiBase, {
            method: "DELETE"
        });
        return await response.json();
    }
};

export default hitCheckService;