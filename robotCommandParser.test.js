import { test } from "node:test";
import assert from "node:assert";
import { robotCommandParser } from "./robotCommandParser.js";

test("command 0X123 to moveForward", function () {
    assert.equal(robotCommandParser(["0X123"]), "moveForward");
});

test("command 0X789 to moveBackward", function () {
    assert.equal(robotCommandParser(["0X789"]), "moveBackward");
});

test("command 0XABC to stop", function () {
    assert.equal(robotCommandParser(["0XABC"]), "stop");
});

test("a list of hexa commands", function () {
    var hexaCommands = ["0X123", "0X123", "0X789", "0XABC"];
    var expectingCommand = ["moveForward", "moveForward", "moveBackward", "stop"];
    var actualCommand = robotCommandParser(hexaCommands);
    var isEqual = listsCompare(expectingCommand, actualCommand)
    assert.equal(isEqual, true);
});

test("unknown command return 0", function () {
    assert.equal(robotCommandParser([]), 0);
});

function listsCompare(list1, list2) {
    for (let i = 0; i< list1.length; i++) {
        if (list1[i] != list2[i]) {
            return false;
        }
    }
    return true;
}