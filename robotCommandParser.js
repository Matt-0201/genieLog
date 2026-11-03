export function robotCommandParser(hexaCommand) {
    if (hexaCommand == "0X123") {
        return "moveForward";
    } else {
        return 0;
    }
}