//const BASE_API = 'http://177.153.59.11/apirecadinho';
const BASE_API = 'http://192.168.0.115:8000';

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

        const json = await req.json()

        return json

    },
    loginUserVip: async (params) => {
        
        const req = await fetch(`${BASE_API}/login/login-vip`, {

            method: 'POST',
            headers: {
                
                Accept: 'application/json',
                    'Content-Type': 'application/json'

            },
            body: JSON.stringify(params)

        });

        const json = await req.json()

        return json

    },
    buscarArtista: async (params) => {
        const req = await fetch(`${BASE_API}/usuarios/`+ params +`/mostrar`,
            {
                method: 'POST',
                headers: {
                
                    Accept: 'application/json',
                        'Content-Type': 'application/json'
    
                }
            }
        );

        const json = await req.json()
    },
    createShow: async (params) => {
        
        const req = await fetch(`${BASE_API}/shows/novo`, {

            method: 'POST',
            headers: {

                Accept: 'application/json',
                    'Content-Type': 'application/json'
            },       
            body: JSON.stringify(params)

        });

        const json = await req.json()

        return json

    },
}