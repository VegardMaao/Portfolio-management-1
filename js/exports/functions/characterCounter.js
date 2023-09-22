
/**
 * @description This function adds a character counter to my message textbox.
 * @param {string} inputVal - this takes the value of a text(box) input
 * @param {object} counter - a span element displaying the current number of characters in the input
 * @param {object} maxValText - a span element displaying the max number of characters in the input
 * @param {number} maxLength - the max length of the text input
 * @param {number} minVal - the min length of the input 
 */
export function characterCount(inputVal, counter, maxValText, maxLength, minVal) {
    const inpLength = inputVal.length;
    counter.innerText = inpLength;
    maxValText.innerText = maxLength;
    if (inpLength < minVal || inpLength >= maxLength){
        counter.style.cssText = "color: red;"
    } else {
        counter.style.cssText ="color: #fff;"
    }
}