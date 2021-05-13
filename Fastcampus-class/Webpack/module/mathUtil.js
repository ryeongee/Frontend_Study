const PI = 3.14;
const getCircleArea = r => r * r * PI;

//방법1
// module.exports = {
//     PI,
//     getCircleArea
// }

//방법2
// exports.PI = PI;
// exports.getCircleArea = getCircleArea;

//ESM
//1
// export{
//     PI,
//     getCircleArea
// }
//2 import 쓰는 법
export default{
    PI,
    getCircleArea
}