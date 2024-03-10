
using System;

public class Solution
{

    private static readonly int NO_COMMON_VALUES = -1;
    public int GetCommon(int[] firstInput, int[] secondInput)
    {
        int firstIndex = 0;
        int secondIndex = 0;

        while (firstIndex < firstInput.Length && secondIndex < secondInput.Length)
        {
            if (firstInput[firstIndex] == secondInput[secondIndex])
            {
                return firstInput[firstIndex];
            }

            if (firstInput[firstIndex] < secondInput[secondIndex])
            {
                ++firstIndex;
            }
            else
            {
                ++secondIndex;
            }
        }
        return NO_COMMON_VALUES;
    }
}
