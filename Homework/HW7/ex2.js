function printAge(n) {
    let answer;
    if (n < 1 || n > 120) {
        answer = "출력할 수 없습니다";
    } 
    else if (n >= 65) {
        answer = "노인";
    } 
    else if (n >= 20) {
        answer = "성인";
    } 
    else answer = "미성년자";
    
    return answer;
  }
  
console.log(printAge(0)); // 출력할 수 없습니다
console.log(printAge(10)); // 미성년자
console.log(printAge(20)); // 성인
console.log(printAge(64)); // 성인
console.log(printAge(65)); // 노인
console.log(printAge(120)); // 노인
console.log(printAge(121)); // 출력할 수 없습니다
