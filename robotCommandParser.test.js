import { test } from "node:test";
import assert from "node:assert";
import { robotCommandParser } from "./robotCommandParser.js";

test("command 0X123 to moveForward", function () {
    assert.equal(robotCommandParser("0X123"), "moveForward");
});

test("unknown command return 0", function () {
    assert.equal(robotCommandParser("blank"), 0);
});