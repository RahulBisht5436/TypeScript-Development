"use strict";
function SelectionStatement(option) {
    if (option == 1) {
        console.log(`statement 1 printed`);
    }
    else if (option == 2) {
        console.log("statment 2 is printed");
    }
    else {
        console.log("Last statement is printed");
    }
}
function switchStatmentFunction(key) {
    switch (key) {
        case 1:
            console.log("switch Satatement 1 is selected");
            break;
        default:
            break;
    }
}
function repeatingConsole(repeat) {
    for (let index = 0; index < repeat; index++) {
        console.log(`This is repeated ${index + 1} times =${"=".repeat(index)}>>`);
    }
}
module.exports = { SelectionStatement, switchStatmentFunction, repeatingConsole };
//# sourceMappingURL=flowControl.js.map