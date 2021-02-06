module.exports = function check(str, bracketsConfig) {
    while (str != "") {
        let flag = false;
        for (i = 0; i < bracketsConfig.length; i++) {
            brackets = bracketsConfig[i][0] + bracketsConfig[i][1];
            if (str.includes(brackets)) {
                str = str.replace(brackets, "");
                flag = true;
            }
        }
        if (!flag) break;
    }
    if (str === "") return true;
    else return false;
};
