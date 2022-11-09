const PocketBase = require('pocketbase/cjs')

const client = new PocketBase('http://127.0.0.1:8090');

class UserService {
    async getPersons(){
        try {
            return await client.records.getFullList('bruger') 
        } catch (error) {
            console.log(error)
        }
    }

    async getPerson(personId){
        try {
            return await client.records.getOne('bruger', personId);
            
        } catch (error) {
            console.log(error)
        }
    }

    async updatePerson(personId, person){
        try {
            return await client.records.update('bruger', personId, person) 
        } catch (error) {
            console.log(error)
        }
    }

    async createPerson(person){
        try {
            return await client.records.create('bruger', person) 
        } catch (error) {
            console.log(error)
        }
    }

    async deletePerson(personId){
        try {
            return await client.records.delete('bruger', personId) 
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new UserService()