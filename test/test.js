const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responds with a welcome message", (done) => {
        request(app).get("/").expect("Weclome! Ace the CI/CD bruh!", done);
    })
});

describe("GET /add/8/8", () => {
    it("Shows the correct sum", (done) => {
        request(app).get("/add/100/100").expect("The answer is : 200", done);
    })
});

describe("GET /multiply/10/10", () => {
    it("Shows the correct result", (done) => {
        request(app).get("/multiply/10/10").expect("The answer is : 100", done);
    })
});