
public class Solution {

    private static final int NO_COMMON_VALUES = -1;

    public int getCommon(int[] firstInput, int[] secondInput) {
        int firstIndex = 0;
        int secondIndex = 0;

        while (firstIndex < firstInput.length && secondIndex < secondInput.length) {
            if (firstInput[firstIndex] == secondInput[secondIndex]) {
                return firstInput[firstIndex];
            }

            if (firstInput[firstIndex] < secondInput[secondIndex]) {
                ++firstIndex;
            } else {
                ++secondIndex;
            }
        }
        return NO_COMMON_VALUES;
    }
}
