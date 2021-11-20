const BASE_API = 'http://177.153.59.11/apirecadinho';

export default {
    login: async (params) => {
        const req = await fetch(`${BASE_API}/usuarios/novo`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },            
            body: JSON.stringify(params)
        });
        const json = await req.json();
        return json;
    },
    createUser: async (params) => {
        const req = await fetch(`${BASE_API}/usuarios/novo`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },            
            body: JSON.stringify(params)
        });
        const json = await req.json();
        return json;
    },
}