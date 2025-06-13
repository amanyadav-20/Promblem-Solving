/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let biggestFoundArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const maxHeight = Math.min(height[left], height[right]);
        const currentArea = maxHeight * (right - left);
        biggestFoundArea = Math.max(biggestFoundArea, currentArea);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return biggestFoundArea;
};