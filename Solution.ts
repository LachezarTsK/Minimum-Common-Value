
function getCommon(firstInput: number[], secondInput: number[]): number {
    const NO_COMMON_VALUES: number = -1;
    let firstIndex: number = 0;
    let secondIndex: number = 0;

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
