import { test } from "node:test";
import assert from "node:assert";
import { slotMachine } from "./slotMachine.js";

test("change name", function () {
    assert.equal(1, 1);
});

test("two first equal", function() {
    var bet = 5;
    var symbols = ['+', '+', '%'];
    var result = slotMachine(bet, symbols);
    assert.equal(10, result);
});

test("two last equal", function() {
    var bet = 5;
    var symbols = ['-', '+', '+'];
    var result = slotMachine(bet, symbols);
    assert.equal(10, result);
});

test("neither two first nor two last equals", function() {
    var bet = 5;
    var symbols = ['-', '%', '+'];
    var result = slotMachine(bet, symbols);
    assert.equal(0, result);
});

test("three equals symbols", function() {
    var bet = 10;
    var symbols = ['+', '+', '+'];
    var result = slotMachine(bet, symbols);
    assert.equal(50, result);
});

test("three $", function() {
    var bet = 50;
    var symbols = ['$', '$', '$'];
    var result = slotMachine(bet, symbols);
    assert.equal(1000, result);
});


