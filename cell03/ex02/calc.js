document.addEventListener("DOMContentLoaded", function () {

    document.getElementById('submit-btn').addEventListener('click', function () {
        const leftValue = document.getElementById('left-member').value;
        const rightValue = document.getElementById('right-member').value;
        const operator = document.getElementById('operator').value;


        const isValidPositiveInteger = (str) => {
            if (str.trim() === "") return false;
            const num = Number(str);
            return Number.isInteger(num) && num >= 0;
        };


        if (!isValidPositiveInteger(leftValue) || !isValidPositiveInteger(rightValue)) {
            alert('Error :(');
            console.log('Error :(');
            return;
        }

        const leftNum = parseInt(leftValue, 10);
        const rightNum = parseInt(rightValue, 10);
        let result;


        if ((operator === '/' || operator === '%') && rightNum === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }


        switch (operator) {
            case '+':
                result = leftNum + rightNum;
                break;
            case '-':
                result = leftNum - rightNum;
                break;
            case '*':
                result = leftNum * rightNum;
                break;
            case '/':
                result = leftNum / rightNum;
                break;
            case '%':
                result = leftNum % rightNum;
                break;
        }


        alert(result);
        console.log(result);
    });


    setInterval(function () {
        alert('Please, use me...');
    }, 30000);
});