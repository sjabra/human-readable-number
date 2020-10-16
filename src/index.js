module.exports = function toReadable(number) {
    let numberStr = number.toString();
    const numberRepresentObj = {
        0: ["zero", "ten", ""],
        1: ["one", "eleven", ""],
        2: ["two", "twelve", "twenty"],
        3: ["three", "thirteen", "thirty"],
        4: ["four", "fourteen", "forty"],
        5: ["five", "fifteen", "fifty"],
        6: ["six", "sixteen", "sixty"],
        7: ["seven", "seventeen", "seventy"],
        8: ["eight", "eighteen", "eighty"],
        9: ["nine", "nineteen", "ninety"],
    };
    if (numberStr) {
        if (numberStr.length > 1) {
            let strRepresentation = [];
            if (numberStr.length > 2) {
                const hundredDigit = numberStr.charAt(0);
                strRepresentation.push(
                    numberRepresentObj[hundredDigit][0] + " hundred"
                );
            }

            let tenthDigit = numberStr.charAt(numberStr.length - 2);
            if (tenthDigit == "1") {
                tenthDigit = numberStr.charAt(numberStr.length - 1);
                strRepresentation.push(numberRepresentObj[tenthDigit][1]);
            } else {
                if (tenthDigit !== "0") {
                    strRepresentation.push(numberRepresentObj[tenthDigit][2]);
                }
                const lastDigit = numberStr.charAt(numberStr.length - 1);
                if (lastDigit !== "0") {
                    strRepresentation.push(numberRepresentObj[lastDigit][0]);
                }
            }
            return strRepresentation.join(" ");
        } else {
            return numberRepresentObj[numberStr][0];
        }
    }
};
