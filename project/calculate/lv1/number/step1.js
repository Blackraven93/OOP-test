export const handleStepOneNumber = (btn, input, currentNumber) => {
    if (input.innerText === '0') {
        input.innerText = btn.innerText
        currentNumber = input.innerText
    } else {
        input.innerText += btn.innerText
        currentNumber = input.innerText
    }
}