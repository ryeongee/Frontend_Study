const logInput = input => `입력받은 값 : ${input}`; 
const logResult = (figure, result) => `구하려는 ${figure}의 넓이는 : ${result} 입니다.`; 
const logFigureError = "입력값이 잘 못 됐습니다. '정사각형' 혹은 '원'을 입력해주세요 ";

module.exports = {
    logInput,
    logResult,
    logFigureError
}