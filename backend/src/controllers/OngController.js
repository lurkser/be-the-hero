const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

//Cadastro
module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generateUniqueId();
        //await pede pro node aguardar o bloco finalizar, mas tem que declarar async
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        //return response.send('Hello World');
        return response.json({
            id
        })
    }
};