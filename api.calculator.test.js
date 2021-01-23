const { TestScheduler } = require("jest");
const request=require("supertest");
const app = require("./app");
const { response } = require("express");

describe("Testing /add path",()=>{

    test("it should return status code 200",done=>{
        request(app)
        .get("/app?a=1&b=1")
        .then(response=>{
            expect(response.statusCode).toBe(200);
            done();
            
        });

    });


    test("it should return application/json content-type",done=>{
        request(app)
        .get("/app?a=1&b=1")
        .then(response=>{
            expect(response.type).toBe("application/json");
            done();
            
        });

    });

    test("it should return valid object ",done=>{
        request(app)
        .get("/app?a=1&b=1")
        .then(response=>{
            expect(response.body).not.toBeNull();
            expect(response.body.result).not.toBeUndefine();
            done();
            
        });

    });


    test("it should return a correct answer ",done=>{
        request(app)
        .get("/app?a=1&b=4")
        .then(response=>{
            expect(response.body.result).toBe(5);
            done();
            
        });

    });


})
