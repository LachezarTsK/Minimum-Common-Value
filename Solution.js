
/**
 * @param {number[]} firstInput
 * @param {number[]} secondInput
 * @return {number}
 */
var getCommon = function (firstInput, secondInput) {
    const NO_COMMON_VALUES = -1;
    let firstIndex = 0;
    let secondIndex = 0;

    while (firstIndex < firstInput.length && secondIndex < secondInput.length) {
        if (firstInput[firstIndex] === secondInput[secondIndex]) {
            return firstInput[firstIndex];
        }

        if (firstInput[firstIndex] < secondInput[secondIndex]) {
            ++firstIndex;
        } else {
            ++secondIndex;
        }
    }
    return NO_COMMON_VALUES;
};
