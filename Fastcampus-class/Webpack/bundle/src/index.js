// 원과 직사각형의 넓이 구함
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const { getCircleArea, getSquareArea } = require('./mathUtil');
const { logInput, logResult, logFigureError } = require('./log');

rl.question(
    '구하려는 도형의 종류를 입력해주세요. (정사각형, 원) : ',
    figure => {
        console.log(`선택된 도형: ${figure}`);
    switch (figure) {
        case '원':
            rl.question('구하려는 원의 반지름 길이를 입력하세요 : ', input =>{
                console.log(logInput(input));
                console.log(logResult(figure, getCircleArea(input)));
                rl.close();
            });
            break;
        case '정사각형':
                rl.question('구하려는 정사각형의 반지름 길이를 입력하세요 : ', input =>{
                console.log(logInput(input));
                console.log(logResult(figure, getSquareArea(input)));
                rl.close();
            });
            break;
        default:
            console.log(logFigureError);
            rl.close();
    }
    }
);
