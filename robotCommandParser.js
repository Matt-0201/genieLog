export function robotCommandParser(hexaCommands) {
    var commandList = [];
    hexaCommands.forEach((hexaCommand) => {
       if (hexaCommand == "0X123") {
            commandList.push("moveForward");
        } else if (hexaCommand == "0X789") {
            commandList.push("moveBackward");
        } else if (hexaCommand == "0XABC") {
            commandList.push("stop");
        } 
    });
    return commandList;
}