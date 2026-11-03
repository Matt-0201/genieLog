export function robotCommandParser(hexaCommand) {
    if (hexaCommand == "0X123") {
        return "moveForward";
    } else if (hexaCommand == "0X789") {
        return "moveBackward";
    } else if (hexaCommand == "0XABC") {
        return "stop";
    } else {
        return 0;
    }
}