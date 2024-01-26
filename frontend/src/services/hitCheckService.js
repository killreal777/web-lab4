const apiBase = "http://localhost:8080/api/hitChecks";

const hitCheckService = {
    checkHit: async (inputAreaDot) => {
        let response = await fetch(apiBase, {
            method: "POST",
            body: JSON.stringify({
              r: inputAreaDot.r,
              x: inputAreaDot.x,
              y: inputAreaDot.y
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