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
    assert(bet*2, result);
});
