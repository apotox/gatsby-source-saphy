const fetch = require("node-fetch");
const { api_url,TESTS_KEY } = require('../src/saphy-config')

class Saphy {
    static check() {
        return fetch(`${api_url}/.netlify/functions/listProducts?key=${TESTS_KEY}`) //.then(resp => resp.json());
    }
}

describe("API URL", () => {


    test("Connection with the Server", () => {

        jest.mock('node-fetch');

        return Saphy.check().then(result=>expect(result.ok).toBe(true))
       
    })

});