
#include <vector>
using namespace std;

class Solution {

    static const int NO_COMMON_VALUES = -1;

public:
    int getCommon(const vector<int>& firstInput, const vector<int>& secondInput) const {
        int firstIndex = 0;
        int secondIndex = 0;

        while (firstIndex < firstInput.size() && secondIndex < secondInput.size()) {
            if (firstInput[firstIndex] == secondInput[secondIndex]) {
                return firstInput[firstIndex];
            }

            if (firstInput[firstIndex] < secondInput[secondIndex]) {
                ++firstIndex;
            }
            else {
                ++secondIndex;
            }
        }
        return NO_COMMON_VALUES;
    }
};
