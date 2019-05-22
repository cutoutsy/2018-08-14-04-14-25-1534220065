function num2lcd(num, output) {
    var lcd = [[".", ".", "."], [".", ".", "."], [".", ".", "."]];
    if (num != 1 && num != 3) {
        lcd[0][1] = "_";
    }
    if (num != 5 && num != 6) {
        lcd [1][2] = "|";
    }
    if (num != 2) {
        lcd[2][2] = "|";
    }
    if (num != 1 && num != 4 && num != 7 && num != 9) {
        lcd[2][1] = "_";
    }
    if (num == 0 || num == 2 || num == 6 || num == 8) {
        lcd[2][0] = "|";
    }
    if (num != 1 && num != 2 && num != 3 && num != 7) {
        lcd[1][0] = "|";
    }
    if (num != 0 && num != 1 && num != 7) {
        lcd[1][1] = "_";
    }
    for (var i = 0; i < 3; i++) {
        output[i] += lcd[i].join("");
    }
    return output;
}

module.exports = function main(input) {
    console.log("Debug Info");
    var result = new Array("", "", "");
    for (var i = 0; i < input.length; i++) {
        var num = input.charAt(i);
        result = num2lcd(num, result);
        if (i != input.length - 1) {
            for (var j = 0; j < result.length; j++) {
                result[j] = result[j] + " ";
            }
        }
    }

    for (var i = 0; i < result.length; i++) {
        result[i] = result[i] + "\n";
    }
    // console.log(result.join(""));
    return result.join("");
};