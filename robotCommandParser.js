export function robotCommandParser(hexaCommands) {
    var commandList = [];
    var previousCommand = "";
    hexaCommands.forEach((hexaCommand) => {
       if (hexaCommand == "0X123") {
            previousCommand = "moveForward"; 
            commandList.push("moveForward");
        } else if (hexaCommand == "0X789") {
            previousCommand = "moveBackward"; 
            commandList.push("moveBackward");
        } else if (hexaCommand == "0XABC") {
            previousCommand = "stop"; 
            commandList.push("stop");
        } else {
            if (parseInt(hexaCommand)) {
                var occur = parseInt(hexaCommand);
                for (let i = 1; i<occur; i++) {
                    commandList.push(previousCommand);
                }
            }
        }
    });
    return commandList;
}