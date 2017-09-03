"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
var mocha = require("mocha");
chai.use(sinonChai);

var transferId = require("../lib/transferId");

describe("transfer number id to code", function () {
    it("returns correct code when insert a number id", function () {
        let result = transferId("123");
        let expext_string = "错误！输入学号不存在！";
        expect(result).to.equal(expext_string);
    });

    it("returns correct code when insert a number id with num more than 6", function () {
        let result = transferId("15030140071");
        let expext_string = "{SRUN2}x594745844;5@dx";
        expect(result).to.equal(expext_string);
    });

    it("returns correct code when insert a number id with char in it", function () {
        let result = transferId("1503014ea71");
        let expext_string = "输入的学号中含有非法字符！";
        expect(result).to.equal(expext_string);
    });

});

