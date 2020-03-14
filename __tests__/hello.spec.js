
const api_url = require('../src/gatsby-node').api_url

describe("API URL", () => {
    test("it should be netlify", () => {
        // actual test
        expect(api_url).toEqual("https://happy-colden-65fff2.netlify.com")
    });
});