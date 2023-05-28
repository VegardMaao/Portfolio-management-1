export function characterCount(input, counter, maxValText, maxLength, minVal) {
    const inpLength = input.length;
    counter.innerText = inpLength;
    maxValText.innerText = maxLength;
    if (inpLength < minVal || inpLength >= maxLength){
        counter.style.cssText = "color: red;"
    } else {
        counter.style.cssText ="color: #fff;"
    }
}